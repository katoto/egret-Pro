// 规则弹窗
class Pop02RuleC extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawPop();
    }
    private popWrap;
    private popTitle:egret.TextField;
    private drawPop(){
        let $store = window['store'] ;
          // 大容器
       let BigWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       BigWrap.width = $store['stage_Width'];
       BigWrap.height = $store['stage_Height'];
       BigWrap.x = 0;
       BigWrap.y = 0;
       this.addChild(BigWrap);
    
       //弹窗蒙层
       let popLayer:egret.Shape = new egret.Shape();
       popLayer.graphics.beginFill(0x000000,0.6);
       popLayer.graphics.drawRect(0,0,$store['stage_Width'],$store['stage_Height'])
       popLayer.graphics.endFill();
       BigWrap.addChild(popLayer);

       //容器
       this.popWrap = new egret.DisplayObjectContainer();
       this.popWrap.width = 680;
       this.popWrap.height = 900;
       this.popWrap.scaleX = 0;
       this.popWrap.scaleY = 0;
       this.popWrap.anchorOffsetX = this.popWrap.width/2;
       this.popWrap.anchorOffsetY = this.popWrap.height/2;
       this.popWrap.x = $store['stage_anWidth'];
       this.popWrap.y = $store['stage_anHeight'];
       BigWrap.addChild(this.popWrap);
       
        //背景
       let popBg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-rule_png'));
       this.popWrap.addChild(popBg);

       //标题
       this.popTitle = new egret.TextField();
       this.popTitle.text = '玩法说明';
       this.popTitle.size = 32;
       this.popTitle.textColor = 0xd9ddff;
       this.popTitle.width = 680;
       this.popTitle.height = 60;
       this.popTitle.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.popTitle.textAlign = egret.HorizontalAlign.CENTER;
       this.popWrap.addChild(this.popTitle); 

       //关闭按钮54*80
       let popClose:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-close_png'));
       popClose.anchorOffsetX = 54;
       popClose.x = 680;
       popClose.y = 0;
       this.popWrap.addChild(popClose);
       popClose.touchEnabled = true;
       popClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
           this.parent.removeChild(this)
       },this)
    }
    public scale(){
        egret.Tween.get(this.popWrap).to({scaleX:1,scaleY:1},500,egret.Ease.circInOut );
    }
}