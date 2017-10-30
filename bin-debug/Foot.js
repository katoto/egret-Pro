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
var Foot = (function (_super) {
    __extends(Foot, _super);
    // 底部按钮区域
    function Foot(Width, Height) {
        var _this = _super.call(this) || this;
        _this.drawFoot(Width, Height);
        return _this;
    }
    Foot.prototype.drawFoot = function (Width, Height) {
        // 底部背景与投注按钮
        // 底部背景
        var bottom = new egret.Sprite();
        bottom.graphics.beginFill(0x2c253e);
        bottom.graphics.drawRect(0, 0, Width, 90);
        bottom.graphics.endFill();
        // 设置锚点，使背景处于舞台最下方
        this.addChild(bottom);
        // 规则
        var btnRule = new egret.Bitmap(RES.getRes('rule_png'));
        btnRule.x = 40;
        btnRule.y = 27;
        bottom.addChild(btnRule);
        btnRule.touchEnabled = true;
        btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('规则弹窗');
        }, this);
        // 聊天
        var btnChat = new egret.Bitmap(RES.getRes('chat_png'));
        btnChat.x = Width - 80;
        btnChat.y = 20;
        bottom.addChild(btnChat);
        btnChat.touchEnabled = true;
        btnChat.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('聊天弹窗');
        }, this);
        //三个投注按钮
        var btn100 = new egret.Bitmap(RES.getRes('btn-100_png'));
        btn100.x = 120;
        btn100.y = 11;
        bottom.addChild(btn100);
        var btn500 = new egret.Bitmap(RES.getRes('btn-500_png'));
        btn500.anchorOffsetX = btn500.width / 2;
        btn500.x = Width / 2;
        btn500.y = 7;
        bottom.addChild(btn500);
        var btn1000 = new egret.Bitmap(RES.getRes('btn-1000_png'));
        btn1000.anchorOffsetX = btn1000.width;
        btn1000.x = Width - 118;
        btn1000.y = 11;
        bottom.addChild(btn1000);
        btn1000.touchEnabled = true;
        btn1000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hignColor, this);
    };
    Foot.prototype.hignColor = function () {
        // var color:number = 0xffd02f;        /// 光晕的颜色，十六进制，不包含透明度
        // var alpha:number = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        // var blurX:number = 35;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
        // var blurY:number = 35;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        // var strength:number = 2;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        // var quality:number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        // var inner:boolean = false;            /// 指定发光是否为内侧发光，暂未实现
        // var knockout:boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
        // var glowFilter:egret.GlowFilter = new egret.GlowFilter( color, alpha, blurX, blurY,strength, quality, inner, knockout );
        // obj.filters = [ glowFilter ];
        console.log(222);
    };
    return Foot;
}(egret.DisplayObjectContainer));
__reflect(Foot.prototype, "Foot");
//# sourceMappingURL=Foot.js.map