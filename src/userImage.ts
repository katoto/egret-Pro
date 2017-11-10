
class userImage extends eui.UILayer {
    // 用户头像
    public constructor(name,src,gold,winG?){
        super();
        // this.once(egret.Event.ADDED_TO_STAGE,this.addToStage(),this);
        console.log( winG )
        console.log( 12344 )
        this.addToStage(name,src,gold,winG);
    }

    // private _source:Array<string> =  [
    //     "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG",
    //     "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2602004849,1504397654&fm=173&s=B180DB1548E33B0925B8B884030070E1&w=218&h=146&img.JPEG",
    //     "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3999684790,170950214&fm=173&s=B79DAC6C62F3002704A160180300C09A&w=218&h=146&img.JPEG"
    // ];
    private myGold:egret.TextField;
    private winGold:egret.TextField;
    private bgBorder:egret.Bitmap;


    private addToStage(name,src,gold,winG) {
        let bg:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        //  bg.width = 88;
        // bg.height = 124;
        bg.width = 94;
        bg.height = 130;
        this.addChild(bg);
       
        // 插入灰色背景
        let bgBlack:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-avatar_png'));
        bgBlack.x = 3;
        bgBlack.y = 3;
        this.addChild(bgBlack);
        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 16;
        bgMask.y = 31;
        this.addChild(bgMask);




        //用户姓名
        let myName:egret.TextField = new egret.TextField();
        myName.y= 3;
        myName.text = name;
        myName.size = 15;
        myName.textColor = 0xa5a1af;
        myName.width = 88;
        myName.height = 28;
        myName.textAlign = egret.HorizontalAlign.CENTER;
        myName.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(myName);
        // 用户头像
        // var source:Array<string> = this._source;
        let img:eui.Image = new eui.Image();
        img.source = src;
        // img.source = source[0];
        img.width = 62;
        img.height = 62;
        img.x = 16;
        img.y = 31;
        this.addChild(img);
        img.mask = bgMask;


        // 金币
        this.myGold = new egret.TextField();
        this.myGold.text = gold;
        this.myGold.size = 20;
        this.myGold.textColor = 0xf2aa20;
        this.myGold.bold = true;
        this.myGold.width = 94;
        this.myGold.height = 32;
        this.myGold.y = 93;
        this.myGold.textAlign = egret.HorizontalAlign.CENTER;
        this.myGold.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.myGold);

          // win高亮边框
        this.bgBorder = new egret.Bitmap(RES.getRes('bg-border_png'));
        //  win金币
        this.winGold = new egret.TextField();
        this.winGold.text = '0';
        this.winGold.size = 26;
        this.winGold.textColor = 0xf2aa20;
        this.winGold.bold = true;
        this.winGold.width = 120;
        this.winGold.height = 34;
        this.winGold.x = -13;
        this.winGold.y = -34;
        this.winGold.textAlign = egret.HorizontalAlign.CENTER;
        this.winGold.verticalAlign = egret.VerticalAlign.MIDDLE;



    }

    /* 更新金币数 */
    public setMyGold( currGold:string ){
        this.myGold.text = currGold;
    }

    /*  设置边框值和显示 win 高亮边框 */
    private isShowWinGold( winCoin:string ){
        if( !winCoin || winCoin === 'undefined' ){
            winCoin = '0'
        }
        this.addChild(this.winGold);
        this.addChild(this.bgBorder);
    }
    /**
     *  隐藏 中奖的样式
     */
    private isHideWinGold(){
        this.removeChild(this.winGold);
        this.removeChild(this.bgBorder);
    }

}
