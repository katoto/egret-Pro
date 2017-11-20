// 点球
class Penalty02 extends eui.UILayer {
    public constructor(){
        super();
        this.drawPenalty02();
    }
    private topTeam:eui.Image;
    private bottomTeam:eui.Image;
    private drawPenalty02(){
        let bgPenalty:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-penalty_png'));
        this.addChild(bgPenalty);

        let textPenalty:egret.TextField = new egret.TextField();
        textPenalty.text = '点球';
        textPenalty.height = 58;
        textPenalty.textColor = 0xffffff;
        textPenalty.size = 22;
        textPenalty.x = 20;
        textPenalty.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(textPenalty);

        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        bgMask.x = 72;
        bgMask.y = 2;
        this.addChild(bgMask);
         // 上边队伍icon
        this.topTeam = new eui.Image();
        this.topTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.topTeam.width = 24;
        this.topTeam.height = 24;
        this.topTeam.x = 72;
        this.topTeam.y = 2;
        this.addChild(this.topTeam);
        this.topTeam.mask = bgMask;
        //上边队伍点球情况
        for(var i=0;i<7;i++){
            let penaltyIn = this.drawIn();
            penaltyIn.x = 123+i*44;     //x坐标[123,167,211,255,299,343,387]
            penaltyIn.y = 1;
            this.addChild(penaltyIn);
        }
        let penaltyWin = this.drawWin();
        penaltyWin.x = 421;
        penaltyWin.y = 1;
        // penaltyWin.y = 36;
        this.addChild(penaltyWin);


        //插入遮罩层
        let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        bgMask02.x = 72;
        bgMask02.y = 30;
        this.addChild(bgMask02);
         // 下边队伍icon
        this.bottomTeam = new eui.Image();
        this.bottomTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.bottomTeam.width = 24;
        this.bottomTeam.height = 24;
        this.bottomTeam.x = 72;
        this.bottomTeam.y = 30;
        this.addChild(this.bottomTeam);
        this.bottomTeam.mask = bgMask02;

        //下边队伍点球情况
        for(var i=0;i<7;i++){
            let penaltyOut = this.drawOut();
            penaltyOut.x = 123+i*44;
            penaltyOut.y = 34;
            this.addChild(penaltyOut);
        }
    }

    private drawIn(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-in_png'));
        return img;
    }
    private drawOut(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-out_png'));
        return img;
    }
    private drawWin(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-win_png'));
        return img;
    }
}