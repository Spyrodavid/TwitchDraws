const size = 5
const color = "#000000"
const playButton = document.getElementById('playButton')
const board = document.getElementById('board')

//playButton.addEventListener('click', auto)
var users = []
startBoard(size, color)

function startBoard(size, color) {
	board.style.gridTemplateColumns = `repeat(${size},auto)`
	addCellsToBoard(size, color)
}
function addCellsToBoard(size, color) {
	for (let step = 0; step < size ** 2; step++) {
		var cell = document.createElement("div")
		cell.style.backgroundColor = color
		board.appendChild(cell)
	}
}

function updateBoard() {
	const cells = board.querySelectorAll("div")
	for (cell of cells) {
		

	}
}


