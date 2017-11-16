// 竞猜开始or结束弹窗
class Pop extends egret.DisplayObjectContainer{
    // 弹窗
    public constructor(Width,Height,Bgtext){
        super();
        this.drawPop(Width,Height,Bgtext);
    }
    private textField:egret.TextField;
    private layer:egret.Shape;
    private bgImg:egret.Bitmap;
    private bgText:egret.Bitmap;

    private drawPop(Width,Height,Bgtext) {
        //蒙层
       this.layer = new egret.Shape();
       this.layer.graphics.beginFill(0xff0000,0.1);
       this.layer.graphics.drawRect(0,0,Width,Height);
       this.layer.graphics.endFill();
       this.addChild(this.layer);
       //弹窗中间紫色背景
       this.bgImg = new egret.Bitmap(RES.getRes('pop-game_png'));
       this.bgImg.anchorOffsetX = this.bgImg.width/2;
       this.bgImg.anchorOffsetY = this.bgImg.height/2;
       this.bgImg.x = Width/2;
       this.bgImg.y = Height/2;
       this.addChild(this.bgImg);


        this.textField = new egret.TextField();
        this.addChild(this.textField);

       //竞猜开始
       this.bgText = new egret.Bitmap(RES.getRes(Bgtext));
       this.bgText.anchorOffsetX = this.bgText.width/2;
       this.bgText.anchorOffsetY = this.bgText.height/2;
       this.bgText.x = Width/2;
       this.bgText.y = Height/2;
       this.addChild(this.bgText);
    }

}
