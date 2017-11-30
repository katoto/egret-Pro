// 晋升
class Promotion extends eui.UILayer{
    public constructor(){
        super();
        this.drawPromotion();
    }
    private localObj = {} ;

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

    // 移动
    private leftTeam41_copy;
    private rightTeam41_copy;
    private leftTeam42_copy;
    private rightTeam42_copy;
    private leftTeam43_copy;
    private rightTeam43_copy;
    private leftTeam44_copy;
    private rightTeam44_copy;
    private leftTeam21_copy;
    private rightTeam21_copy;
    private leftTeam22_copy;
    private rightTeam22_copy;


    private teamF41:egret.TextField;
    private teamF42:egret.TextField;
    private teamF43:egret.TextField;
    private teamF44:egret.TextField;
    private teamF21:egret.TextField;
    private teamF22:egret.TextField;
    private teamF11:egret.TextField;

    // win 
    private proWin41_l ;
    private proWin41_r ;
    private proWin42_l ;
    private proWin42_r ;
    private proWin43_l ;
    private proWin43_r ;
    private proWin44_l ;
    private proWin44_r ;

    private proWin21_l ;
    private proWin21_r ;
    private proWin22_l ;
    private proWin22_r ;

    private wrap:egret.DisplayObjectContainer

    private drawPromotion(){
        let $store = window['store'] ;
        //蒙版
       let layer:egret.Shape = new egret.Shape();
       layer.graphics.beginFill(0x000000,0.7);
       layer.graphics.drawRect(0,0, $store['stage_Width'], $store['stage_Height']);
       layer.graphics.endFill();
       this.addChild(layer);
       //容器
       this.wrap = new egret.DisplayObjectContainer();
       this.wrap.width = 664;
       this.wrap.height = 1092;
       this.wrap.anchorOffsetX = 332;
       this.wrap.anchorOffsetY = 546;
       this.wrap.x = $store['stage_anWidth'];
       this.wrap.y = $store['stage_anHeight'];
       this.wrap.scaleX= $store.scale;
       this.wrap.scaleY= $store.scale;
       this.addChild(this.wrap);
       //bg
       let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-promotion_png'));
       this.wrap.addChild(bg);
       
        //决赛
        // 左边
        let lbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder11.x = 208;
        lbgBorder11.y = 521;
        this.wrap.addChild(lbgBorder11);
        //队伍icon
        this.leftTeam11 = new eui.Image();
        // this.leftTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam11.width = 62;
        this.leftTeam11.height = 62;
        this.leftTeam11.x = 211;
        this.leftTeam11.y = 524;
        this.wrap.addChild(this.leftTeam11);

        this.localObj['leftTeam11'] = {
            x:211 ,
            y:524 ,
        }

        //  右边
        // 插入边框
        let rbgBorder11:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder11.x = 371;
        rbgBorder11.y = 521;
        this.wrap.addChild(rbgBorder11);
        //队伍icon
        this.rightTeam11 = new eui.Image();
        // this.rightTeam11.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.rightTeam11.width = 62;
        this.rightTeam11.height = 62;
        this.rightTeam11.x = 374;
        this.rightTeam11.y = 524;
        this.wrap.addChild(this.rightTeam11);

        this.localObj['rightTeam11'] = {
            x:374 ,
            y:524 ,
        }

        this.teamF11 = new egret.TextField();
        this.teamF11.x = 176;
        this.teamF11.y = 522;
        // this.teamF11.text = '3:2';
        this.teamF11.size = 32;
        this.teamF11.textColor = 0xffffff;
        this.teamF11.width = 300;
        this.teamF11.height = 68;
        this.teamF11.bold = true;
        this.teamF11.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF11.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF11); 

         //1/2 top
        // 左边
        // 插入边框
        let lbgBorder21:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder21.x = 208;
        lbgBorder21.y = 300;
        this.wrap.addChild(lbgBorder21);
        //win
        this.proWin21_l = this.proWin();
        this.proWin21_l.x = 192;
        this.proWin21_l.y = 283;
        // wrap.addChild( this.proWin21_l )
        //队伍icon
        this.leftTeam21 = new eui.Image();
        // this.leftTeam21.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam21.width = 62;
        this.leftTeam21.height = 62;
        this.leftTeam21.x = 211;
        this.leftTeam21.y = 303;
        this.wrap.addChild(this.leftTeam21);

