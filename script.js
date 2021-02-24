var Size = 110
var interval

Size = Size + 1

const clearButton = document.getElementById('clearButton')
const playButton = document.getElementById('playButton')
const board = document.getElementById('board')

clearButton.addEventListener('click', clear)
playButton.addEventListener('click', auto)
var cellElements = [];

startGame()

function startGame() {
	board.style.gridTemplateColumns = `repeat(${Size},auto)`
	addCellsToBoard()
	clearGame()
	setCoordinate()
	setBuffer()
}

function clearGame() {
	cellElements = document.querySelectorAll('[data-cell]')
	cellElements.forEach(cell => {
		cell.addEventListener('click', handleClick)
		cell.addEventListener('contextmenu', handleClick)
		cell.addEventListener("contextmenu", e => e.preventDefault());
	})
}

function handleClick(e) {
	e.target.classList.toggle('alive')
}

function removecolor(cell, currentclass) {
	cell.classList.remove(currentclass)
}

function removeCellsFromBoard(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function addCellsToBoard() {
	for (let step = 0; step < Size ** 2; step++) {
		var cello = document.createElement("div")
		cello.setAttribute("data-cell", '')
		cello.classList.add("cell")
		board.appendChild(cello)
	}
}

function setCoordinate() {
	i = 0
	board.childNodes.forEach(cell => {
		cell.setAttribute('num', `${i}`)
		i++
	})
}

function playRound() {
	board.childNodes.forEach(cell => {
		let cellsAlive = getAroundCell(cell)
		setFate(cell, cellsAlive)
	})
}

function getCoordinate(cell){
	let num = parseInt(cell.getAttribute('num'))
	return num
}

function getAroundCell(cell){
	

	let cellsAlive = 0

	for (cell of listCoordinates(cell)){
		if (checkCell(cell)){
			cellsAlive+=1
		}
	}
	return cellsAlive
}

function checkCell(current){
	if (current.classList.contains('alive')){
		return true
	}
}

function listCoordinates(cell){
	currCell = parseInt(cell.getAttribute('num'))
	let list = []
	list.push(currCell+1)
	list.push(currCell-1)
	list.push(currCell+Size)
	list.push(currCell+Size+1)
	list.push(currCell+Size-1)
	list.push(currCell-Size)
	list.push(currCell-Size+1)
	list.push(currCell-Size-1)
	list = list.filter(item=>{
		if (item<0 || item>(Size**2)-1){
			return false
		} else {
			return true
		}
	})

	list = list.map(item=>{
		return board.childNodes[item]
	})
	return list
}

function setFate(cell, cellsAlive){
	if (!cell.classList.contains('buffer')){

	if (cell.classList.contains('alive')){
		if (cellsAlive < 2){
			cell.classList.add('dying')
		} else if (cellsAlive == 2 || cellsAlive == 3) {
			
		} else if (cellsAlive > 3){
			cell.classList.add('dying')
		}
	} else {
		if (cellsAlive == 3){
			cell.classList.add('birth')
		}
	}
}
}

function fate(){
	board.childNodes.forEach(cell=>{
		if (cell.classList.contains('alive')){
			cell.classList.add('trail')
		}
		if (cell.classList.contains('dying')){
			cell.classList.remove('alive')
			cell.classList.remove('dying')
		}
		else if (cell.classList.contains('birth')){
			cell.classList.add('alive')
			cell.classList.remove('dying')
			cell.classList.remove('birth')
		}
		
	})
}

function auto(){
	interval = setInterval(double, 100);
}

function double(){
	buffer()
	playRound()
	fate()
}

function setBuffer(){
	let list = []
	list = list.concat(range(0,Size))
	for (x of range(1,Size-2)){
		list = list.concat(Size*x)
		list = list.concat(Size*x+Size-1)
	}
	list = list.concat(range(Size**2-Size-1,Size**2-1))

	list.forEach(cell=>{
		board.childNodes[cell].classList.add('buffer')
})}

function range(min, max) {
	var len = max - min + 1;
	var arr = new Array(len);
	for (var i=0; i<len; i++) {
	  arr[i] = min + i;
	}
	return arr;
  }

function buffer(){
	  board.childNodes.forEach(cell=>{
		  if (cell.classList.contains('buffer')){
		  cell.classList.remove('alive')
		  cell.classList.remove('birth')
		  cell.classList.remove('dying')
	  }})
  }

function clear(){
	clearInterval(interval)
	board.childNodes.forEach(cell=>{
		for (x of cell.classList){
			 if (x != 'buffer' && x != 'cell'){
			cell.classList.remove(x)
			}
		}
	})
}