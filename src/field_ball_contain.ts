class Field_ball_contain extends egret.DisplayObjectContainer{
    //三个容器 用来包裹决赛、1/2和1/4
    private courtWrap1;
    private courtWrap2;
    private courtWrap4;
    // 比赛对阵
    private field1;
    private field21;
    private field22;
    private field41;
    private field42;
    private field43;
    private field44;

    public constructor(){
        super();
        this.drawField();
    }
    private drawField(){

        this.courtWrap1 = this.courtWrap();
        this.courtWrap2 = this.courtWrap();
        this.courtWrap4 = this.courtWrap();
        // 三选一插入

        this.field1 = new Field_ball('bg-court1_png');
        this.field1.anchorOffsetY = 187.5;
        this.field1.y = 511;   //   963/2+30
        this.courtWrap1.addChild(this.field1);

        this.field21 = new Field_ball('bg-court2_png');
        this.field21.y = 184;   // (963-250*2)/3+30 
        this.courtWrap2.addChild(this.field21);
        this.field22 = new Field_ball('bg-court2_png');
        this.field22.y = 558;   //  
        this.courtWrap2.addChild(this.field22);

        this.field41 = new Field_ball('bg-court4_png');
        this.field41.y = 120;
        this.courtWrap4.addChild(this.field41);
        this.field42 = new Field_ball('bg-court4_png');
        this.field42.y = 320;   //  
        this.courtWrap4.addChild(this.field42);
        this.field43 = new Field_ball('bg-court4_png');
        this.field43.y = 520;   //
        this.courtWrap4.addChild(this.field43);
        this.field44 = new Field_ball('bg-court4_png');
        this.field44.y = 720;   //  
        this.courtWrap4.addChild(this.field44);

        // this.field2.touchEnabled = true;
        // this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)

    }

        // 放入4个场地
    private addcourtWrap4(){

        if( this.courtWrap2.parent ){
            this.removeChild(this.courtWrap2);
        }
        if( this.courtWrap1.parent ){
            this.removeChild(this.courtWrap1);
        }
        this.addChild(this.courtWrap4);
    }
    // 放入2个场地
    private addcourtWrap2(){
        if( this.courtWrap1.parent ){
            this.removeChild(this.courtWrap1);
        }
        if( this.courtWrap4.parent ){
            this.removeChild(this.courtWrap4);
        }

        this.addChild(this.courtWrap2);
    }
    // 放入1个场地
    private addcourtWrap1(){
        if( this.courtWrap2.parent ){
            this.removeChild(this.courtWrap2);
        }
        if( this.courtWrap4.parent ){
            this.removeChild(this.courtWrap4);
        }
        this.addChild(this.courtWrap1);
    }

    //  初始化 场地 写错  !!!!!
    private initFieldMsg(){
        console.log(' 初始化场地 ')
        let fieldStr = 'field';
        let $store = window['store']
        let matchLen = $store['matches'].length
        console.log( matchLen )
        if( $store['matches'] && matchLen ){
            switch( matchLen ){
                case 1 :
                    if( $store['matches'][0] ){
                        console.log( this.field1 )
                        this.field1.upFieldAllData( $store['matches'][0].homelogo , $store['matches'][0].homename ,  $store['matches'][0].homeodds ,
                        $store['matches'][0].awaylogo , $store['matches'][0].awayname , $store['matches'][0].awayodds )  
                        
                        this.addcourtWrap1()
                    }else{
                        console.error( '场地1数据不对' )
                    }
                break;
                case 2 :
                    if( $store['matches'][0] && $store['matches'][1] ){

                        this.field21.upFieldAllData( $store['matches'][0].homelogo , $store['matches'][0].homename ,  $store['matches'][0].homeodds ,
                            $store['matches'][0].awaylogo , $store['matches'][0].awayname , $store['matches'][0].awayodds )

                        this.field22.upFieldAllData( $store['matches'][1].homelogo , $store['matches'][1].homename ,  $store['matches'][1].homeodds ,
                            $store['matches'][1].awaylogo , $store['matches'][1].awayname , $store['matches'][1].awayodds );

                        this.addcourtWrap2()
                    }else{
                        console.error( '场地1/2数据不对' )
                    }

                break;
                case 4 :
                    if( $store['matches'][0] && $store['matches'][1] && $store['matches'][2] && $store['matches'][3]){
                        this.field41.upFieldAllData( $store['matches'][0].homelogo , $store['matches'][0].homename ,  $store['matches'][0].homeodds ,
                            $store['matches'][0].awaylogo , $store['matches'][0].awayname , $store['matches'][0].awayodds )
                        this.field42.upFieldAllData( $store['matches'][1].homelogo , $store['matches'][1].homename ,  $store['matches'][1].homeodds ,
                            $store['matches'][1].awaylogo , $store['matches'][1].awayname , $store['matches'][1].awayodds )
                        this.field43.upFieldAllData( $store['matches'][2].homelogo , $store['matches'][2].homename ,  $store['matches'][2].homeodds ,
                            $store['matches'][2].awaylogo , $store['matches'][2].awayname , $store['matches'][2].awayodds )
                        this.field44.upFieldAllData( $store['matches'][3].homelogo , $store['matches'][3].homename ,  $store['matches'][3].homeodds ,
                            $store['matches'][3].awaylogo , $store['matches'][3].awayname , $store['matches'][3].awayodds )
                            this.addcourtWrap4()
                    }else{
                        console.error( '场地1/4数据不对' )
                    }
                break;

                default:
                    console.error('场地error')
                ;
            }

            // for( var i=0,len = 1 ;i<len;i++ ){
            //     fieldStr = 'field'+(i+1)
            //     this[fieldStr] = new Field_ball(  $store['matches'][i].homelogo ,
            //         $store['matches'][i].homename ,  $store['matches'][i].homeodds ,
            //         $store['matches'][i].awaylogo , $store['matches'][i].awayname , $store['matches'][i].awayodds
            //     )
            //     this[fieldStr].y = 120+202*i;
            //     this[fieldStr].touchEnabled = true;
            //     this.this_fieldContain.addChild( this[fieldStr] );
            //     this[fieldStr].width = 485;
            //     this[fieldStr].height = 181;



                // setInterval(()=>{
                //     i = i+1
                //     this[fieldStr].upLeftMyMoney('324'+i)
                //     this[fieldStr].upRightMyMoney('31'+i)
                //     this[fieldStr].addLeftAllCoin('1'+i);
                //     this[fieldStr].addRightAllCoin('2'+i);

                // },1000)

                // setTimeout(()=>{
                //     console.log('显示金币的背景')
                //     this.field1.upLeftCoinBg()
                //     this.field1.upRightCoinBg()
                // },5000)

                // setTimeout(()=>{
                //     console.log('显示中奖背景')
                //     this.field1.addwinIcon_l()
                //     this.field1.addwinIcon_r()
                // },6000)

            // }
            // if( this.field1 ){
            //     this.field1.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_oneEvt ,this)
            // }
            // if( this.field2 ){
            //     this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
            // }            
            // if( this.field3 ){
            //     this.field3.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_threeEvt ,this)
            // }
            // if( this.field4 ){
            //     this.field4.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
            // }       
        }
    }

    // 场地点击处理
    private field_oneEvt( e:egret.TouchEvent ){
        console.log(1)
        console.log( e ) 
        //  ajax 下单
        //  执行动画
        let x = e.localX + 133;
        let y = e.localY + 120;
        console.log(x);
        console.log(y);

        if(y>150 && y <260){
            if(150<x && x<350){
                console.log('左边')
                this.tween_Coin(x,y)
            }else if(410<x && x<600){
                console.log('右边')
                this.tween_Coin(x,y)
            }
        }
        
       

    }


    async field_twoEvt( e:egret.TouchEvent ){
        
        //  ajax 下单
        //  执行动画
        // this.tween_Coin(30,40)
        // console.log(e.localX)
        // console.log(e.localY)
        // console.log( e )
        //  ajax 下单  请求
        //  执行动画  
        await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
            // 更新 自己头像 金币   下单之后
            window['store']['userMySelf'].setMyGold('222');
            console.log( res )
            
        })
        this.tween_Coin( e.$stageX ,e.$stageY -150 );
        // console.log(555555)
        // await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
        //     console.log( 123 )
        //     console.log( res )
        // })
        // console.log(777777)
        // this.tween_Coin( e.$stageX ,e.$stageY -150 );

        // console.log(e.stageY)
        // console.log(e.$stageY)
    }
    private field_threeEvt( e:egret.TouchEvent ){

    }
    private field_fourEvt( e:egret.TouchEvent ){

    }

    private tween_Coin( stage_x:Number ,stage_y:Number ){
        /**
         *  创建 金币 并执行动画  (报错对应的对象 ，为收集金币做处理 )
         * 
         *  金币的场次id 比赛id 金币的额度， 金币的来源。。。。。好像很多
         */
            let gold = new Gold();
            gold.anchorOffsetX = gold.width/2;
            gold.anchorOffsetY = gold.height/2;
            gold.x = window['store']['stage_anWidth'];
            gold.y = 1000;
            this.addChild(gold);
            egret.Tween.get( gold ).to( { x:stage_x,y:stage_y },200 )
    }

    private courtWrap(){
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 596;
        wrap.height = 963;
        return wrap;
    }
}
/**
 * 
 */