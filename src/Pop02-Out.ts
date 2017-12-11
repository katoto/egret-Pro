// 被踢弹窗
class Pop02Out extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawPop();
    }
    private popTitle:egret.TextField;
    private cntText01:egret.TextField;
    private cntText02:egret.TextField;

    private popClose:egret.Bitmap ;

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
       this.popTitle.text = '温馨提示';
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
    //    this.cntText01.text = '您很久未操作了，是不是太累了，';
       this.cntText01.size = 28;
       this.cntText01.textColor = 0xffffff;
       this.cntText01.width = 680;
       this.cntText01.height = 48;
       this.cntText01.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.cntText01.textAlign = egret.HorizontalAlign.CENTER;
       popWrap.addChild(this.cntText01); 

       //段落2
       this.cntText02 = new egret.TextField();
       this.cntText02.y = 188;
    //    this.cntText02.text = '休息一下，再开始游戏吧！';
       this.cntText02.size = 28;
       this.cntText02.textColor = 0xffffff;
       this.cntText02.width = 680;
       this.cntText02.height = 48;
       this.cntText02.verticalAlign = egret.VerticalAlign.MIDDLE;
       this.cntText02.textAlign = egret.HorizontalAlign.CENTER;
       popWrap.addChild(this.cntText02); 

       //关闭按钮54*80
       this.popClose = new egret.Bitmap(RES.getRes('pop-btn_png'));
       this.popClose.x = 183;
       this.popClose.y = 320;
       popWrap.addChild(this.popClose);
       this.popClose.touchEnabled = true;
        // RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
    }

    /**
     *   长时间未操作 函数
     */
    private longTime_Fn(){
        let $store = window['store'] ;
        if( $store['env_variable'].src ){
            switch ( $store['env_variable'].src ){
                case '500app':
                    window.location.href = 'http://crazybet.choopaoo.com/500app/#/h5/home/hot/' ;
                ;break;
                case 'off':
                    window.location.href = 'http://crazybet.choopaoo.com/official?from=off' ;
                break;
                case 'off-mipan':
                    window.location.href = 'http://crazybet.choopaoo.com/official?from=off-mipan' ;                    
                ;break;
                case 'qqsd':
                    window.location.href = 'http://crazybet.choopaoo.com/500qqsd/#/h5/home/hot' ;
                ;break;
                case '500bf':
                    // 这个要特殊处理 ！
                    window.location.href = 'https://www.500.com' ;                
                ;break;

            }
        }
    }

    /**
     *  websocket error 函数
     */
    private socketErr_Fn(){
        window.location.reload() ;
    }

    /**
     *  长时间未操作
     */
    private showLongTime(){
        this.cntText01.text = '您很久未操作了，是不是太累了，';
        this.cntText02.text = '休息一下，再开始游戏吧！';

        if( !!this.popClose ){
            this.popClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.socketErr_Fn ,this) ;
        }
        this.popClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.longTime_Fn ,this) ;

    }
    /**
     * websocket 链接error
     */
    private showSocketErr(){
        this.cntText01.text = '网络连接异常，请重新连接';
        this.cntText02.text = '';
        if( !!this.popClose ){
            this.popClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.longTime_Fn ,this) ;
        }
        this.popClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.socketErr_Fn ,this) ;
    }
}