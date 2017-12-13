// 信息类弹窗02
class Pop02Cham extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawPop();
    }
    private popWrap:egret.DisplayObjectContainer;
    private popTitle:egret.TextField;
    private load:egret.TextField;
    private popChamC ;

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
       this.popWrap = new egret.DisplayObjectContainer();
       this.popWrap.width = 680;
       this.popWrap.height = 953;
       this.popWrap.anchorOffsetX = this.popWrap.width/2;
       this.popWrap.anchorOffsetY = this.popWrap.height/2;
       this.popWrap.x = $store['stage_anWidth'];
       this.popWrap.y = $store['stage_anHeight'];
       this.addChild(this.popWrap);

       //标题
       this.popTitle = new egret.TextField();
       this.popTitle.text = '冠军记录';
       this.popTitle.size = 32;
       this.popTitle.textColor = 0xd9ddff;
       this.popTitle.width = 680;
       this.popTitle.height = 60;
       this.popTitle.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.popTitle.textAlign = egret.HorizontalAlign.CENTER;
       this.popWrap.addChild(this.popTitle);

         //标题容器
        let tWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        tWrap.y = 83;
        tWrap.width = 680;
        tWrap.height = 50;
        this.popWrap.addChild(tWrap);
        let text01 = this.drawTitie("期号",170,0);
        let text02 = this.drawTitie("赛事",170,170);
        let text03 = this.drawTitie("冠军",170,510);
        let text04 = this.drawTitie("冠军球队",170,340);
        tWrap.addChild(text01);
        tWrap.addChild(text02);
        tWrap.addChild(text03);
        tWrap.addChild(text04);

       //背景颜色
       let bgWhite:egret.Shape = new egret.Shape();
       bgWhite.graphics.beginFill(0x30313b);
       bgWhite.graphics.drawRect(0,130,680,805);
       bgWhite.graphics.endFill();
       this.popWrap.addChild(bgWhite);
       //load
       this.load = new egret.TextField();
       this.load.text = "请稍等，玩命加载中...";
       this.load.width = 680;
       this.load.y = 350;
       this.load.textColor = 0xd9ddff;
       this.load.textAlign = egret.HorizontalAlign.CENTER;
    //    this.popWrap.addChild(this.load);


       //以下是冠军记录特有内容
       this.popChamC = new ChampionC();
       this.popChamC.y = 130;
       this.popWrap.addChild( this.popChamC );
      

       //关闭按钮54*80
       let popClose:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-close_png'));
       popClose.anchorOffsetX = 54;
       popClose.x = 680;
       popClose.y = 0;
       this.popWrap.addChild(popClose);
       popClose.touchEnabled = true;
       popClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            //    this.removeChild(BigWrap);
            if( window['store'].$pop02Cham.parent ){
                window['store'].$Top.removeChild( window['store'].$pop02Cham ) ;
                // this.popChamC.clearAllWrap() ;
            }
       },this)

    }

     private drawTitie(t,w,x){ /*标题，宽度，x位置*/
        let text = new egret.TextField();
        text.textColor = 0x6f799a;
        text.size = 28;
        text.text = t;
        text.width = w;
        text.height = 50;
        text.x = x;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        text.textAlign = egret.HorizontalAlign.CENTER;
        return text;
    }

    /**
     *  出现loading & 直接请求
     */
    async getList(){
        if( !!this.load ){
            this.popWrap.addChild(this.load);
        }
        await this.popChamC.upPopWrapMsg();
        if( !!this.load && this.load.parent ){
            this.popWrap.removeChild(this.load);
        }
    }
}