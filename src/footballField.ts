// class Field_ball extends egret.DisplayObjectContainer{

class Field_ball extends eui.UILayer {

    //比分
    private score:egret.TextField;

    //三种球场的高度和高度中心,重要参数
    private courtHeight;
    private courtAnHeight;

    // 下单用到
    private homeid; // 主队id
    private awayid; // 客队id
    private matchid; // 对阵id

    // 收起的实例（ 总金币的背景切换 ）
    private goldItems_left:egret.Bitmap;
    private goldItems_right:egret.Bitmap;

    private goldItems_left02:egret.Bitmap;
    private goldItems_right02:egret.Bitmap;

    // 投注盒子和 金额文案 left
    private leftMyMoneyBox:egret.DisplayObjectContainer
    private leftMyMoneyText:egret.TextField;
    
    // 投注盒子和 金额文案 right
    private rightMyMoneyBox:egret.DisplayObjectContainer
    private rightMyMoneyText:egret.TextField;

    // 总投注额
    private allLeftCoin:egret.TextField;
    private allRightCoin:egret.TextField;

    // winIcon 中奖图标 left or right
    private winIcon_l:egret.Bitmap;
    private winIcon_r:egret.Bitmap;

    //  头像 赔率 队名
    private leftTeam:eui.Image;
    private leftTitle:egret.TextField;
    private leftOdds:egret.TextField;
    private rightTitle:egret.TextField;
    private rightOdds:egret.TextField;
    private rightTeam:eui.Image;

    // 设置锚点和x值  头像 队名 赔率 （  感觉得设置成 修改类的方式  ） ，这里加了一个参数bgUrl，用来控制不同赛场的背景
    public constructor(bgUrl?){
        super();
        this.anchorOffsetX = 242.5 ;
        this.x = window['store']['stage_Width']/2 ;
        this.drawField(bgUrl);
    }
    private drawField(bgUrl){
        
        let court:egret.Bitmap = new egret.Bitmap(RES.getRes(bgUrl));  
        this.courtHeight = court.height;
        this.courtAnHeight = this.courtHeight/2;

        this.addChild(court);
        //两个金币收集的背景， 这里要考虑假如没人投注的情况，是否要隐藏  62+246;
        this.goldItems_left = new egret.Bitmap(RES.getRes('gold-items_png'));
        this.goldItems_left.x = 62;
        this.goldItems_left.y = -6;

        this.goldItems_left02 = new egret.Bitmap(RES.getRes('gold-items02_png'));
        this.goldItems_left02.x = 62;
        this.goldItems_left02.y = -6;

        this.goldItems_right = new egret.Bitmap(RES.getRes('gold-items_png'));
        this.goldItems_right.x = 308;
        this.goldItems_right.y = -6;

        this.goldItems_right02 = new egret.Bitmap(RES.getRes('gold-items02_png'));
        this.goldItems_right02.x = 308;
        this.goldItems_right02.y = -6;

        // 左边队伍头像容器
        let leftUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.anchorOffsetY = 34;
        leftUserBox.x = 25;
        leftUserBox.y = this.courtAnHeight;  
        this.addChild(leftUserBox); 
        // 插入边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox.addChild(bgBorder);
        
        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
        // leftUserBox.addChild(bgMask);
        //队伍icon
        this.leftTeam = new eui.Image();
        // leftTeam.source = leftImg;
        this.leftTeam.width = 62;
        this.leftTeam.height = 62;
        this.leftTeam.x = 3;
        this.leftTeam.y = 3;
        leftUserBox.addChild(this.leftTeam);
        this.leftTeam.mask = bgMask;

        // this.addChild( leftTeam )

        // 左边队伍队名
        this.leftTitle = new egret.TextField();
        this.leftTitle.size = 22;
        this.leftTitle.x = 102;
        this.leftTitle.y = this.courtAnHeight - 6;
        this.leftTitle.anchorOffsetY = 22;
        this.addChild(this.leftTitle);

        // 左边队伍赔率
        this.leftOdds= new egret.TextField();
        this.leftOdds.size = 28;
        this.leftOdds.x = 102;
        this.leftOdds.y = this.courtAnHeight + 2;
        this.leftOdds.bold = true;
        this.addChild(this.leftOdds);


        // 右边同上
        let rightUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox.anchorOffsetY = 34;
        rightUserBox.width = 68;
        rightUserBox.height = 68;
        rightUserBox.x = 400;
        rightUserBox.y = this.courtAnHeight;  
        this.addChild(rightUserBox);
        // 插入边框
        let bgBorder02:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox.addChild(bgBorder02);
        // 插入遮罩层
        let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask02.x = 3;
        bgMask02.y = 3;
        // rightUserBox.addChild(bgMask02);
        //队伍icon
        this.rightTeam = new eui.Image();
        this.rightTeam.width = 62;
        this.rightTeam.height = 62;
        this.rightTeam.x = 3;
        this.rightTeam.y = 3;
        rightUserBox.addChild(this.rightTeam);
        this.rightTeam.mask = bgMask02;

        this.rightTitle = new egret.TextField();
        this.rightTitle.width = 140;
        this.rightTitle.textAlign = egret.HorizontalAlign.RIGHT;
        this.rightTitle.size = 22;
        this.rightTitle.x = 250;
        this.rightTitle.y = this.courtAnHeight - 6;
        this.rightTitle.anchorOffsetY = 22;
        this.addChild(this.rightTitle);

        this.rightOdds = new egret.TextField();
        this.rightOdds.width = 140;
        this.rightOdds.textAlign = egret.HorizontalAlign.RIGHT;
        this.rightOdds.size = 28;
        this.rightOdds.x = 250;
        this.rightOdds.y = this.courtAnHeight + 2;
        this.rightOdds.bold = true;
        this.addChild(this.rightOdds);


       //比分
       this.score = new egret.TextField();
    //    this.score.text= '2:0';
       this.score.textColor = 0xffffff;
       this.score.size = 52;
       this.score.bold = true;
       this.score.width = 485;
       this.score.height = this.courtHeight;
       this.score.textAlign = egret.HorizontalAlign.CENTER;
       this.score.verticalAlign = egret.VerticalAlign.MIDDLE;
    //    this.addChild(this.score)


    }

