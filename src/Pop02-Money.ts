// 被踢弹窗
class Pop02Money extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawPop();
    }
    private popTitle:egret.TextField;
    private cntText01:egret.TextField;
    private popBtn1:egret.Bitmap ;
    private popBtn2:egret.Bitmap ;

    private drawPop(){
    
       //弹窗蒙层
       let popLayer:egret.Shape = new egret.Shape();
       popLayer.graphics.beginFill(0x000000,0.6);
       popLayer.graphics.drawRect(0,0,window['store']['stage_Width'],window['store']['stage_Height'])
       popLayer.graphics.endFill();
       this.addChild(popLayer);

       //容器
       let popWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       popWrap.width = 680;
       popWrap.height = 440;
       popWrap.anchorOffsetX = popWrap.width/2;
       popWrap.anchorOffsetY = popWrap.height/2;
       popWrap.x = window['store']['stage_anWidth'];
       popWrap.y = window['store']['stage_anHeight'];
       this.addChild(popWrap);
    //    egret.Tween.get( popWrap ).to({width:680,height:440},2000);  

        //背景    
       let popBg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-out_png'));
       popWrap.addChild(popBg);

       //标题
       this.popTitle = new egret.TextField();
       this.popTitle.text = '金币不足';
       this.popTitle.size = 32;
       this.popTitle.textColor = 0xd9ddff;
       this.popTitle.width = 680;
       this.popTitle.height = 60;
       this.popTitle.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.popTitle.textAlign = egret.HorizontalAlign.CENTER;
       popWrap.addChild(this.popTitle); 

         //内容
       //段落1
       this.cntText01 = new egret.TextField();
       this.cntText01.y = 140;
       this.cntText01.text = '金币不够了，您可前往商城购买';
       this.cntText01.size = 28;
       this.cntText01.textColor = 0xffffff;
       this.cntText01.width = 680;
       this.cntText01.height = 48;
       this.cntText01.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.cntText01.textAlign = egret.HorizontalAlign.CENTER;
       popWrap.addChild(this.cntText01); 

       //取消
       this.popBtn1 = new egret.Bitmap(RES.getRes('pop-btn01_png'));
       this.popBtn1.x = 37;
       this.popBtn1.y = 320;
       popWrap.addChild(this.popBtn1);
       this.popBtn1.touchEnabled = true;
       this.popBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            this.parent.removeChild(this)
        }, this);

        //充值
       this.popBtn2 = new egret.Bitmap(RES.getRes('pop-btn02_png'));
       this.popBtn2.x = 360;
       this.popBtn2.y = 320;
       popWrap.addChild(this.popBtn2);
       this.popBtn2.touchEnabled = true;
       this.popBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            //   跳充值
            let $store = window['store'] ;
            if( $store['env_variable'].src ){
                switch ( $store['env_variable'].src ){
                    case '500app':
                        window.location.href = 'http://crazybet.choopaoo.com/500app?jumpToPay=true' ;
                    ;break;
                    case 'off':
                        window.location.href = 'http://crazybet.choopaoo.com/official?jumpToPay=true&from=off' ;
                    break;
                    case 'off-mipan':
                        window.location.href = 'http://crazybet.choopaoo.com/official?jumpToPay=true&from=off-mipan' ;                    
                    ;break;
                    case 'qqsd':
                        window.location.href = 'http://crazybet.choopaoo.com/500qqsd/?jumpToPay=true' ;
                    ;break;
                    case '500touch':
                        window.location.href = 'http://crazybet.choopaoo.com/fkcqH5/?jumpToPay=true' ;
                    ;break;

                }
            }

        }, this);
    }

}