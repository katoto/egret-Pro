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
        this.bottom = new egret.Sprite();
        this.bottom.graphics.beginFill(0x2c253e);
        this.bottom.graphics.drawRect(0, 0, Width, 90);
        this.bottom.graphics.endFill();
        // 设置锚点，使背景处于舞台最下方
        this.addChild(this.bottom);
        // 规则
        var btnRule = new egret.Bitmap(RES.getRes('rule_png'));
        btnRule.x = 40;
        btnRule.y = 27;
        this.bottom.addChild(btnRule);
        btnRule.touchEnabled = true;
        btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('规则弹窗');
        }, this);
        // 聊天
        var btnChat = new egret.Bitmap(RES.getRes('chat_png'));
        btnChat.x = Width - 80;
        btnChat.y = 20;
        this.bottom.addChild(btnChat);
        btnChat.touchEnabled = true;
        btnChat.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('聊天弹窗');
        }, this);
    };
    Foot.prototype.initBtn = function () {
        //三个投注按钮
        if (window['store']['user_info'] && window['store']['user_info'][0] && window['store']['user_info'][0].total) {
            if (parseInt(window['store']['user_info'][0].total) < 100000) {
                this.btn_one = new FootBtn(100);
                this.btn_two = new FootBtn(500);
                this.btn_three = new FootBtn(1000);
                window['store']['curr_btn_arr'] = [100, 500, 1000];
            }
            else if (parseInt(window['store']['user_info'][0].total) >= 1000000) {
                this.btn_one = new FootBtn(1000);
                this.btn_two = new FootBtn(10000);
                this.btn_three = new FootBtn(50000);
                window['store']['curr_btn_arr'] = [1000, 10000, 50000];
            }
            else {
                this.btn_one = new FootBtn(500);
                this.btn_two = new FootBtn(1000);
                this.btn_three = new FootBtn(10000);
                window['store']['curr_btn_arr'] = [500, 1000, 10000];
            }
            this.btn_one.x = 188;
            this.btn_two.x = window['store']['stage_Width'] / 2;
            this.btn_three.x = 560;
            this.bottom.addChild(this.btn_one);
            this.bottom.addChild(this.btn_two);
            this.bottom.addChild(this.btn_three);
            this.btn_one['init_scale'](1);
            this.btn_two['init_scale'](0.9);
            this.btn_three['init_scale'](0.9);
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][0];
            this.btn_one.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_oneDown, this);
            this.btn_two.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_twoDown, this);
            this.btn_three.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_threeDown, this);
        }
        else {
            console.error('user_info data error  at foot.ts');
        }
    };
    Foot.prototype.btn_oneDown = function (e) {
        this.btn_two['init_scale'](0.9);
        this.btn_three['init_scale'](0.9);
        if (this.btn_one['get_scaleVal']() !== 1) {
            this.btn_one['init_scale'](1);
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][0];
        }
    };
    Foot.prototype.btn_twoDown = function (e) {
        this.btn_one['init_scale'](0.9);
        this.btn_three['init_scale'](0.9);
        if (this.btn_two['get_scaleVal']() !== 1) {
            this.btn_two['init_scale'](1);
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][1];
        }
    };
    Foot.prototype.btn_threeDown = function (e) {
        this.btn_two['init_scale'](0.9);
        this.btn_one['init_scale'](0.9);
        if (this.btn_three['get_scaleVal']() !== 1) {
            this.btn_three['init_scale'](1);
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][2];
        }
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
        // console.log(222)
    };
    return Foot;
}(egret.DisplayObjectContainer));
__reflect(Foot.prototype, "Foot");
//# sourceMappingURL=Foot.js.map