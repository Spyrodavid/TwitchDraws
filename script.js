var size = 5
const color = "#000000"
const user = "Spyro"
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
	for (let step = 0; step < size ** 2; step++ ) {
		var cell = document.createElement("div")
		cell.style.backgroundColor = color
		cell.classList.add("cell")
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
	board.appendChild(cell)
	cell.user = "123"
	if (size**2+1 ** 2 <= board.childElementCount) {
		changeBoardSize()
	}
	test()
}
 function test() {
	i = 0
	board.childNodes.forEach(cell => {
		cell.setAttribute('num', `${i}`)
		i++
	})
 }
function changeColor(user, color) {
	let specUser = board.childNodes.filter(cell =>{
		return cell.user == user
	})
	specUser.backgroundColor = color
}