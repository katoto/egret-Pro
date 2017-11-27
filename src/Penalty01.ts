// 正常进球
class Penalty01 extends eui.UILayer {
    public constructor(){
        super();
        this.drawPenalty01();
    }
    private topTeam:eui.Image;
    private bottomTeam:eui.Image;
    private drawPenalty01(){
        let bgPenalty:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-penalty_png'));
        this.addChild(bgPenalty);

        // 插入上边遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        bgMask.x = 38;
        bgMask.y = 2;
        this.addChild(bgMask);
         // 上边队伍icon
        this.topTeam = new eui.Image();
        this.topTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.topTeam.width = 24;
        this.topTeam.height = 24;
        this.topTeam.x = 38;
        this.topTeam.y = 2;
        //this.topTeam.mask = bgMask;  // 这里见鬼了，添加遮罩会使整个队伍logo不显示，原因找不到。
        this.addChild(this.topTeam);
       
        //插入遮罩层
        let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        bgMask02.x = 38;
        bgMask02.y = 30;
        this.addChild(bgMask02);
         // 下边队伍icon
        this.bottomTeam = new eui.Image();
        this.bottomTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.bottomTeam.width = 24;
        this.bottomTeam.height = 24;
        this.bottomTeam.x = 38;
        this.bottomTeam.y = 30;
        // this.bottomTeam.mask = bgMask02;// 这里见鬼了，添加遮罩会使整个队伍logo不显示，原因找不到。
        this.addChild(this.bottomTeam);
       

         //上边队伍点球情况  (上面进球y=1，下面y=34， x>90&&x<426)
        let penaltyIn = this.drawIn();
        penaltyIn.x = 90;
        penaltyIn.y = 1;
        this.addChild(penaltyIn);
        //下边队伍点球情况
        let penaltyIn2 = this.drawIn();
        penaltyIn2.x = 426;
        penaltyIn2.y = 34;
        this.addChild(penaltyIn2);

        // 时间轴
        let timer:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-time_png'));
        timer.x = 79;
        timer.y = 15;
        this.addChild(timer);

        //进度条
        let lineTime:egret.Shape = new egret.Shape();
        lineTime.graphics.lineStyle(7,0xdf0000);

        lineTime.graphics.moveTo(91,30);

        lineTime.graphics.lineTo(10,30);   // 90分钟位置，如果有胜负就停止，不然继续走到449位置

        // lineTime.graphics.lineTo(358,30);   //358是90分钟位置，如果有胜负就停止，不然继续走到449位置
        // lineTime.graphics.lineTo(449,30);
        // lineTime.graphics.endFill();

        // console.log(123)
        // egret.Tween.get( lineTime ).to( { x : 358 ,y:0 } ,5000 ) 
        // var  i = 10 ;
        // setInterval(()=>{
        //     i++ ;
        //     lineTime.graphics.lineTo( 10 + i ,30)
        // },100)


        this.addChild(lineTime);
       
    }

    private drawIn(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-in_png'));
        return img;
    }
    private drawOut(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-out_png'));
        return img;
    }
}