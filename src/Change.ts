// 杯赛换场
class Change extends eui.UILayer{
    public constructor(){
        super();
        this.drawChange();
    }
    private teamName:egret.TextField;
    private drawChange(){
        let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-change_jpg'));
        this.addChild(bg);


        let logo:egret.Bitmap = new egret.Bitmap(RES.getRes('logo-yz_png'));
        logo.anchorOffsetX = logo.width/2;
        logo.x = window['store']['stage_anWidth'];
        logo.y = -500;
        this.addChild(logo);
        this.teamName = new egret.TextField();
        this.teamName.text = '亚洲杯';
        this.teamName.size = 46;
        this.teamName.textColor = 0xffffff;
        this.teamName.bold = true;
        this.teamName.italic = true;
        this.teamName.x = 160;
        this.teamName.y = 533;
        this.addChild(this.teamName);
        setTimeout(function(){
            egret.Tween.get(logo).to({x:window['store']['stage_anWidth'],y:206},200);
        },500)


        let teamWrap01 = this.teamWrap( 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
        teamWrap01.anchorOffsetX = 283;
        teamWrap01.x = window['store']['stage_anWidth'];
        teamWrap01.y = 630;
        this.addChild(teamWrap01);
        // setTimeout(function(){  //动画过多发热
        //     egret.Tween.get(teamWrap01).to({y:630},200);
        // },600)

        let teamWrap02 = this.teamWrap( 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
        teamWrap02.anchorOffsetX = 283;
        teamWrap02.x = window['store']['stage_anWidth'];
        teamWrap02.y = 750;
        this.addChild(teamWrap02);

        let teamWrap03 = this.teamWrap( 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
        teamWrap03.anchorOffsetX = 283;
        teamWrap03.x = window['store']['stage_anWidth'];
        teamWrap03.y = 870;
        this.addChild(teamWrap03);

        let teamWrap04 = this.teamWrap( 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
        teamWrap04.anchorOffsetX = 283;
        teamWrap04.x = window['store']['stage_anWidth'];
        teamWrap04.y = 990;
        this.addChild(teamWrap04);
        

        







    }
    private teamWrap(urlLeft,urlRight){
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 566;
        wrap.height = 68;

         // 左边队伍头像容器
        let leftUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.x = 0;
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
        rightUserBox.x = 498;
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

        let teamVs:egret.TextField = new egret.TextField();
        teamVs.text = 'vs';
        teamVs.size = 22;
        teamVs.textColor = 0xaaa8b6;
        teamVs.width = 566;
        teamVs.height = 68;
        teamVs.textAlign = egret.HorizontalAlign.CENTER;
        teamVs.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(teamVs); 

        return wrap;
    }
}