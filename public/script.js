var size = 5
const board = document.getElementById('board')

/*
startBoard(size, color)

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
*/
function changeBoardSize() {
	size += 1
	board.style.gridTemplateColumns = `repeat(${size},auto)`
}

function addCell(color) {
	var cell = document.createElement("div")
	cell.style.backgroundColor = color
	cell.classList.add("cell")
	board.appendChild(cell)
	if (size ** 2 + 1 ** 2 <= board.childElementCount) {
		changeBoardSize()
	}
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