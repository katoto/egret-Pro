class Field4 extends egret.DisplayObjectContainer{
    // 设置锚点和x值
    public constructor(width,x,leftImg,leftT,leftO,rightImg,rightT,rightO){
        super();
        this.anchorOffsetX=width/2;
        this.x = x;
        this.drawField(leftImg,leftT,leftO,rightImg,rightT,rightO);
    }
    private drawField(leftImg,leftT,leftO,rightImg,rightT,rightO){
        let court4:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court4_png'));
        this.addChild(court4);

        let leftTeam:egret.Bitmap = new egret.Bitmap(RES.getRes(leftImg));
        leftTeam.width = 62;
        leftTeam.height = 62;
        leftTeam.x = 25;
        leftTeam.y = 60;
        this.addChild(leftTeam);

        let leftTitle:egret.TextField = new egret.TextField();
        leftTitle.text = leftT;
        leftTitle.size = 22;
        leftTitle.x = 102;
        leftTitle.y = 60;
        this.addChild(leftTitle);

        let leftOdds:egret.TextField = new egret.TextField();
        leftOdds.text = leftO;
        leftOdds.size = 28;
        leftOdds.x = 102;
        leftOdds.y = 94;
        this.addChild(leftOdds);


        // 右边位置有误
        let rightTeam:egret.Bitmap = new egret.Bitmap(RES.getRes(rightImg));
        rightTeam.width = 62;
        rightTeam.height = 62;
        rightTeam.x = 400;
        rightTeam.y = 58;
        this.addChild(rightTeam);

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
        this.addChild(rightOdds);
    }
}