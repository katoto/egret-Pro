class Field4 extends egret.DisplayObjectContainer{
    // 设置锚点和x值
    public constructor(width,x,leftImg,leftT,leftO,leftGold,leftMyMoney,rightImg,rightT,rightO,rightGold,rightMyMoney){
        super();
        this.anchorOffsetX=width/2;
        this.x = x;
        this.drawField(leftImg,leftT,leftO,leftGold,leftMyMoney,rightImg,rightT,rightO,rightGold,rightMyMoney);
    }
    private drawField(leftImg,leftT,leftO,leftGold,leftMyMoney,rightImg,rightT,rightO,rightGold,rightMyMoney){
        
        let court4:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court4_png'));
        this.addChild(court4);


        //两个金币收集的背景， 这里要考虑假如没人投注的情况，是否要隐藏
        for(let i=0;i<2;i++){
            let goldItems:egret.Bitmap = new egret.Bitmap(RES.getRes('gold-items_png'));
            goldItems.x = 62+246*i;
            goldItems.y = -6;
            this.addChild(goldItems);
        }
       



        // 左边队伍头像容器
        let leftUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.x = 25;
        leftUserBox.y = 60;
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
        let leftTeam:egret.Bitmap = new egret.Bitmap(RES.getRes(leftImg));
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
        rightUserBox.y = 60;
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
        let rightTeam:egret.Bitmap = new egret.Bitmap(RES.getRes(rightImg));
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
    }
}