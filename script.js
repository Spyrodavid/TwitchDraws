var size = 0
const color = "#000000"
const playButton = document.getElementById('playButton')
const board = document.getElementById('board')
playButton.addEventListener('click', addUser)
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
		cell.classList.add("cell")
		cell.setAttribute("user", "user")
		board.appendChild(cell)
	}
}

function changeBoardSize() {
	size += 1
	board.style.gridTemplateColumns = `repeat(${size},auto)`
}

function addUser(user) {
	var cell = document.createElement("div")
	cell.style.backgroundColor = color
	cell.classList.add("cell")
	cell.setAttribute("user", `${user}`)
	board.appendChild(cell)
	cell.user = "123"
	if (size ** 2 + 1 ** 2 <= board.childElementCount) {
		changeBoardSize()
	}
}

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
