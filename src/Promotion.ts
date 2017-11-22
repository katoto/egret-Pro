// 晋升
class Promotion extends eui.UILayer{
    public constructor(){
        super();
        this.drawPromotion();
    }
    private drawPromotion(){
        //蒙版
       let layer:egret.Shape = new egret.Shape();
       layer.graphics.beginFill(0x000000,0.7);
       layer.graphics.drawRect(0,0,window['store']['stage_Width'],window['store']['stage_Height']);
       layer.graphics.endFill();
       this.addChild(layer);

       //容器
       let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
       wrap.width = 664;
       wrap.height = 1092;
       wrap.anchorOffsetX = 332;
       wrap.anchorOffsetY = 546;
       wrap.x = window['store']['stage_anWidth'];
       wrap.y = window['store']['stage_anHeight'];

        // window['store'].scale
       wrap.scaleX= 0.8;
       wrap.scaleY= 0.8;

       this.addChild(wrap);

       //bg
       let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-promotion_png'));
       wrap.addChild(bg);

       //1/4第一个队伍
       let team41 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team41.x = 0;
       team41.y = 57;
       wrap.addChild(team41)
        //1/4第二个队伍
       let team42 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team42.x = 364;
       team42.y = 57;
       wrap.addChild(team42)
        //1/4第三个队伍
       let team43 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team43.x = 0;
       team43.y = 970;
       wrap.addChild(team43)
        //1/4第四个队伍
       let team44 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team44.x = 364;
       team44.y = 970;
       wrap.addChild(team44)

       //1/2第一个
       let team21 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team21.x = 176;
       team21.y = 300;
       wrap.addChild(team21)

        //1/2第二个
       let team22 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team22.x = 176;
       team22.y = 743;
       wrap.addChild(team22)

       //决赛
       let team1 = this.teamWrap('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
       team1.x = 176;
       team1.y = 522;
       wrap.addChild(team1)


    }
      private teamWrap(urlLeft,urlRight){
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 300;
        wrap.height = 68;
         // 左边队伍头像容器
        let leftUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.x = 32;
        leftUserBox.y = 0;  
        // 插入边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox.addChild(bgBorder);
        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
        leftUserBox.addChild(bgMask);
        //队伍icon
        let leftTeam = new eui.Image();
        leftTeam.source = urlLeft;
        leftTeam.width = 62;
        leftTeam.height = 62;
        leftTeam.x = 3;
        leftTeam.y = 3;
        leftUserBox.addChild(leftTeam);
        leftTeam.mask = bgMask;
        wrap.addChild(leftUserBox); 

        //  右边队伍头像容器
        let rightUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox.width = 68;
        rightUserBox.height = 68;
        rightUserBox.x = 195;
        rightUserBox.y = 0;  
        wrap.addChild(rightUserBox); 
        // 插入边框
        let bgBorder2:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox.addChild(bgBorder2);
        // 插入遮罩层
        let bgMask2:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask2.x = 3;
        bgMask2.y = 3;
        rightUserBox.addChild(bgMask2);
        //队伍icon
        let rightTeam = new eui.Image();
        rightTeam.source = urlRight;
        rightTeam.width = 62;
        rightTeam.height = 62;
        rightTeam.x = 3;
        rightTeam.y = 3;
        rightUserBox.addChild(rightTeam);
        rightTeam.mask = bgMask2;
        wrap.addChild(rightUserBox); 

        let teamF:egret.TextField = new egret.TextField();
        teamF.text = '3:2';
        teamF.size = 32;
        teamF.textColor = 0xffffff;
        teamF.width = 300;
        teamF.height = 68;
        teamF.bold = true;
        teamF.textAlign = egret.HorizontalAlign.CENTER;
        teamF.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(teamF); 

        return wrap;
    }
}