    /**
     *  比分
     */
    private writeScore( num:string ){
        if( num === '' ){
            if( this.score.parent ){
                this.removeChild( this.score )
            }
        }else{
            this.score.text = num;
            if( !this.score.parent ){
                this.addChild(this.score)
            }
        }
    }


    // 更新场地数据 赔率， 对阵 ，homeid awayid 
    private upFieldAllData( leftImg,leftT,leftO,rightImg,rightT,rightO ,homeid ,awayid ,matchid ){

        this.leftTeam.source = leftImg ;
        this.leftTitle.text = leftT;
        this.leftOdds.text = leftO;
        this.rightTitle.text = rightT;
        this.rightOdds.text = rightO;
        this.rightTeam.source = rightImg ;

        this.homeid = homeid;
        this.awayid = awayid;
        this.matchid = matchid

    }

    /**
     *  获取 对应场地的 img & name 
     */
    private getFieldImg(){
        return {
            l_img: this.leftTeam.source ,
            r_img : this.rightTeam.source ,
            l_name: this.leftTitle.text ,
            r_name: this.rightTitle.text ,
        }
    }

    // 当前对阵数据
    private getCurrMatchData(){
        return {
            homeid: this.homeid,
            awayid: this.awayid,
            matchid: this.matchid,
            leftOdds: this.leftOdds.text,
            rightOdds: this.rightOdds.text,
        }
    }