        this.leftTeam21_copy = new eui.Image();
        // this.leftTeam21.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.leftTeam21_copy.width = 62;
        this.leftTeam21_copy.height = 62;
        this.leftTeam21_copy.x = 211;
        this.leftTeam21_copy.y = 303;
        this.wrap.addChild(this.leftTeam21_copy);

        this.localObj['leftTeam21'] = {
            x:211 ,
            y:303 ,
        }

        //  右边
        // 插入边框
        let rbgBorder21:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder21.x = 371;
        rbgBorder21.y = 300;
        this.wrap.addChild(rbgBorder21);
        //win
        this.proWin21_r = this.proWin();
        this.proWin21_r.x = 355;
        this.proWin21_r.y = 283;
        // wrap.addChild(proWin010)
        //队伍icon
        this.rightTeam21 = new eui.Image();
        this.rightTeam21.width = 62;
        this.rightTeam21.height = 62;
        this.rightTeam21.x = 374;
        this.rightTeam21.y = 303;
        this.wrap.addChild(this.rightTeam21);

        this.rightTeam21_copy = new eui.Image();
        this.rightTeam21_copy.width = 62;
        this.rightTeam21_copy.height = 62;
        this.rightTeam21_copy.x = 374;
        this.rightTeam21_copy.y = 303;
        this.wrap.addChild( this.rightTeam21_copy );

        this.localObj['rightTeam21'] = {
            x:374 ,
            y:303 ,
        }

        this.teamF21 = new egret.TextField();
        this.teamF21.x = 176;
        this.teamF21.y = 300;
        this.teamF21.size = 32;
        this.teamF21.textColor = 0xffffff;
        this.teamF21.width = 300;
        this.teamF21.height = 68;
        this.teamF21.bold = true;
        this.teamF21.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF21.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF21); 

         //1/2 bottom
        // 左边
        // 插入边框
        let lbgBorder22:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder22.x = 208;
        lbgBorder22.y = 743;
        this.wrap.addChild(lbgBorder22);
        //win
        this.proWin22_l = this.proWin();
        this.proWin22_l.x = 192;
        this.proWin22_l.y = 726;
        // wrap.addChild( this.proWin22_l )
        //队伍icon
        this.leftTeam22 = new eui.Image();
        this.leftTeam22.width = 62;
        this.leftTeam22.height = 62;
        this.leftTeam22.x = 211;
        this.leftTeam22.y = 746;
        this.wrap.addChild(this.leftTeam22);

        this.leftTeam22_copy = new eui.Image();
        this.leftTeam22_copy.width = 62;
        this.leftTeam22_copy.height = 62;
        this.leftTeam22_copy.x = 211;
        this.leftTeam22_copy.y = 746;
        this.wrap.addChild( this.leftTeam22_copy );

        this.localObj['leftTeam22'] = {
            x:211 ,
            y:746 ,
        }

        // 插入边框
        let rbgBorder22:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder22.x = 371;
        rbgBorder22.y = 743;
        this.wrap.addChild(rbgBorder22);
         //win
        this.proWin22_r = this.proWin();
        this.proWin22_r.x = 355;
        this.proWin22_r.y = 726;
        // this.wrap.addChild(this.proWin22_r)
        //队伍icon
        this.rightTeam22 = new eui.Image();
        this.rightTeam22.width = 62;
        this.rightTeam22.height = 62;
        this.rightTeam22.x = 374;
        this.rightTeam22.y = 746;

        this.rightTeam22_copy = new eui.Image();
        this.rightTeam22_copy.width = 62;
        this.rightTeam22_copy.height = 62;
        this.rightTeam22_copy.x = 374;
        this.rightTeam22_copy.y = 746;
        this.wrap.addChild( this.rightTeam22_copy );

        this.localObj['rightTeam22'] = {
            x:374 ,
            y:746 ,
        }

        this.wrap.addChild(this.rightTeam22);

        this.teamF22 = new egret.TextField();
        this.teamF22.x = 176;
        this.teamF22.y = 743;
        this.teamF22.size = 32;
        this.teamF22.textColor = 0xffffff;
        this.teamF22.width = 300;
        this.teamF22.height = 68;
        this.teamF22.bold = true;
        this.teamF22.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF22.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF22); 

        // 插入边框
        let lbgBorder41:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder41.x = 32;
        lbgBorder41.y = 57;
        this.wrap.addChild(lbgBorder41);
        //win
        this.proWin41_l = this.proWin();
        this.proWin41_l.x = 16;
        this.proWin41_l.y = 40;
        // wrap.addChild(proWin01)
        
        this.leftTeam41 = new eui.Image();
        this.leftTeam41.width = 62;
        this.leftTeam41.height = 62;
        this.leftTeam41.x = 35;
        this.leftTeam41.y = 60;
        this.wrap.addChild(this.leftTeam41);

        this.leftTeam41_copy = new eui.Image();
        this.leftTeam41_copy.width = 62;
        this.leftTeam41_copy.height = 62;
        this.leftTeam41_copy.x = 35;
        this.leftTeam41_copy.y = 60;
        this.wrap.addChild(this.leftTeam41_copy);

        this.localObj['leftTeam41'] = {
            x:35 ,
            y:60 ,
        }

        // 插入边框
        let rbgBorder41:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder41.x = 195;
        rbgBorder41.y = 57;
        this.wrap.addChild(rbgBorder41);
         //win
        this.proWin41_r = this.proWin();
        this.proWin41_r.x = 179;
        this.proWin41_r.y = 40;
        // wrap.addChild(proWin02)
        //队伍icon
        this.rightTeam41 = new eui.Image();
        this.rightTeam41.width = 62;
        this.rightTeam41.height = 62;
        this.rightTeam41.x = 198;
        this.rightTeam41.y = 60;
        this.wrap.addChild(this.rightTeam41);

        this.rightTeam41_copy = new eui.Image();
        this.rightTeam41_copy.width = 62;
        this.rightTeam41_copy.height = 62;
        this.rightTeam41_copy.x = 198;
        this.rightTeam41_copy.y = 60;
        this.wrap.addChild(this.rightTeam41_copy);
