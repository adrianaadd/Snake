class Player {
    constructor(x,y,) {
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.sprite = document.createElement('div')
        this.directionX = 0
        this.directionY = 0
        this.speed = 5
        this.posArr = [{ x: this.x, y: this.y }]
        this.spriteArr = [this.sprite]
    }

    insertPlayer() {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        board.appendChild(this.sprite)
    }

    move() {
      let nextX =  this.x + this.speed * this.directionX
        if (this.directionX !== 0 && nextX <= 800 - this.width && nextX >= 0) {
            this.x = nextX
            this.sprite.style.left = this.x + 'px'  
            this.posArr.pop()
            this.posArr.unshift({ x: this.x, y: this.y })
            console.log(this.posArr)
        }

        let nextY = this.y + this.speed * this.directionY
      
        if (this.directionY !== 0 && nextY <= 600 - this.height && nextY >= 0) {
            this.y = nextY
            this.sprite.style.top = this.y + 'px'
            this.posArr.pop()
            this.posArr.unshift({ x: this.x, y: this.y })
            console.log(this.posArr)
        }
       
   }
}