    // 删除所有 win 图标
    private removeWinIcon(){
        if( this.winIcon_l && this.winIcon_l.parent ){
            this.removeChild( this.winIcon_l );
        }

        if( this.winIcon_r && this.winIcon_r.parent ){
            this.removeChild( this.winIcon_r );
        }
    }

    //  left add icon win   胜利图标
    private addwinIcon_l(){
        if( !!this.winIcon_l ){
            this.addChild(this.winIcon_l);
        }else{
            this.winIcon_l = new egret.Bitmap(RES.getRes('win2_png'));
            this.winIcon_l.anchorOffsetY = 101;
            this.winIcon_l.y = this.courtAnHeight;
            this.winIcon_l.x = -80;
            this.addChild(this.winIcon_l);
        }
    }
    // right add icon
    private addwinIcon_r(){
        if( !!this.winIcon_r ){
            this.addChild(this.winIcon_r);
        }else{
            this.winIcon_r = new egret.Bitmap(RES.getRes('win2_png'));
            this.winIcon_r.anchorOffsetY = 101;
            this.winIcon_r.x = 350;
            this.winIcon_r.y = this.courtAnHeight;
            this.winIcon_r.y = 90;
            this.addChild(this.winIcon_r);
        }
    }

    // 更新左边总金币的背景
    private upLeftCoinBg(){
        if( this.goldItems_left02.parent ){
            this.removeChild(this.goldItems_left02);
        }

        // 提高层级，不然会被挡住
        if( this.allLeftCoin && this.allLeftCoin.parent ){
            this.addChild( this.goldItems_left );
            this.setChildIndex( this.allLeftCoin , this.getChildIndex( this.goldItems_left ))
        }
    }
    
    // 更新右边总金币的背景
    private upRightCoinBg(){
        if( this.goldItems_right02.parent ){
            this.removeChild(this.goldItems_right02);
        }
        if(  this.allRightCoin && this.allRightCoin.parent ){
            this.addChild( this.goldItems_right );
            this.setChildIndex( this.allRightCoin , this.getChildIndex( this.goldItems_right ))
        }
    }
    
