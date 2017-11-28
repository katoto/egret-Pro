// 晋升
class Promotion extends eui.UILayer{
    public constructor(){
        super();
        this.drawPromotion();
    }

    private leftTeam41;
    private rightTeam41;
    private leftTeam42;
    private rightTeam42;
    private leftTeam43;
    private rightTeam43;
    private leftTeam44;
    private rightTeam44;

    private leftTeam21;
    private rightTeam21;
    private leftTeam22;
    private rightTeam22;

    private leftTeam11;
    private rightTeam11;










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
       wrap.scaleX= window['store'].scale;
       wrap.scaleY= window['store'].scale;
       this.addChild(wrap);
       //bg
       let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-promotion_png'));
       wrap.addChild(bg);
//1/4第一个
        let wrap41:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap41.x = 0;
        wrap41.y = 57;
        wrap41.width = 300;
        wrap41.height = 68;
         // 左边队伍头像容器
        let leftUserBox41:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox41.width = 68;
        leftUserBox41.height = 68;
        leftUserBox41.x = 32;
        leftUserBox41.y = 0;  
        wrap41.addChild(leftUserBox41); 
        // 插入边框
        let lbgBorder41:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox41.addChild(lbgBorder41);
        //队伍icon
        this.leftTeam41 = new eui.Image();
        this.leftTeam41.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam41.width = 62;
        this.leftTeam41.height = 62;
        this.leftTeam41.x = 3;
        this.leftTeam41.y = 3;
        leftUserBox41.addChild(this.leftTeam41);
        //  右边队伍头像容器
        let rightUserBox41:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox41.width = 68;
        rightUserBox41.height = 68;
        rightUserBox41.x = 195;
        rightUserBox41.y = 0;  
        wrap41.addChild(rightUserBox41); 
        // 插入边框
        let rbgBorder41:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox41.addChild(rbgBorder41);
        //队伍icon
        this.rightTeam41 = new eui.Image();
        this.rightTeam41.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam41.width = 62;
        this.rightTeam41.height = 62;
        this.rightTeam41.x = 3;
        this.rightTeam41.y = 3;
        rightUserBox41.addChild(this.rightTeam41);
        let teamF41:egret.TextField = new egret.TextField();
        teamF41.text = '3:2';
        teamF41.size = 32;
        teamF41.textColor = 0xffffff;
        teamF41.width = 300;
        teamF41.height = 68;
        teamF41.bold = true;
        teamF41.textAlign = egret.HorizontalAlign.CENTER;
        teamF41.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap41.addChild(teamF41); 
        



