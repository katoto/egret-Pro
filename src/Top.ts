class Top extends egret.DisplayObjectContainer{
    // 头部
    public constructor(Width){
        super();
        this.drawTop(Width);
    }
    private drawTop(Width){
        //    左上角标题
        let textTitle:string = '欧洲杯1/4决赛';
        let title:egret.TextField = new egret.TextField();
        title.text = textTitle;
        title.textColor = 0xffffff;
        title.size = 30;
        title.x = 20;
        title.y = 14;
        this.addChild(title);
        let textDate:string = '当日第55期';
        let date:egret.TextField = new egret.TextField();
        date.text = textDate;
        date.textColor = 0xffffff;
        date.size = 18;
        date.x = 20;
        date.y = 54;
        this.addChild(date);
        // 右上角充值与往期
        let btnPast:egret.Bitmap = new egret.Bitmap(RES.getRes('btn-past_png'));
        btnPast.x = Width - 163;
        btnPast.y = 21;
        this.addChild(btnPast);
        btnPast.touchEnabled = true;
        btnPast.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
            console.log('往期弹窗')
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
}