    //  创建 左边 收起的类
    private addLeftAllCoin( coin:string ){
        // 左边队伍金币收集
        if( !!this.allLeftCoin ){
            this.allLeftCoin.text = coin;
        }else{
            this.allLeftCoin = new egret.TextField();
            this.allLeftCoin.text = coin;
            this.allLeftCoin.textColor = 0xbbcfc6;
            this.allLeftCoin.size = 20;
            this.allLeftCoin.width = 110;
            this.allLeftCoin.height = 28;
            this.allLeftCoin.x = 75;
            this.allLeftCoin.y = -6;
            this.allLeftCoin.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.allLeftCoin.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.goldItems_left02);
            this.addChild(this.allLeftCoin);

            // this.setChildIndex( this.allLeftCoin , this.getChildIndex( this.goldItems_left ))
        }
    }
    //  创建 右边 收起的类
    private addRightAllCoin( coin:string ){
        if( !!this.allRightCoin ){
            this.allRightCoin.text = coin
        }else{
            this.allRightCoin = new egret.TextField();
            this.allRightCoin.text = coin;
            this.allRightCoin.textColor = 0xbbcfc6;
            this.allRightCoin.size = 20;
            this.allRightCoin.width = 110;
            this.allRightCoin.height = 28;
            this.allRightCoin.x = 320;
            this.allRightCoin.y = -6;
            this.allRightCoin.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.allRightCoin.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.goldItems_right02);
            this.addChild(this.allRightCoin);
            // this.setChildIndex( this.allLeftCoin , this.getChildIndex( this.goldItems_left ))
        }
    }


    // 更新 自己投注的数值 (判断是否有该事物 left)
    private upLeftMyMoney( coin:string ){
        if( !!this.leftMyMoneyBox ){
            this.leftMyMoneyText.text = coin ;
        }else{
            this.leftMyMoneyBox = new egret.DisplayObjectContainer();
            this.leftMyMoneyBox.width = 196;
            this.leftMyMoneyBox.height = 27;
            this.leftMyMoneyBox.x = 25;
            this.leftMyMoneyBox.anchorOffsetY = 27;
            this.leftMyMoneyBox.y = this.courtHeight - 5;
            let leftMyMoneyBg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-betting_png'));
            this.leftMyMoneyBox.addChild(leftMyMoneyBg);
            this.leftMyMoneyText = new egret.TextField();
            this.leftMyMoneyText.text = coin ;
            this.leftMyMoneyText.width = 196;
            this.leftMyMoneyText.height = 27;
            this.leftMyMoneyText.textColor = 0xffd146;
            this.leftMyMoneyText.size = 22;
            this.leftMyMoneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.leftMyMoneyText.textAlign = egret.HorizontalAlign.CENTER;
            this.leftMyMoneyBox.addChild(this.leftMyMoneyText);
            this.addChild( this.leftMyMoneyBox);
        }
    }

    // 更新 自己投注的数值 (判断是否有该事物 right)
    private upRightMyMoney( coin:string ){
        if( !!this.rightMyMoneyBox ){
            this.rightMyMoneyText.text = coin ;
        }else{
            this.rightMyMoneyBox = new egret.DisplayObjectContainer();
            this.rightMyMoneyBox.width = 196;
            this.rightMyMoneyBox.height = 27;
            this.rightMyMoneyBox.x = 270;
            this.rightMyMoneyBox.y = 148;
            this.rightMyMoneyBox.anchorOffsetY = 27;
            this.rightMyMoneyBox.y = this.courtHeight - 5;
            let rightMyMoneyBg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-betting_png'));
            this.rightMyMoneyBox.addChild(rightMyMoneyBg);
            this.rightMyMoneyText = new egret.TextField();
            this.rightMyMoneyText.text = coin ;
            this.rightMyMoneyText.width = 196;
            this.rightMyMoneyText.height = 27;
            this.rightMyMoneyText.textColor = 0xffd146;
            this.rightMyMoneyText.size = 22;
            this.rightMyMoneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.rightMyMoneyText.textAlign = egret.HorizontalAlign.CENTER;
            this.rightMyMoneyBox.addChild(this.rightMyMoneyText);

            this.addChild(this.rightMyMoneyBox);
        }
    }

    // 清除 自己投的和他人投 的 区域  以及总的背景 ？ 是否必须 
    private cleanAllCoinText(){
        if( this.rightMyMoneyBox && this.rightMyMoneyBox.parent ){
            this.removeChild( this.rightMyMoneyBox )
        }
        if( this.leftMyMoneyBox && this.leftMyMoneyBox.parent ){
            this.removeChild( this.leftMyMoneyBox )
        }
        if( this.allRightCoin && this.allRightCoin.parent ){
            this.removeChild( this.allRightCoin )
        }
        if( this.allLeftCoin && this.allLeftCoin.parent ){
            this.removeChild( this.allLeftCoin )
        }
        // 总的金币背景
        if( this.goldItems_right && this.goldItems_right.parent ){
            this.removeChild( this.goldItems_right );
        }
        // 总的金币背景
        if( this.goldItems_left && this.goldItems_left.parent ){
            this.removeChild( this.goldItems_left );
        }

        if( this.goldItems_left02 && this.goldItems_left02.parent ){
            this.removeChild( this.goldItems_left02 );
        }

        if( this.goldItems_right02 && this.goldItems_right02.parent ){
            this.removeChild( this.goldItems_right02 );
        }

        
    }



    // findWinLocation  ==> findLocal 
    /**
     *   @return  _l  left  _r  right
     */
    private findLocal( winid:string ){
        if( winid ){
            if( this.homeid === winid ){
                return '_l'
            }else if( this.awayid === winid ){
                return '_r'
            }
        }else{
            console.warn('footballfield findLocal not find winid')
        }

    }
}