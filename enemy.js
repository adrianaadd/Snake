class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50
        this.height = 50
        this.sprite = document.createElement('div')
        this.speed = 1
        this.timerMoveEnemy = null
    }

    insertEnemy() {
        this.sprite.setAttribute('id', 'enemy')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        board.appendChild(this.sprite)
        this.startMove()
    }

    removeEnemy(index) {
        enemyArray.splice(index, 1)
        board.removeChild(this.sprite)
        clearInterval(this.timerMoveEnemy)
    }

    checkColission() {
        let playerX2 = player.x + player.width
        let enemyX2 = this.x + this.width

        if (this.y + this.height >= player.y &&
            this.x >= player.x && this.x <= playerX2 ||
            this.y + this.height >= player.y &&
            enemyX2 >= player.x && enemyX2 <= playerX2
        ) {
            this.removeEnemy()
            alert("Muerto")
        }
    }

    move() {
        let nextY = this.y + this.speed
        if (nextY <= 600 - this.height) {
            this.y = nextY
            this.sprite.style.top = this.y + 'px'
            this.checkColission()
        }
        else {
            this.removeEnemy()
        }
    }
    startMove() {
        this.timerMoveEnemy = setInterval(() => this.move(), 10);
    }
}
