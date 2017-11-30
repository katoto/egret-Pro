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
       this.layer.graphics.beginFill(0xff0000,0);
       this.layer.graphics.drawRect(0,0,Width,Height);
       this.layer.graphics.endFill();
       this.addChild(this.layer);

       //包裹容器
       let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       wrap.width = 742;
       wrap.height = 227;
       wrap.anchorOffsetX = 371;
       wrap.anchorOffsetY = 113;
       wrap.x = Width/2;
       wrap.y = Height/2;
       this.addChild(wrap);

       //弹窗中间紫色背景
       this.bgImg = new egret.Bitmap(RES.getRes('pop-game_png'));
       wrap.addChild(this.bgImg);

       //竞猜开始
       this.bgText = new egret.Bitmap(RES.getRes(Bgtext));
       this.bgText.x = 236;
       this.bgText.y = 76;
       wrap.addChild(this.bgText);

    }

}
