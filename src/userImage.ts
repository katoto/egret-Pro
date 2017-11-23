
class userImage extends eui.UILayer {
    // 用户头像
    public constructor(){
        super();
        this.addToStage();
    }

    private myGold:egret.TextField;
    private winGold:egret.TextField;
    private bgBorder:egret.Bitmap;
    private User_img:eui.Image;
    private myName:egret.TextField;
    private myChat:egret.TextField;

    private numCoin

    private addToStage() {
        let bg:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
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
        this.myName = new egret.TextField();
        this.myName.y= 3;
        this.myName.size = 15;
        this.myName.textColor = 0xa5a1af;
        this.myName.width = 88;
        this.myName.height = 28;
        this.myName.textAlign = egret.HorizontalAlign.CENTER;
        this.myName.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.myName);
        // 用户头像

        this.User_img = new eui.Image();
        this.User_img.width = 62;
        this.User_img.height = 62;
        this.User_img.x = 16;
        this.User_img.y = 31;
        this.addChild(this.User_img);
        this.User_img.mask = bgMask;

        // 金币
        this.myGold = new egret.TextField();
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
        this.winGold.text = '';
        this.winGold.size = 26;
        this.winGold.textColor = 0xf2aa20;
        this.winGold.bold = true;
        this.winGold.width = 120;
        this.winGold.height = 34;
        this.winGold.x = -13;
        this.winGold.y = -34;
        this.winGold.textAlign = egret.HorizontalAlign.CENTER;
        this.winGold.verticalAlign = egret.VerticalAlign.MIDDLE;


        //聊天
        
        // let chatWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        // chatWrap.y = -55;

        // this.addChild(chatWrap);

        // let myChat = new egret.TextField();
        // myChat.x = 20;
        // myChat.text = '保佑保佑,逢买必中~';
        // myChat.textColor = 0x605182;
        // myChat.size = 24;
        // myChat.height = 45;
        // myChat.verticalAlign = egret.VerticalAlign.MIDDLE;
        
        // let myChatWidth = myChat.width;  //获取文字长度，控制白色背景长度
        // let chatBg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-myChat_png'));
        // let rect:egret.Rectangle = new egret.Rectangle(22.5,22.5,55,0);
        // chatBg.scale9Grid =rect;
        // chatBg.width = myChatWidth+40;
        // myChat.textAlign = egret.HorizontalAlign.CENTER;
        // chatWrap.addChild(chatBg);
        // chatWrap.addChild(myChat);
         

    }

    // 用户头像的 名称 头像 金币
    private upDataUseMsg( name:string ,src:string,gold:string  ){
        this.myGold.text = window['formateGold']( gold );
        this.User_img.source = src;
        this.myName.text = name;
        this.numCoin = gold;
    }

    /* 更新金币数  传进来的是对的 */
    private setMyGold( currGold:string ){
        this.myGold.text = window['formateGold']( currGold );
        this.numCoin = currGold;
    }

    private getUserName(){
        return this.myName.text
    }
    // 当前用户的金币
    private getCurGold(){
        console.log( this.numCoin )
        return this.numCoin
    }

    /*  设置边框值和显示 win 高亮边框 */
    private isShowWinGold( winCoin:string ){
        if( !winCoin || winCoin === 'undefined' ){
            winCoin = '0'
        }
        this.winGold.text = window['formateGold']( winCoin )
        this.addChild(this.bgBorder);
        this.addChild(this.winGold);
    }

    /**
     *  隐藏 中奖的样式
     */
    private isHideWinGold(){
        this.removeChild(this.winGold);
        this.removeChild(this.bgBorder);
    }
}
