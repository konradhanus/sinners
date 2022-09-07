class Score{
    constructor(ctx, canvas) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x: window.innerWidth/4/3, y: 20}

        this.width = 100;
        this.height = 100;
        this.spaceBettween = window.innerWidth/4
    }
    
    draw(text, text2, text3, text4, text5, text6, text7, text8) {
        // this.c.fillStyle = 'red';
        // this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.c.fillStyle = 'black';
        this.c.font = '24px Courier';
        this.c.fillText(text, this.position.x, this.position.y);
        this.c.fillText(text3, this.position.x+this.spaceBettween, this.position.y);
        this.c.fillText(text5, this.position.x+this.spaceBettween*2, this.position.y);
        this.c.fillText(text7, this.position.x+this.spaceBettween*3, this.position.y);

        this.c.fillText(text2, this.position.x+30, this.position.y+30);
        this.c.fillText(text4, this.position.x+this.spaceBettween+30, this.position.y+30);
        this.c.fillText(text6, this.position.x+this.spaceBettween*2+5, this.position.y+30);
        this.c.fillText(text8, this.position.x+this.spaceBettween*3+30, this.position.y+30);
    }
}

export default Score;