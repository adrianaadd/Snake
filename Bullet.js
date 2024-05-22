class Bullet {
    constructor(enemyArray) {
        this.x = player.x + 25
        this.y = player.y - 5
        this.width = 5
        this.height = 5
        this.sprite = document.createElement('div')
        this.speed = 5
        this.timerMoveBullet = null
        this.enemyArray = enemyArray
    }

    removeBullet() {
        clearInterval(this.timerMoveBullet)
        board.removeChild(this.sprite)
    }

     insertBullet() {
        this.sprite.setAttribute('class', 'bullet')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
         board.appendChild(this.sprite)
         this.startMove()
     }
    
    checkColission() {
        
        this.enemyArray.forEach((enemy, index) => {
         
            if (this.x < enemy.x + enemy.width &&
                this.y < enemy.y + enemy.height &&
                this.x + this.width > enemy.x &&
                this.y + this.height > enemy.y) {
                
              enemy.removeEnemy(index)
                this.removeBullet() 
            }
        })
    }
    
     move() {
        let nextY = this.y - this.speed 
        if (nextY >= 0 + this.height) {
            this.y = nextY
            this.sprite.style.top = this.y + 'px'
            this.checkColission() 
        }
        else {
            this.removeBullet()
        }
     }
    
    startMove() {
        this.timerMoveBullet = setInterval(() => this.move(), 10);
    }
}