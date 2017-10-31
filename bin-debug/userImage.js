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
        this.myGold = new egret.TextField();
        this.myGold.text = gold;
        this.myGold.size = 20;
        this.myGold.textColor = 0xf2aa20;
        this.myGold.bold = true;
        this.myGold.width = 88;
        this.myGold.height = 32;
        this.myGold.y = 90;
        this.myGold.textAlign = egret.HorizontalAlign.CENTER;
        this.myGold.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.myGold);
    };
    /* 更新金币数 */
    userImage.prototype.setMyGold = function (currGold) {
        this.myGold.text = currGold;
    };
    return userImage;
}(eui.UILayer));
__reflect(userImage.prototype, "userImage");
//# sourceMappingURL=userImage.js.map