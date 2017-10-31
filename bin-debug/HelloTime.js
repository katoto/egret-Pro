var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HelloTime = (function (_super) {
    __extends(HelloTime, _super);
    function HelloTime() {
        var _this = _super.call(this) || this;
        _this.n = 6;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HelloTime.prototype.onAddToStage = function (Event) {
        this.spr = new egret.Sprite();
        this.addChild(this.spr);
        this.spr.width = 480;
        this.spr.height = 800;
        this.drawTxt();
        this.drawContent();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onButtonComp, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("test");
        this.timer = new egret.Timer(1000, 8);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
    };
    HelloTime.prototype.drawTxt = function () {
        this.num = new egret.TextField();
        this.num.text = this.n.toString();
        this.num.width = 480;
        this.num.size = 100;
        this.num.textAlign = egret.HorizontalAlign.CENTER;
        this.spr.addChild(this.num);
    };
    HelloTime.prototype.drawContent = function () {
        this.con = new egret.TextField();
        this.con.text = "测试文字";
        this.con.width = 480;
        this.con.textAlign = egret.HorizontalAlign.CENTER;
        this.con.y = 120;
        this.spr.addChild(this.con);
    };
    HelloTime.prototype.onButtonComp = function () {
        this.img = new egret.Bitmap();
        this.img.texture = RES.getRes('btn_jpg');
        var rect = new egret.Rectangle(20, 20, 15, 15);
        this.img.scale9Grid = rect;
        this.img.x = 50;
        this.img.y = 200;
        this.img.width *= 5;
        this.img.height = 70;
        this.spr.addChild(this.img);
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this, true);
    };
    HelloTime.prototype.onTouch = function (evt) {
        this.date = new Date();
        this.StartTime = this.date.getTime();
        this.img.alpha = 0;
        this.timer.start();
        this.drawTxt();
        this.spr.touchEnabled = true;
        this.spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchSrp, this, true);
    };
    HelloTime.prototype.timerFunc = function () {
        if (this.n <= 3) {
            this.num.text = "?";
        }
        else {
            this.spr.removeChildren();
            this.drawTxt();
        }
        this.n--;
    };
    HelloTime.prototype.timerComFunc = function () {
        if (this.n <= -2) {
            this.drawContent();
            this.con.text = '别迷糊了醒醒';
            this.spr.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchSrp, this, true);
        }
    };
    HelloTime.prototype.onTouchSrp = function (evt) {
        this.date = new Date();
        this.StopTime = this.date.getTime();
        this.finalTime = this.StopTime - this.StartTime;
        this.num.text = (this.finalTime / 1000).toFixed(3);
        this.timer.stop();
        this.drawContent();
        this.spr.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchSrp, this, true);
        switch (Math.floor(this.finalTime / 1000)) {
            case 0:
                this.con.text = '很专注';
                break;
            case 1:
                this.con.text = '还行';
                break;
            case 2:
                this.con.text = '不专注';
                break;
            default:
                this.con.text = (this.finalTime).toString();
        }
    };
    return HelloTime;
}(egret.DisplayObjectContainer));
__reflect(HelloTime.prototype, "HelloTime");
//# sourceMappingURL=HelloTime.js.map