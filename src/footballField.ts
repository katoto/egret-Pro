// class Field_ball extends egret.DisplayObjectContainer{
class Field_ball extends eui.UILayer {
    // 收起的实例
    private goldItems_left:egret.Bitmap;
    private goldItems_right:egret.Bitmap;

    private goldItems_left02:egret.Bitmap;
    private goldItems_right02:egret.Bitmap;

    //  缺一个 被人投注金币的样式

    // 自己金币边投边创建  累计的投注额 优先创建好


    // 设置锚点和x值
    public constructor(width,x,leftImg,leftT,leftO,leftGold,leftMyMoney,rightImg,rightT,rightO,rightGold,rightMyMoney,winX){
        super();
        this.anchorOffsetX=width/2;
        this.x = x;
        this.drawField(leftImg,leftT,leftO,leftGold,leftMyMoney,rightImg,rightT,rightO,rightGold,rightMyMoney,winX);
    }
    private drawField(leftImg,leftT,leftO,leftGold,leftMyMoney,rightImg,rightT,rightO,rightGold,rightMyMoney,winX){
        
        let court4:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court4_png'));
        this.addChild(court4);

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

        this.addChild(this.goldItems_left);
        this.addChild(this.goldItems_right02);

        

        // 左边队伍金币收集
        let leftG:egret.TextField = new egret.TextField();
        leftG.text = leftGold;
        leftG.textColor = 0xbbcfc6;
        leftG.size = 20;
        leftG.width = 110;
        leftG.height = 28;
        leftG.x = 75;
        leftG.y = -6;
        leftG.verticalAlign = egret.VerticalAlign.MIDDLE;
        leftG.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(leftG);





        // 左边队伍头像容器
        let leftUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.x = 25;
        leftUserBox.y = 54;
        this.addChild(leftUserBox);
        
        // 插入边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox.addChild(bgBorder);
        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
        leftUserBox.addChild(bgMask);
        //队伍icon
        let leftTeam:eui.Image = new eui.Image();
        // leftTeam.source = leftImg;
        leftTeam.source = 'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png';
        leftTeam.width = 62;
        leftTeam.height = 62;
        leftTeam.x = 3;
        leftTeam.y = 3;
        leftUserBox.addChild(leftTeam);
        leftTeam.mask = bgMask;

        // 左边队伍对面
        let leftTitle:egret.TextField = new egret.TextField();
        leftTitle.text = leftT;
        leftTitle.size = 22;
        leftTitle.x = 102;
        leftTitle.y = 60;
        this.addChild(leftTitle);

        // 左边队伍赔率
        let leftOdds:egret.TextField = new egret.TextField();
        leftOdds.text = leftO;
        leftOdds.size = 28;
        leftOdds.x = 102;
        leftOdds.y = 94;
        leftOdds.bold = true;
        this.addChild(leftOdds);



        let rightG:egret.TextField = new egret.TextField();
        rightG.text = rightGold;
        rightG.textColor = 0xbbcfc6;
        rightG.size = 20;
        rightG.width = 110;
        rightG.height = 28;
        rightG.x = 320;
        rightG.y = -6;
        rightG.verticalAlign = egret.VerticalAlign.MIDDLE;
        rightG.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(rightG);


        //左边队伍我投足的金额,可能需要隐藏
        let leftMyMoneyBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftMyMoneyBox.width = 196;
        leftMyMoneyBox.height = 27;
        leftMyMoneyBox.x = 25;
        leftMyMoneyBox.y = 148;
        this.addChild(leftMyMoneyBox);

        let leftMyMoneyBg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-betting_png'));
        leftMyMoneyBox.addChild(leftMyMoneyBg);

        let leftMyMoneyText:egret.TextField = new egret.TextField();
        leftMyMoneyText.text = leftMyMoney;
        leftMyMoneyText.width = 196;
        leftMyMoneyText.height = 27;
        leftMyMoneyText.textColor = 0xffd146;
        leftMyMoneyText.size = 22;
        leftMyMoneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
        leftMyMoneyText.textAlign = egret.HorizontalAlign.CENTER;
        leftMyMoneyBox.addChild(leftMyMoneyText);

        // 右边同上

        let rightUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox.width = 68;
        rightUserBox.height = 68;
        rightUserBox.x = 400;
        rightUserBox.y = 54;
        this.addChild(rightUserBox);
        // 插入边框
        let bgBorder02:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox.addChild(bgBorder02);
        // 插入遮罩层
        let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask02.x = 3;
        bgMask02.y = 3;
        rightUserBox.addChild(bgMask02);
        //队伍icon
        let rightTeam:eui.Image = new eui.Image();
        // leftTeam.source = rightImg;
        rightTeam.source = 'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png';
        rightTeam.width = 62;
        rightTeam.height = 62;
        rightTeam.x = 3;
        rightTeam.y = 3;
        rightUserBox.addChild(rightTeam);
        rightTeam.mask = bgMask02;



        let rightTitle:egret.TextField = new egret.TextField();
        rightTitle.text = rightT;
        rightTitle.width = 140;
        rightTitle.textAlign = egret.HorizontalAlign.RIGHT;
        rightTitle.size = 22;
        rightTitle.x = 250;
        rightTitle.y = 58;
        this.addChild(rightTitle);

        let rightOdds:egret.TextField = new egret.TextField();
        rightOdds.text = rightO;
        rightOdds.width = 140;
        rightOdds.textAlign = egret.HorizontalAlign.RIGHT;
        rightOdds.size = 28;
        rightOdds.x = 250;
        rightOdds.y = 94;
        rightOdds.bold = true;
        this.addChild(rightOdds);




         //左边队伍我投足的金额
        let rightMyMoneyBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightMyMoneyBox.width = 196;
        rightMyMoneyBox.height = 27;
        rightMyMoneyBox.x = 270;
        rightMyMoneyBox.y = 148;
        this.addChild(rightMyMoneyBox);

        let rightMyMoneyBg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-betting_png'));
        rightMyMoneyBox.addChild(rightMyMoneyBg);

        let rightMyMoneyText:egret.TextField = new egret.TextField();
        rightMyMoneyText.text = rightMyMoney;
        rightMyMoneyText.width = 196;
        rightMyMoneyText.height = 27;
        rightMyMoneyText.textColor = 0xffd146;
        rightMyMoneyText.size = 22;
        rightMyMoneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
        rightMyMoneyText.textAlign = egret.HorizontalAlign.CENTER;
        rightMyMoneyBox.addChild(rightMyMoneyText);


        // 胜利图标
        let win:egret.Bitmap = new egret.Bitmap(RES.getRes('win2_png'));
        win.anchorOffsetY = win.height/2;

        // -80  or 350
        win.x = winX;
        win.y = 90;
        this.addChild(win);




    }

    //  创建 左边 收起的类
    private addLeftAllCoin(){


    }
    //  创建 右边 收起的类
    private addRightAllCoin(){



    }
    // 更新 累计投注
    
    // 更新 自己投注的数值
    public updataBetCoin(){



    }


}