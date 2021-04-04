var size = 2
const board = document.getElementById('board')

startBoard(size)
function startBoard(size) {
	board.style.gridTemplateColumns = `repeat(${size},auto)`
	addCellsToBoard(size)
}

function addCellsToBoard(size, color) {
	for (let step = 0; step < size ** 2; step++) {
		var cell = document.createElement("div")
		cell.style.backgroundColor = "grey"
		cell.classList.add("cell")
		board.appendChild(cell)
	}
}

function checkFull() {
	cells = Array.from(board.childNodes)
	console.log(cells)
	cells = cells.filter(cell=>{
		checkNode(cell)
	})
	
	cells.forEach(cell =>{console.log(cell.style.backgroundColor)})
	if(cells.every(cell =>{cell.backgroundColor != "grey"})){
	board.childNodes.forEach(cell=> (cell.backgroundColor = "grey"))
	}
}

function addCell(color) {
	var cell = board.childNodes[Math.floor(Math.random() * size**2) + 1]
	cell.style.backgroundColor = color
	checkFull()
}

function checkNode(node) {

	ans = node.classList.contains("cell")
	console.log(ans)
	return ans
}

function t() {
	addCell("red")
}
/*
function changeColor(user, color) {
	var specUser
	board.querySelectorAll("div").forEach(cell => {
		console.log(cell.getAttribute("user"))
		if (cell.getAttribute("user") == user) {
			specUser = cell
			console.log(specUser)
		}
	})
	console.log(specUser+"123")
	specUser.style.backgroundColor = color
}
*/