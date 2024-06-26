class Body {
    constructor(index) {
        this.width = 25
        this.height = 25
        this.sprite = document.createElement('div')
        this.direction = -1
        this.index = index
        this.timerMoveBody = setInterval(() => this.moveBody(), 10)
    }
    insertBody() {
        this.sprite.setAttribute('class', 'body')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        let nextx
        let nexty

        switch (direction) {

            case -1:
                if (player.posArr.length > 1) {
                    nextx = player.posArr[player.posArr.length - 1].x + 25;
                    nexty = player.posArr[0].y + 13;

                } else {
                    nextx = player.posArr[player.posArr.length - 1].x + 50;
                    nexty = player.posArr[player.posArr.length - 1].y + 13;
                }
                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                player.posArr.push({ x: nextx, y: nexty })
                break;
            case 1:
                if (player.posArr.length > 1) {
                    console.log(player.posArr[player.posArr.length - 1])
                    nextx = player.posArr[player.posArr.length - 1].x - 25;
                    nexty = player.posArr[0].y;
                }
                else {
                    nextx = player.posArr[player.posArr.length - 1].x - 25;
                    nexty = player.posArr[player.posArr.length - 1].y + 13;
                }
                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                player.posArr.push({ x: nextx, y: nexty })
                break;
            case -2:
                if (player.posArr.length > 1) {
                    nextx = player.posArr[0].x + 13;
                    nexty = player.posArr[player.posArr.length - 1].y + 25;
                }
                else {
                    nextx = player.posArr[0].x + 13;
                    nexty = player.posArr[player.posArr.length - 1].y + 50;
                    console.log("hola")

                }
                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                player.posArr.push({ x: nextx, y: nexty })


                break;
            case 2:
                if (player.posArr.length > 1) {
                    nextx = player.posArr[0].x + 13;
                    nexty = player.posArr[player.posArr.length - 1].y - 25;
                }
                else {
                    nextx = player.posArr[player.posArr.length - 1].x + 13;
                    nexty = player.posArr[player.posArr.length - 1].y - 25;
                }


                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                player.posArr.push({ x: nextx, y: nexty })
                break;


        }
        board.appendChild(this.sprite)
    }

    moveBody() {


        let nextx
        let nexty

        switch (direction) {
            case -1:

                nextx = player.posArr[this.index].x + 50;
                nexty = player.posArr[this.index].y + 15;

                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                break;
            case 1:
                nextx = player.posArr[this.index].x - 25;
                nexty = player.posArr[this.index].y + 15;

                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                break;
            case -2:
                nextx = player.posArr[this.index].x + 13;
                nexty = player.posArr[this.index].y + 50;

                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                break;
            case 2:
                nextx = player.posArr[this.index].x + 13;
                nexty = player.posArr[this.index].y - 25;

                this.sprite.style.left = nextx + 'px';
                this.sprite.style.top = nexty + 'px';
                break;


        }

    }
}