this.localObj['rightTeam41'] = {
            x:198 ,
            y:60 ,
        }

        this.teamF41 = new egret.TextField();
        this.teamF41.x = 0;
        this.teamF41.y = 57;
        // this.teamF41.text = '3:2';
        this.teamF41.size = 32;
        this.teamF41.textColor = 0xffffff;
        this.teamF41.width = 300;
        this.teamF41.height = 68;
        this.teamF41.bold = true;
        this.teamF41.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF41.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF41); 

         //1/4 2
        let lbgBorder42:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder42.x = 395;
        lbgBorder42.y = 57;
        this.wrap.addChild(lbgBorder42);
         //win
        this.proWin42_l = this.proWin();
        this.proWin42_l.x = 379;
        this.proWin42_l.y = 40;
        // wrap.addChild(proWin03)
        //队伍icon
        this.leftTeam42 = new eui.Image();
        this.leftTeam42.width = 62;
        this.leftTeam42.height = 62;
        this.leftTeam42.x = 398;
        this.leftTeam42.y = 60;
        this.wrap.addChild(this.leftTeam42);

        this.leftTeam42_copy = new eui.Image();
        this.leftTeam42_copy.width = 62;
        this.leftTeam42_copy.height = 62;
        this.leftTeam42_copy.x = 398;
        this.leftTeam42_copy.y = 60;
        this.wrap.addChild( this.leftTeam42_copy );

        this.localObj['leftTeam42'] = {
            x:398 ,
            y:60 ,
        }

        let rbgBorder42:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder42.x = 558;
        rbgBorder42.y = 57;
        this.wrap.addChild(rbgBorder42);
         //win
        this.proWin42_r = this.proWin();
        this.proWin42_r.x = 542;
        this.proWin42_r.y = 40;
        // wrap.addChild(proWin04)
        //队伍icon
        this.rightTeam42 = new eui.Image();
        this.rightTeam42.width = 62;
        this.rightTeam42.height = 62;
        this.rightTeam42.x = 561;
        this.rightTeam42.y = 60;
        this.wrap.addChild(this.rightTeam42);

        this.rightTeam42_copy = new eui.Image();
        this.rightTeam42_copy.width = 62;
        this.rightTeam42_copy.height = 62;
        this.rightTeam42_copy.x = 561;
        this.rightTeam42_copy.y = 60;
        this.wrap.addChild(this.rightTeam42_copy);

        this.localObj['rightTeam42'] = {
            x:561 ,
            y:60 ,
        }

        this.teamF42 = new egret.TextField();
        this.teamF42.x = 363;
        this.teamF42.y = 57;
        this.teamF42.size = 32;
        this.teamF42.textColor = 0xffffff;
        this.teamF42.width = 300;
        this.teamF42.height = 68;
        this.teamF42.bold = true;
        this.teamF42.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF42.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF42); 

        // 插入边框
        let lbgBorder43:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder43.x = 32;
        lbgBorder43.y = 968;
        this.wrap.addChild(lbgBorder43);
         //win
        this.proWin43_l = this.proWin();
        this.proWin43_l.x = 16;
        this.proWin43_l.y = 951;
        // wrap.addChild(proWin05)
        //队伍icon
        this.leftTeam43 = new eui.Image();
        this.leftTeam43.width = 62;
        this.leftTeam43.height = 62;
        this.leftTeam43.x = 35;
        this.leftTeam43.y = 971;
        this.wrap.addChild(this.leftTeam43);

        this.leftTeam43_copy = new eui.Image();
        this.leftTeam43_copy.width = 62;
        this.leftTeam43_copy.height = 62;
        this.leftTeam43_copy.x = 35;
        this.leftTeam43_copy.y = 971;
        this.wrap.addChild(this.leftTeam43_copy);

        this.localObj['leftTeam43'] = {
            x:35 ,
            y:971 ,
        }

        //  右边
        // 插入边框
        let rbgBorder43:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder43.x = 195;
        rbgBorder43.y = 968;
        this.wrap.addChild(rbgBorder43);
        //win
        this.proWin43_r = this.proWin();
        this.proWin43_r.x = 179;
        this.proWin43_r.y = 951;
        // wrap.addChild(proWin06)
        //队伍icon
        this.rightTeam43 = new eui.Image();
        this.rightTeam43.width = 62;
        this.rightTeam43.height = 62;
        this.rightTeam43.x = 198;
        this.rightTeam43.y = 971;
        this.wrap.addChild(this.rightTeam43);

        this.rightTeam43_copy = new eui.Image();
        this.rightTeam43_copy.width = 62;
        this.rightTeam43_copy.height = 62;
        this.rightTeam43_copy.x = 198;
        this.rightTeam43_copy.y = 971;
        this.wrap.addChild(this.rightTeam43_copy);

        this.localObj['rightTeam43'] = {
            x:198 ,
            y:971 ,
        }

        this.teamF43 = new egret.TextField();
        this.teamF43.x = 0;
        this.teamF43.y = 968;
        this.teamF43.size = 32;
        this.teamF43.textColor = 0xffffff;
        this.teamF43.width = 300;
        this.teamF43.height = 68;
        this.teamF43.bold = true;
        this.teamF43.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF43.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF43); 

        // 插入边框
        let lbgBorder44:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        lbgBorder44.x = 395;
        lbgBorder44.y = 968;
        this.wrap.addChild(lbgBorder44);
          //win
        this.proWin44_l = this.proWin();
        this.proWin44_l.x = 379;
        this.proWin44_l.y = 951;
        // wrap.addChild(proWin07)
        //队伍icon
        this.leftTeam44 = new eui.Image();
        this.leftTeam44.width = 62;
        this.leftTeam44.height = 62;
        this.leftTeam44.x = 398;
        this.leftTeam44.y = 971;
        this.wrap.addChild(this.leftTeam44);

        this.leftTeam44_copy = new eui.Image();
        this.leftTeam44_copy.width = 62;
        this.leftTeam44_copy.height = 62;
        this.leftTeam44_copy.x = 398;
        this.leftTeam44_copy.y = 971;
        this.wrap.addChild(this.leftTeam44_copy);

        this.localObj['leftTeam44'] = {
            x:398 ,
            y:971 ,
        }

        let rbgBorder44:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rbgBorder44.x = 558;
        rbgBorder44.y = 968;
        this.wrap.addChild(rbgBorder44);
        //win
        this.proWin44_r = this.proWin();
        this.proWin44_r.x = 542;
        this.proWin44_r.y = 951;
        // wrap.addChild(proWin08)
        this.rightTeam44 = new eui.Image();
        this.rightTeam44.width = 62;
        this.rightTeam44.height = 62;
        this.rightTeam44.x = 561;
        this.rightTeam44.y = 971;
        this.wrap.addChild(this.rightTeam44);

        this.rightTeam44_copy = new eui.Image();
        this.rightTeam44_copy.width = 62;
        this.rightTeam44_copy.height = 62;
        this.rightTeam44_copy.x = 561;
        this.rightTeam44_copy.y = 971;
        this.wrap.addChild(this.rightTeam44_copy);

        this.localObj['rightTeam44'] = {
            x:561 ,
            y:971 ,
        }

        this.teamF44 = new egret.TextField();
        this.teamF44.x = 363;
        this.teamF44.y = 968;
        this.teamF44.size = 32;
        this.teamF44.textColor = 0xffffff;
        this.teamF44.width = 300;
        this.teamF44.height = 68;
        this.teamF44.bold = true;
        this.teamF44.textAlign = egret.HorizontalAlign.CENTER;
        this.teamF44.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.wrap.addChild(this.teamF44); 

    }

    private proWin(){
        let img = new egret.Bitmap(RES.getRes('proWin_png'));
        return img;
    }
    /**
     *  更新各阶段数据  && 动画写到一起
     *  @param 1 移动 4-2  2  2-1 
     */
    private upPromotionMsg( pre_result:any ,move:string ){
        let score_num = 0 ;
        let firstWinName = [] ;
        let secondWinName = [] ;

        if( pre_result ){
            // 清除之前的数据
            this.clearPromoMsg() ;
            if( pre_result.first ){
                for( let i=0;i<4;i++ ){
                    if( pre_result.first[i] ){

                        if( pre_result.first[i].awaylogo ){
                            this['rightTeam4'+( i+1 )].source = pre_result.first[i].awaylogo;
                        }
                        if( pre_result.first[i].homelogo ){
                            this['leftTeam4'+( i+1 )].source = pre_result.first[i].homelogo;
                        }

                        if( pre_result.first[i].awaylogo ){
                            this['rightTeam4'+( i+1 ) + '_copy'].source = pre_result.first[i].awaylogo;
                        }
                        if( pre_result.first[i].homelogo ){
                            this['leftTeam4'+( i+1 )  + '_copy'].source = pre_result.first[i].homelogo;
                        }

                        score_num = parseInt( pre_result.first[i].score[0] ) ;
                        
                        if( pre_result.first[i].is_spotkick === '0' ){
                            this[ 'teamF4'+( i + 1 ) ].text = pre_result.first[i].score ;
                            // 显示冠军标志
                            if( parseInt( pre_result.first[i].score[0] ) > parseInt( pre_result.first[i].score[2] ) ){
                                if( !!this['proWin4'+ ( i+1 ) +'_l'] ){
                                    this.wrap.addChild( this['proWin4'+ ( i+1 ) +'_l'] ) ;
                                    firstWinName.push( 'leftTeam4'+( i+1 ) ) ;
                                }
                            }else{
                                if( !!this['proWin4'+ ( i+1 ) +'_r'] ){
                                    this.wrap.addChild( this['proWin4'+ ( i+1 ) +'_r'] ) ;
                                    firstWinName.push( 'rightTeam4'+( i+1 ) ) ;
                                }
                            }
                        }else{
                            this[ 'teamF4'+( i + 1 ) ].text = parseInt( pre_result.first[i].spotkick[0] )+score_num + ':' + ( parseInt( pre_result.first[i].spotkick[2] ) + score_num );
                            if( parseInt( pre_result.first[i].spotkick[0] ) > parseInt( pre_result.first[i].spotkick[2] ) ){
                                if( !!this['proWin4'+ ( i+1 ) +'_l'] ){
                                    this.wrap.addChild( this['proWin4'+ ( i+1 ) +'_l'] ) ;
                                    firstWinName.push( 'leftTeam4'+( i+1 ) ) ;
                                }
                            }else{
                                if( !!this['proWin4'+ ( i+1 ) +'_r'] ){
                                    this.wrap.addChild( this['proWin4'+ ( i+1 ) +'_r'] ) ;
                                    firstWinName.push( 'rightTeam4'+( i+1 ) ) ;
                                }
                            }

                        }
                    }
                }
            }
            if( pre_result.second ){
                for( let i=0;i<2;i++ ){
                    if( pre_result.second[i] ){
                        if( pre_result.second[i].awaylogo ){
                            this['rightTeam2'+( i+1 )].source = pre_result.second[i].awaylogo;
                        }
                        if( pre_result.second[i].homelogo ){
                            this['leftTeam2'+( i+1 )].source = pre_result.second[i].homelogo;
                        }

                        if( pre_result.second[i].awaylogo ){
                            this['rightTeam2'+( i+1 ) + '_copy' ].source = pre_result.second[i].awaylogo;
                        }
                        if( pre_result.second[i].homelogo ){
                            this['leftTeam2'+( i+1 ) + '_copy' ].source = pre_result.second[i].homelogo;
                        }

                        score_num = parseInt( pre_result.second[i].score[0] ) ;
                        
                        if( pre_result.second[i].is_spotkick === '0' ){
                            this[ 'teamF2'+( i + 1 ) ].text = pre_result.second[i].score ;
                            // 显示冠军标志
                            if( parseInt( pre_result.second[i].score[0] ) > parseInt( pre_result.second[i].score[2] ) ){
                                if( !!this['proWin2'+ ( i+1 ) +'_l'] ){
                                    this.wrap.addChild( this['proWin2'+ ( i+1 ) +'_l'] ) ;
                                    secondWinName.push( 'leftTeam2'+( i+1 ) ) ;
                                }
                            }else{
                                if( !!this['proWin2'+ ( i+1 ) +'_r'] ){
                                    this.wrap.addChild( this['proWin2'+ ( i+1 ) +'_r'] ) ;
                                    secondWinName.push( 'rightTeam2'+( i+1 ) ) ;
                                }
                            }
                        }else{
                            this[ 'teamF2'+( i + 1 ) ].text = parseInt( pre_result.second[i].spotkick[0] )+score_num + ':' + ( parseInt( pre_result.second[i].spotkick[2] ) + score_num );
                            if( parseInt( pre_result.second[i].spotkick[0] ) > parseInt( pre_result.second[i].spotkick[2] ) ){
                                if( !!this['proWin2'+ ( i+1 ) +'_l'] ){
                                    this.wrap.addChild( this['proWin2'+ ( i+1 ) +'_l'] );
                                    secondWinName.push( 'leftTeam2'+( i+1 ) ) ;
                                }
                            }else{
                                if( !!this['proWin2'+ ( i+1 ) +'_r'] ){
                                    this.wrap.addChild( this['proWin2'+ ( i+1 ) +'_r'] );
                                    secondWinName.push( 'rightTeam2'+( i+1 ) ) ;
                                }
                            }
                        }
                    }
                } 
            }
        }

        if( move === '1' ){
            for( let i=0;i<4 ;i++ ){
                if( ~firstWinName[i].indexOf( 'Team41' ) ){
                    egret.Tween.get( this[ firstWinName[i] ] ).to( {
                        x: this['leftTeam21'].x ,
                        y: this['leftTeam21'].y
                    }, 700 );
                }
                if( ~firstWinName[i].indexOf( 'Team42' ) ){
                    egret.Tween.get( this[ firstWinName[i] ] ).to( {
                        x: this['rightTeam21'].x ,
                        y: this['rightTeam21'].y
                    }, 700 );
                }
                if( ~firstWinName[i].indexOf( 'Team43' )){
                    egret.Tween.get( this[ firstWinName[i] ] ).to( {
                        x: this['leftTeam22'].x ,
                        y: this['leftTeam22'].y
                    }, 700 );
                }
                if( ~firstWinName[i].indexOf( 'Team44' ) ){
                    egret.Tween.get( this[ firstWinName[i] ] ).to( {
                        x: this['rightTeam22'].x ,
                        y: this['rightTeam22'].y
                    }, 700 );
                }
            }

        }else if( move === '2' ){
            console.log( secondWinName )
            for( let i=0;i<2 ;i++ ){
                if( ~secondWinName[i].indexOf( 'Team21' ) ){
                    egret.Tween.get( this[ secondWinName[i] ] ).to( {
                        x: this['leftTeam11'].x ,
                        y: this['leftTeam11'].y
                    }, 700 );
                }
                if( ~secondWinName[i].indexOf( 'Team22' ) ){
                    egret.Tween.get( this[ secondWinName[i] ] ).to( {
                        x: this['rightTeam11'].x ,
                        y: this['rightTeam11'].y
                    }, 700 );
                }
            }

        }
    }

    /**
     *  第一阶段 动画过渡
     */
    private moveSecond( preResult:any ){
        this.upPromotionMsg( preResult , '1' );

    }

     /**
     *  第二阶段 动画过渡
     */ 
    private moveThree( preResult:any ){
        this.upPromotionMsg( preResult , '2' );
    }

    /**
     *  清除之前的所有数据
     * 
     */
    private clearPromoMsg(){
        let baseLeftTeam = 'leftTeam4' ;
        let baseRightTeam = 'rightTeam4' ;
        let baseTeamF = 'teamF4' ;
        let baseProWin = 'proWin4' ;

        let baseTeamF2 = 'teamF2' ;
        let baseProWin2 = 'proWin2' ;
        let baseLeftTeam2 = 'leftTeam2' ;
        let baseRightTeam2 = 'rightTeam2' ;

        for( let i=1;i<=4;i++ ){
            if( this[ baseLeftTeam + i ] ){
                this[ baseLeftTeam + i ].source = '' ;
            }
            if( this[ baseRightTeam + i ] ){
                this[ baseRightTeam + i ].source = '' ;
            }

            if( this[ baseLeftTeam + i + '_copy' ] ){
                this[ baseLeftTeam + i + '_copy' ].source = '' ;
            }
            if( this[ baseRightTeam + i + '_copy' ] ){
                this[ baseRightTeam + i + '_copy' ].source = '' ;
            }

            if( this[ baseTeamF + i ] ){
                this[ baseTeamF + i ].text = '' ;
            }
            if( this[ baseProWin + i +'_l' ].parent ){
                this.wrap.removeChild( this[ baseProWin + i +'_l' ] )
            }
            if( this[ baseProWin + i +'_r' ].parent ){
                this.wrap.removeChild( this[ baseProWin + i +'_r' ] )
            }            
        }

        for( let i=1;i<=2;i++ ){
            if( this[ baseLeftTeam2 + i ] ){
                this[ baseLeftTeam2+ i ].source = '' ;
            }
            if( this[ baseRightTeam2 + i ] ){
                this[ baseRightTeam2 + i ].source = '' ;
            }

            if( this[ baseLeftTeam2 + i + '_copy' ] ){
                this[ baseLeftTeam2 + i + '_copy' ].source = '' ;
            }
            if( this[ baseRightTeam2 + i + '_copy'  ] ){
                this[ baseRightTeam2 + i + '_copy'  ].source = '' ;
            }

            if( this[ baseTeamF2 + i ] ){
                this[ baseTeamF2 + i ].text = '' ;
            }
            if( this[ baseProWin2 + i +'_l' ].parent ){
                this.wrap.removeChild( this[ baseProWin2 + i +'_l' ] )
            }
            if( this[ baseProWin2 + i +'_r' ].parent ){
                this.wrap.removeChild( this[ baseProWin2 + i +'_r' ] )
            }            
        }
    }


}