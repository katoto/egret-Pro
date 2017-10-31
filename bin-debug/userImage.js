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
var userImage = (function (_super) {
    __extends(userImage, _super);
    // 用户头像
    function userImage(name, src, gold) {
        var _this = _super.call(this) || this;
        // this.once(egret.Event.ADDED_TO_STAGE,this.addToStage(),this);
        _this.addToStage(name, src, gold);
        return _this;
    }
    // private _source:Array<string> =  [ 
    //     "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG",
    //     "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2602004849,1504397654&fm=173&s=B180DB1548E33B0925B8B884030070E1&w=218&h=146&img.JPEG",
    //     "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3999684790,170950214&fm=173&s=B79DAC6C62F3002704A160180300C09A&w=218&h=146&img.JPEG"
    // ];
    userImage.prototype.addToStage = function (name, src, gold) {
        var bg = new egret.DisplayObjectContainer();
        bg.width = 88;
        bg.height = 124;
        this.addChild(bg);
        // 插入灰色背景
        var bgBlack = new egret.Bitmap(RES.getRes('bg-avatar_png'));
        this.addChild(bgBlack);
        //用户姓名
        var myName = new egret.TextField();
        myName.text = name;
        myName.size = 15;
        myName.textColor = 0xa5a1af;
        myName.width = 88;
        myName.height = 28;
        myName.textAlign = egret.HorizontalAlign.CENTER;
        myName.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(myName);
        // 用户头像
        // var source:Array<string> = this._source;
        var img = new eui.Image();
        img.source = src;
        // img.source = source[0];
        img.width = 62;
        img.height = 62;
        img.x = 13;
        img.y = 28;
        this.addChild(img);
        // 金币
        var myGold = new egret.TextField();
        myGold.text = gold;
        myGold.size = 20;
        myGold.textColor = 0xf2aa20;
        myGold.bold = true;
        myGold.width = 88;
        myGold.height = 32;
        myGold.y = 90;
        myGold.textAlign = egret.HorizontalAlign.CENTER;
        myGold.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(myGold);
    };
    return userImage;
}(eui.UILayer));
__reflect(userImage.prototype, "userImage");
