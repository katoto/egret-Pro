// 规则弹窗
class Pop02RuleC extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawPop();
    }

    private popTitle:egret.TextField;
    private drawPop(){
          // 大容器
       let BigWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       BigWrap.width = window['store']['stage_Width'];
       BigWrap.height = window['store']['stage_Height'];
       BigWrap.x = 0;
       BigWrap.y = 0;
       this.addChild(BigWrap);
    
       //弹窗蒙层
       let popLayer:egret.Shape = new egret.Shape();
       popLayer.graphics.beginFill(0x000000,0.6);
       popLayer.graphics.drawRect(0,0,window['store']['stage_Width'],window['store']['stage_Height'])
       popLayer.graphics.endFill();
       BigWrap.addChild(popLayer);

       //容器
       let popWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       popWrap.width = 680;
       popWrap.height = 900;
       popWrap.anchorOffsetX = popWrap.width/2;
       popWrap.anchorOffsetY = popWrap.height/2;
       popWrap.x = window['store']['stage_anWidth'];
       popWrap.y = window['store']['stage_anHeight'];
       BigWrap.addChild(popWrap);
        //背景
       let popBg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-02-bak_png'));
       popWrap.addChild(popBg);

       //标题
       this.popTitle = new egret.TextField();
       this.popTitle.text = '玩法说明';
       this.popTitle.size = 32;
       this.popTitle.textColor = 0xd9ddff;
       this.popTitle.width = 680;
       this.popTitle.height = 60;
       this.popTitle.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.popTitle.textAlign = egret.HorizontalAlign.CENTER;
       popWrap.addChild(this.popTitle); 

       //关闭按钮54*80
       let popClose:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-close_png'));
       popClose.anchorOffsetX = 54;
       popClose.x = 680;
       popClose.y = 0;
       popWrap.addChild(popClose);
       popClose.touchEnabled = true;
       popClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
           this.parent.removeChild(this)
       },this)
    }
}