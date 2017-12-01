// 拓展模板
class Test extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawxx();
    }
    private popWrap:egret.DisplayObjectContainer;
    private drawxx(){
      

        // var mask:egret.Shape = new egret.Shape();
        // mask.anchorOffsetX = 371;
        // mask.anchorOffsetY = 113.5;
        // mask.graphics.beginFill(0x0000ff);
        // mask.graphics.drawRect(window['store']['stage_anWidth'],window['store']['stage_anHeight'],742,227);
        // mask.graphics.endFill();
        // this.addChild(mask);

        // var pop = new Pop(window['store']['stage_Width'],window['store']['stage_Height'],'text-begin_png');
        // pop.width = 742;
        // pop.height = 227;
        // pop.y = 227;
        // this.addChild(pop);
        // pop.mask = mask;
        // egret.Tween.get( pop ).to( { y : 0 } , 500 )
    }
}