 //1/4第二个
        let wrap42:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap42.x = 364;
        wrap42.y = 57;
        wrap42.width = 300;
        wrap42.height = 68;
         // 左边队伍头像容器
        let leftUserBox42:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox42.width = 68;
        leftUserBox42.height = 68;
        leftUserBox42.x = 32;
        leftUserBox42.y = 0;  
        wrap42.addChild(leftUserBox42); 
        // 插入边框
        let lbgBorder42:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox42.addChild(lbgBorder42);
        //队伍icon
        this.leftTeam42 = new eui.Image();
        this.leftTeam42.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam42.width = 62;
        this.leftTeam42.height = 62;
        this.leftTeam42.x = 3;
        this.leftTeam42.y = 3;
        leftUserBox42.addChild(this.leftTeam42);
        //  右边队伍头像容器
        let rightUserBox42:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox42.width = 68;
        rightUserBox42.height = 68;
        rightUserBox42.x = 195;
        rightUserBox42.y = 0;  
        wrap42.addChild(rightUserBox42); 
        // 插入边框
        let rbgBorder42:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox42.addChild(rbgBorder42);
        //队伍icon
        let rightTeam42 = new eui.Image();
        rightTeam42.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        rightTeam42.width = 62;
        rightTeam42.height = 62;
        rightTeam42.x = 3;
        rightTeam42.y = 3;
        rightUserBox42.addChild(rightTeam42);
        let teamF42:egret.TextField = new egret.TextField();
        teamF42.text = '3:2';
        teamF42.size = 32;
        teamF42.textColor = 0xffffff;
        teamF42.width = 300;
        teamF42.height = 68;
        teamF42.bold = true;
        teamF42.textAlign = egret.HorizontalAlign.CENTER;
        teamF42.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap42.addChild(teamF42); 
      




//1/4第三个
        let wrap43:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap43.x = 0;
        wrap43.y = 970;
        wrap43.width = 300;
        wrap43.height = 68;
         // 左边队伍头像容器
        let leftUserBox43:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox43.width = 68;
        leftUserBox43.height = 68;
        leftUserBox43.x = 32;
        leftUserBox43.y = 0;  
        wrap43.addChild(leftUserBox43); 
        // 插入边框
        let lbgBorder43:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox43.addChild(lbgBorder43);
        //队伍icon
        this.leftTeam43 = new eui.Image();
        this.leftTeam43.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam43.width = 62;
        this.leftTeam43.height = 62;
        this.leftTeam43.x = 3;
        this.leftTeam43.y = 3;
        leftUserBox43.addChild(this.leftTeam43);
        //  右边队伍头像容器
        let rightUserBox43:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox43.width = 68;
        rightUserBox43.height = 68;
        rightUserBox43.x = 195;
        rightUserBox43.y = 0;  
        wrap43.addChild(rightUserBox43); 
        // 插入边框
        let rbgBorder43:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox43.addChild(rbgBorder43);
        //队伍icon
        let rightTeam43 = new eui.Image();
        rightTeam43.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        rightTeam43.width = 62;
        rightTeam43.height = 62;
        rightTeam43.x = 3;
        rightTeam43.y = 3;
        rightUserBox43.addChild(rightTeam43);
        let teamF43:egret.TextField = new egret.TextField();
        teamF43.text = '3:2';
        teamF43.size = 32;
        teamF43.textColor = 0xffffff;
        teamF43.width = 300;
        teamF43.height = 68;
        teamF43.bold = true;
        teamF43.textAlign = egret.HorizontalAlign.CENTER;
        teamF43.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap43.addChild(teamF43); 
        


//1/4第四个
        let wrap44:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap44.x = 364;
        wrap44.y = 970;
        wrap44.width = 300;
        wrap44.height = 68;
         // 左边队伍头像容器
        let leftUserBox44:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox44.width = 68;
        leftUserBox44.height = 68;
        leftUserBox44.x = 32;
        leftUserBox44.y = 0;  
        wrap44.addChild(leftUserBox44); 
        // 插入边框
        let lbgBorder44:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox44.addChild(lbgBorder44);
        //队伍icon
        this.leftTeam44 = new eui.Image();
        this.leftTeam44.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam44.width = 62;
        this.leftTeam44.height = 62;
        this.leftTeam44.x = 3;
        this.leftTeam44.y = 3;
        leftUserBox44.addChild(this.leftTeam44);
        //  右边队伍头像容器
        let rightUserBox44:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox44.width = 68;
        rightUserBox44.height = 68;
        rightUserBox44.x = 195;
        rightUserBox44.y = 0;  
        wrap44.addChild(rightUserBox44); 
        // 插入边框
        let rbgBorder44:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox44.addChild(rbgBorder44);
        //队伍icon
        let rightTeam44 = new eui.Image();
        rightTeam44.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        rightTeam44.width = 62;
        rightTeam44.height = 62;
        rightTeam44.x = 3;
        rightTeam44.y = 3;
        rightUserBox44.addChild(rightTeam44);
        let teamF44:egret.TextField = new egret.TextField();
        teamF44.text = '3:2';
        teamF44.size = 32;
        teamF44.textColor = 0xffffff;
        teamF44.width = 300;
        teamF44.height = 68;
        teamF44.bold = true;
        teamF44.textAlign = egret.HorizontalAlign.CENTER;
        teamF44.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap44.addChild(teamF44); 
         





//1/2第一个
        let wrap21:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap21.x = 176;
        wrap21.y = 300;
        wrap21.width = 300;
        wrap21.height = 68;
         // 左边队伍头像容器
        let leftUserBox21:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox21.width = 68;
        leftUserBox21.height = 68;
        leftUserBox21.x = 32;
        leftUserBox21.y = 0;  
        wrap21.addChild(leftUserBox21); 
        // 插入边框
        let lbgBorder21:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox21.addChild(lbgBorder21);
        //队伍icon
        this.leftTeam21 = new eui.Image();
        this.leftTeam21.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam21.width = 62;
        this.leftTeam21.height = 62;
        this.leftTeam21.x = 3;
        this.leftTeam21.y = 3;
        leftUserBox21.addChild(this.leftTeam21);
        //  右边队伍头像容器
        let rightUserBox21:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox21.width = 68;
        rightUserBox21.height = 68;
        rightUserBox21.x = 195;
        rightUserBox21.y = 0;  
        wrap21.addChild(rightUserBox21); 
        // 插入边框
        let rbgBorder21:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox21.addChild(rbgBorder21);
        //队伍icon
        this.rightTeam21 = new eui.Image();
        this.rightTeam21.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam21.width = 62;
        this.rightTeam21.height = 62;
        this.rightTeam21.x = 3;
        this.rightTeam21.y = 3;
        rightUserBox21.addChild(this.rightTeam21);
        let teamF21:egret.TextField = new egret.TextField();
        teamF21.text = '3:2';
        teamF21.size = 32;
        teamF21.textColor = 0xffffff;
        teamF21.width = 300;
        teamF21.height = 68;
        teamF21.bold = true;
        teamF21.textAlign = egret.HorizontalAlign.CENTER;
        teamF21.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap21.addChild(teamF21); 
      


        
//1/2第二个
        let wrap22:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap22.x = 176;
        wrap22.y = 743;
        wrap22.width = 300;
        wrap22.height = 68;
         // 左边队伍头像容器
        let leftUserBox22:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox22.width = 68;
        leftUserBox22.height = 68;
        leftUserBox22.x = 32;
        leftUserBox22.y = 0;  
        wrap22.addChild(leftUserBox22); 
        // 插入边框
        let lbgBorder22:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox22.addChild(lbgBorder22);
        //队伍icon
        this.leftTeam22 = new eui.Image();
        this.leftTeam22.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam22.width = 62;
        this.leftTeam22.height = 62;
        this.leftTeam22.x = 3;
        this.leftTeam22.y = 3;
        leftUserBox22.addChild(this.leftTeam22);
        //  右边队伍头像容器
        let rightUserBox22:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox22.width = 68;
        rightUserBox22.height = 68;
        rightUserBox22.x = 195;
        rightUserBox22.y = 0;  
        wrap22.addChild(rightUserBox22); 
        // 插入边框
        let rbgBorder22:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox22.addChild(rbgBorder22);
        //队伍icon
        this.rightTeam22 = new eui.Image();
        this.rightTeam22.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam22.width = 62;
        this.rightTeam22.height = 62;
        this.rightTeam22.x = 3;
        this.rightTeam22.y = 3;
        rightUserBox22.addChild(this.rightTeam22);
        let teamF22:egret.TextField = new egret.TextField();
        teamF22.text = '3:2';
        teamF22.size = 32;
        teamF22.textColor = 0xffffff;
        teamF22.width = 300;
        teamF22.height = 68;
        teamF22.bold = true;
        teamF22.textAlign = egret.HorizontalAlign.CENTER;
        teamF22.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap22.addChild(teamF22); 
          



         
//决赛
        let wrap11:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap11.x = 176;
        wrap11.y = 522;
        wrap11.width = 300;
        wrap11.height = 68;
         // 左边队伍头像容器
        let leftUserBox11:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox11.width = 68;
        leftUserBox11.height = 68;
        leftUserBox11.x = 32;
        leftUserBox11.y = 0;  
        wrap11.addChild(leftUserBox11); 
        // 插入边框
        let lbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox11.addChild(lbgBorder11);
        //队伍icon
        this.leftTeam11 = new eui.Image();
        this.leftTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam11.width = 20;
        this.leftTeam11.height = 20;
        this.leftTeam11.x = 3;
        this.leftTeam11.y = 3;
        leftUserBox11.addChild(this.leftTeam11);
        //  右边队伍头像容器
        let rightUserBox11:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox11.width = 68;
        rightUserBox11.height = 68;
        rightUserBox11.x = 195;
        rightUserBox11.y = 0;  
        wrap11.addChild(rightUserBox11); 
        // 插入边框
        let rbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox11.addChild(rbgBorder11);
        //队伍icon
        this.rightTeam11 = new eui.Image();
        this.rightTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam11.width = 62;
        this.rightTeam11.height = 62;
        this.rightTeam11.x = 3;
        this.rightTeam11.y = 3;
        rightUserBox11.addChild(this.rightTeam11);
        let teamF11:egret.TextField = new egret.TextField();
        teamF11.text = '3:2';
        teamF11.size = 32;
        teamF11.textColor = 0xffffff;
        teamF11.width = 300;
        teamF11.height = 68;
        teamF11.bold = true;
        teamF11.textAlign = egret.HorizontalAlign.CENTER;
        teamF11.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap11.addChild(teamF11); 




        wrap.addChild(wrap41);
        wrap.addChild(wrap42);
        wrap.addChild(wrap43);
        wrap.addChild(wrap44);
        wrap.addChild(wrap21);
        wrap.addChild(wrap22);
        wrap.addChild(wrap11);
    }
    private proWin(){
        let img = new egret.Bitmap(RES.getRes('proWin_png'));
        return img;
    }
    private upTeamData(leftTeam41,rightTeam41){
        this.leftTeam41.source = leftTeam41;
        this.rightTeam41.source = rightTeam41;
    }

}