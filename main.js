let board = document.getElementById('canvas')
let screen = document.getElementById('start')
let button = document.getElementById('start-button')
//Player
let body
let player = new Player(400, 550)
let timerMovePlayer
let timerMoveBody
let index = 0



function startGame() {
    player.insertPlayer()
    timerMovePlayer = setInterval(() => player.move(), 10)
  
   
}

//Key Listener
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
            player.directionX = -1
            body.direction = -1
            break
        case 'd':
            player.directionX = 1
            body.direction = 1
            break
        case 'w':
            player.directionY = -1
            body.direction = -2
            break
        case 's':
            player.directionY = 1
            body.direction = 2
            break
        case ' ':
            body = new Body(index)
            body.insertBody()
            index+=1
            break
    }
})

window.addEventListener('keyup', function (e) {
    player.directionX = 0
    player.directionY = 0
})

button.addEventListener("click",() => {
    console.log("Press")
    board.style.display = "block"
    screen.style.display= "none"
    startGame()
})
