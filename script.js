var Size = 3


const checkButton = document.getElementById('checkButton')
const playButton = document.getElementById('playButton')
const board = document.getElementById('board')

checkButton.addEventListener('click', playRound)
playButton.addEventListener('click', fate)
var cellElements = [];

startGame()

function startGame() {
	board.style.gridTemplateColumns = `repeat(${Size},auto)`
	addCellsToBoard()
	clearGame()
	setCoordinate()
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
	e.target.classList.toggle('living')
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
		let x = i % Size
		let y = Math.floor(i / Size)
		cell.setAttribute('x', `${x}`)
		cell.setAttribute('y', `${y}`)
		i++
	})
}

function playRound() {
	board.childNodes.forEach(cell => {
		
		let coordinates = getCoordinates(cell)
		let cellsAlive = getAroundCell(coordinates)
		setFate(cell, cellsAlive)
	})
}

function getCoordinates(cell){
	let x = parseInt(cell.getAttribute('x'))
	let y = parseInt(cell.getAttribute('y'))
	return [x, y]
}

function getAroundCell(coordinates){
	

	let cellsAlive = 0

	for (cell of listCoordinates(coordinates)){
		if (checkCell(lineCoordinate(cell))){
			cellsAlive+=1
		}
	}
	return cellsAlive
}

function lineCoordinate(coordinates){
	[x,y] = coordinates
	return line = x*Size+y
}

function checkCell(current){
	if (board.childNodes[current].classList.contains('living')){
		return true
	}
}

function listCoordinates(coordinates){
	[x,y] = coordinates
	check = []
	let list = []
	list.push([x,y+1])
	list.push([x,y-1])
	list.push([x+1,y])
	list.push([x-1,y])
	list.push([x+1,y+1])
	list.push([x-1,y-1])
	list.push([x+1,y-1])
	list.push([x-1,y+1])
	list = list.filter(item=>{
		console.log(item)
		if (item[0]<0 || item[1]<0 || item[0]>x-1 || item[1]>x-1){
			console.log('no')
			return false
		} else {
			console.log('yes')
			return true
			
		}
	})
	//console.log(coordinates)
	//console.log(list)
	return list
}

function setFate(cell, cellsAlive){

	if (cell.classList.contains('living')){
		if (cellsAlive < 2){
			cell.classList.add('dying')
		} else if (cellsAlive == 2 || cellsAlive == 3) {
			
		} else if (cellsAlive > 3){
			cell.classList.add('dying')
		}
	} else {
		if (cellsAlive == 3){
			cell.classList.add('living')
		}
	}
}

function fate(){
	board.childNodes.forEach(cell=>{
		if (cell.classList.contains('dying')){
			cell.classList.remove('living')
			cell.classList.remove('dying')
		}
	})
}