class Field_ball_contain extends egret.DisplayObjectContainer{
    private this_fieldContain;
    // 比赛对阵
    private field1;
    private field2;
    private field3;
    private field4;

    public constructor(){
        super();
        this.drawField();
    }
    private drawField(){
        console.log(1234);
        this.this_fieldContain = this;
        // this.field2 = new Field_ball('http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png','克罗地亚',3.78,'team-02_jpg','德国',1.26 );
        // this.field2.y = 360;
        // this.addChild(this.field2);
        // this.field2.touchEnabled = true;
        // this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)

    }

    //  初始化 场地  （ 每次切换场地，都认为是初始化  ( 感觉应该做 ) ）
    private initField(){
        console.log(' 初始化场地 ')
        var fieldStr = 'field';
        var $store = window['store']
        if( $store['matches'] ){
            for( var i=0,len = 1 ;i<len;i++ ){
                fieldStr = 'field'+(i+1)
                this[fieldStr] = new Field_ball(  $store['matches'][i].homelogo ,
                    $store['matches'][i].homename ,  $store['matches'][i].homeodds ,
                    $store['matches'][i].awaylogo , $store['matches'][i].awayname , $store['matches'][i].awayodds
                )

                this[fieldStr].y = 120+202*i;
                this[fieldStr].touchEnabled = true;
                this.this_fieldContain.addChild( this[fieldStr] );
                this[fieldStr].width = 485;
                this[fieldStr].height = 181;

                setInterval(()=>{
                    i = i+1
                    this[fieldStr].upLeftMyMoney('324'+i)
                    this[fieldStr].upRightMyMoney('31'+i)

                    this[fieldStr].addLeftAllCoin('1'+i);
                    this[fieldStr].addRightAllCoin('2'+i);

                },1000)

                setTimeout(()=>{
                    console.log('显示金币的背景')
                    this.field1.upLeftCoinBg()
                    this.field1.upRightCoinBg()
                },5000)

                setTimeout(()=>{
                    console.log('显示中奖背景')
                    this.field1.addwinIcon_l()
                    this.field1.addwinIcon_r()
                },6000)

            }
            if( this.field1 ){
                this.field1.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_oneEvt ,this)
            }
            if( this.field2 ){
                this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
            }            
            if( this.field3 ){
                this.field3.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_threeEvt ,this)
            }
            if( this.field4 ){
                this.field4.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
            }       
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
    // private awaitTime(){
    //     return new Promise( function( resolve ){
    //         setTimeout( function(){
    //             console.log( 56666)
    //             resolve( true )
    //         } ,1000 )
    //     } )
    // }

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
            egret.Tween.get( gold ).to( { x:stage_x,y:stage_y },500 )
    }

}
/**
 * 
 */