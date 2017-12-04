// 信息类弹窗02
class Pop02Cham extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawPop();
    }

    private popTitle:egret.TextField;
    private drawPop(){
       let $store = window['store'] ;

       //弹窗蒙层
       let popLayer:egret.Shape = new egret.Shape();
       popLayer.graphics.beginFill(0x000000,0.6);
       popLayer.graphics.drawRect(0,0, $store['stage_Width'], $store['stage_Height'])
       popLayer.graphics.endFill();
       this.addChild(popLayer);

       //背景
       let popBg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-02_png'));
       popBg.anchorOffsetX = popBg.width/2;
       popBg.anchorOffsetY = popBg.height/2;
       popBg.x = $store['stage_anWidth'];
       popBg.y = $store['stage_anHeight'];
       this.addChild(popBg);

       //容器
       let popWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       popWrap.width = 680;
       popWrap.height = 953;
       popWrap.anchorOffsetX = popWrap.width/2;
       popWrap.anchorOffsetY = popWrap.height/2;
       popWrap.x = $store['stage_anWidth'];
       popWrap.y = $store['stage_anHeight'];
       this.addChild(popWrap);

       //标题
       this.popTitle = new egret.TextField();
       this.popTitle.text = '冠军记录';
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
           this.parent.removeChild(this);
       },this)

       //以下是冠军记录特有内容
       let popChamC = new ChampionC();
       popChamC.y = 83;
       popWrap.addChild(popChamC);

    }
}