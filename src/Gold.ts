// 金币
class Gold extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawGold();
    }
    private drawGold(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('gold_png'));
        this.addChild(img);
        // this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this); 
    }
    // private onEnterFrame(event:egret.Event) { 
    //     var x = this.x;
    //     var y = this.y;
    //     if( y < this.stage.stageHeight - this.height) {
    //         this.y += this.speed;
    //     }
    //     if(x < this.stage.stageWidth - this.width && x > 0) {
    //         this.x += this.speed * this.diraction;
    //     } else if(x <= 0) {
    //         this.x += this.speed;
    //         this.diraction = 1;
    //     } else { 
    //         this.x -= this.speed;
    //         this.diraction = -1;
    //     }
    // }
}