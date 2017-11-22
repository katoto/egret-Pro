class Top extends egret.DisplayObjectContainer{
    // 头部
    public constructor(Width){
        super();
        this.drawTop(Width);
    }
    //冠军记录弹窗
    private pop02Cham;
    private textTitle:egret.TextField;
    private textDate:egret.TextField;
    private drawTop(Width){

        //    左上角标题
        this.textTitle = new egret.TextField();
        this.textTitle.text = '欧洲杯1/4决赛';
        this.textTitle.textColor = 0xffffff;
        this.textTitle.size = 30;
        this.textTitle.x = 20;
        this.textTitle.y = 14;
        this.addChild(this.textTitle);

        this.textDate= new egret.TextField();
        this.textDate.text = '当日第55期';
        this.textDate.textColor = 0xffffff;
        this.textDate.size = 18;
        this.textDate.x = 20;
        this.textDate.y = 54;
        this.addChild(this.textDate);
        // 右上角充值与往期
        let btnPast:egret.Bitmap = new egret.Bitmap(RES.getRes('btn-past_png'));
        btnPast.x = Width - 163;
        btnPast.y = 21;
        this.addChild(btnPast);
        btnPast.touchEnabled = true;
        btnPast.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
            console.log('往期弹窗');
            this.pop02Cham = new Pop02Cham();
            this.addChild(this.pop02Cham);
        },this)
        let btnRecharge:egret.Bitmap = new egret.Bitmap(RES.getRes('btn-recharge_png'));
        btnRecharge.x = Width - 76;
        btnRecharge.y = 23;
        this.addChild(btnRecharge);
        btnRecharge.touchEnabled = true;
        btnRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
            console.log('充值弹窗')
        },this)
    }
    /* 更新头部杯赛 */
    public setTextTitle( title:string ){
        this.textTitle.text = title;
    }
    /* 更新头部期数 */
    public setTextDate( title:string ){
        this.textDate.text = title;
    }
    
}