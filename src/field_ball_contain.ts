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
        // 放出舞台是否去除事件绑定提高性能？

        this.courtWrap1 = this.courtWrap();
        this.courtWrap2 = this.courtWrap();
        this.courtWrap4 = this.courtWrap();
        // 三选一插入

        this.field1 = new Field_ball('bg-court1_png');
        this.field1.anchorOffsetY = 187.5;
        this.field1.y = 511;   //   963/2+30
        this.field1.touchEnabled = true;
        this.field1.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_1Evt ,this)
        this.courtWrap1.addChild(this.field1);

        this.field21 = new Field_ball('bg-court2_png');
        this.field21.y = 184;   // (963-250*2)/3+30 
        this.field21.touchEnabled = true;
        this.field21.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_21Evt ,this)
        this.courtWrap2.addChild(this.field21);

        this.field22 = new Field_ball('bg-court2_png');
        this.field22.y = 558;   //  
        this.field22.touchEnabled = true;
        this.field22.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_22Evt ,this)
        this.courtWrap2.addChild(this.field22);

        this.field41 = new Field_ball('bg-court4_png');
        this.field41.y = 120;
        this.field41.touchEnabled = true;
        this.field41.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_41Evt ,this)
        this.courtWrap4.addChild(this.field41);

        this.field42 = new Field_ball('bg-court4_png');
        this.field42.y = 320;   //  
        this.field42.touchEnabled = true;
        this.field42.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_42Evt ,this)
        this.courtWrap4.addChild(this.field42);


        this.field43 = new Field_ball('bg-court4_png');
        this.field43.y = 520;   //
        this.field43.touchEnabled = true;
        this.field43.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_43Evt ,this)
        this.courtWrap4.addChild(this.field43);

        this.field44 = new Field_ball('bg-court4_png');
        this.field44.y = 720;   //  
        this.field44.touchEnabled = true;
        this.field44.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_44Evt ,this)
        this.courtWrap4.addChild(this.field44);


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

    //  初始化 场地 写错 
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
   
        }
    }

    // 场地点击处理 new 
    async field_41Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right
        //  field41  为了方便处理
        // field41:{
        //     coin_left:[],
        //     coin_right:[],
        //     coin_left_local:{ x:null ,y:null },
        //     coin_right_local:{ x:null ,y:null }
        // }

            // this[fieldStr].upLeftMyMoney('324'+i)
            // this[fieldStr].upRightMyMoney('31'+i)

        let x = e.localX + 133;
        let y = e.localY + 120;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>150 && y <260 ){
            console.log( currBtnNumber )
            // 下单
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('222');
            })
            if( !$store['allCoinObj']['field41'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field41':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:154 },
                        coin_right_local:{ x:496 ,y:154 }
                    }
                })
            }
            // 更新自己投注的金额
            if(150<x && x<350){
                console.log('左边')
                this.field41.upLeftMyMoney( currBtnNumber )  // 个人金额 ??
                this.field41.addLeftAllCoin( currBtnNumber ); //  总的金额 ??
                this.tween_Coin(x,y, $store['allCoinObj']['field41'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field41.upRightMyMoney( currBtnNumber )
                this.field41.addRightAllCoin( currBtnNumber ); //  总的金额
                this.tween_Coin(x,y, $store['allCoinObj']['field41'].coin_right )
            }
        }
    }

    async field_42Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right  
        // field42_obj 
        let x = e.localX + 133;
        let y = e.localY + 300;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>330 && y <440 ){
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('222');
            })

            if( !$store['allCoinObj']['field42'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field42':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:354 },
                        coin_right_local:{ x:496 ,y:354 }
                    }
                })
            }
            if(150<x && x<350){
                console.log('左边')
                this.field42.upLeftMyMoney( currBtnNumber )
                this.field42.addLeftAllCoin( currBtnNumber ); //  总的金额 ??
                this.tween_Coin(x,y, $store['allCoinObj']['field42'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field42.upRightMyMoney( currBtnNumber )
                this.field42.addRightAllCoin( currBtnNumber ); //  总的金额 ??
                this.tween_Coin(x,y, $store['allCoinObj']['field42'].coin_right )
            }
        }
    }

    async field_43Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right  
        // field43_obj 
        let x = e.localX + 133;
        let y = e.localY + 500;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>530 && y <640 ){
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('231');
            })

            if( !$store['allCoinObj']['field43'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field43':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:554 },
                        coin_right_local:{ x:496 ,y:554 }
                    }
                })
            }
            if(150<x && x<350){
                console.log('左边')
                this.field43.upLeftMyMoney( currBtnNumber )  // 个人金额 ??
                this.field43.addLeftAllCoin( currBtnNumber ); //  总的金额 ??
                this.tween_Coin(x,y, $store['allCoinObj']['field43'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field43.upRightMyMoney( currBtnNumber )  // 个人金额 ??
                this.field43.addRightAllCoin( currBtnNumber ); //  总的金额 ??
                this.tween_Coin(x,y, $store['allCoinObj']['field43'].coin_right )
            }
        }
    }

    async field_44Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right  
        // field44_obj 
        let x = e.localX + 133;
        let y = e.localY + 700;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>730 && y <840 ){
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('333');
            })

            if( !$store['allCoinObj']['field44'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field44':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:754 },
                        coin_right_local:{ x:496 ,y:754 }
                    }
                })
            }
            if(150<x && x<350){
                console.log('左边')
                this.field44.upLeftMyMoney( currBtnNumber )  // 个人金额 ??
                this.field44.addLeftAllCoin( currBtnNumber ); //  总的金额 ??
                this.tween_Coin(x,y, $store['allCoinObj']['field44'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field44.upRightMyMoney( currBtnNumber )  // 个人金额 ??
                this.field44.addRightAllCoin( currBtnNumber ); //  总的金额 ??                
                this.tween_Coin(x,y, $store['allCoinObj']['field44'].coin_right )
            }
        }
    }


    async field_21Evt( e:egret.TouchEvent ){
        // field21_obj  坐标要调整 
        let x = e.localX + 133;
        let y = e.localY + 700;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>230 && y <440 ){
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('123');
            })

            if( !$store['allCoinObj']['field21'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field21':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:754 },
                        coin_right_local:{ x:496 ,y:754 }
                    }
                })
            }
            if(150<x && x<350){
                console.log('左边')
                this.field21.upLeftMyMoney( currBtnNumber )  // 个人金额 ??
                this.field21.addLeftAllCoin( currBtnNumber ); //  总的金额 ??                
                this.tween_Coin(x,y, $store['allCoinObj']['field21'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field21.upRightMyMoney( currBtnNumber )  // 个人金额 ??
                this.field21.addRightAllCoin( currBtnNumber ); //  总的金额 ??                  
                this.tween_Coin(x,y, $store['allCoinObj']['field21'].coin_right )
            }
        }
    }
    async field_22Evt( e:egret.TouchEvent ){
        let x = e.localX + 133;
        let y = e.localY + 700;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>230 && y <440 ){
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('123');
            })

            if( !$store['allCoinObj']['field22'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field22':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:754 },
                        coin_right_local:{ x:496 ,y:754 }
                    }
                })
            }
            if(150<x && x<350){
                console.log('左边')
                this.field22.upLeftMyMoney( currBtnNumber )  // 个人金额 ??
                this.field22.addLeftAllCoin( currBtnNumber ); //  总的金额 ??                  
                this.tween_Coin(x,y, $store['allCoinObj']['field22'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field22.upRightMyMoney( currBtnNumber )  // 个人金额 ??
                this.field22.addRightAllCoin( currBtnNumber ); //  总的金额 ??                   
                this.tween_Coin(x,y, $store['allCoinObj']['field22'].coin_right )
            }
        }
    }
    async field_1Evt( e:egret.TouchEvent ){
        let x = e.localX + 133;
        let y = e.localY + 700;
        let $store = window['store'];
        let currBtnNumber = $store['curr_btn_coin']
        if( y>230 && y <440 ){
            await window['getJson']( { type:'get' ,url :'http://10.0.1.167:9899/login/guest?deviceid=12315' ,dataType:'json'} ).then(( res )=>{
                // 更新 自己头像 金币   下单之后
                window['store']['userMySelf'].setMyGold('345');
            })

            if( !$store['allCoinObj']['field1'] ){
                window['Object'].assign($store['allCoinObj'] ,{ 'field1':{
                        coin_left:[],
                        coin_right:[],
                        coin_left_local:{ x:214 ,y:754 },
                        coin_right_local:{ x:496 ,y:754 }
                    }
                })
            }
            if(150<x && x<350){
                console.log('左边')
                this.field1.upLeftMyMoney( currBtnNumber )  // 个人金额 ??
                this.field1.addLeftAllCoin( currBtnNumber ); //  总的金额 ??                     
                this.tween_Coin(x,y, $store['allCoinObj']['field1'].coin_left )
            }else if(410<x && x<600){
                console.log('右边')
                this.field1.upRightMyMoney( currBtnNumber )  // 个人金额 ??
                this.field1.addRightAllCoin( currBtnNumber ); //  总的金额 ??                      
                this.tween_Coin(x,y, $store['allCoinObj']['field1'].coin_right )
            }
        }
    }

    /**
     *  收起对应的 金币 ！
     */
    private collectCoin(){
        console.log( '收起金币测试' );
        let $store = window['store'];
        let allCoinKeys = window['Object'].keys( $store['allCoinObj'] );
        let objLen = allCoinKeys.length;
        let $egret_Tween = egret.Tween ;
        console.log(objLen  )
        if( objLen > 0){
            for( let i=0;i<objLen;i++ ){
                if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_left ){
                    for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_left.length ;j<len;j++ ){
                        $egret_Tween.get( $store['allCoinObj'][allCoinKeys[i]].coin_left[j] ).to( { 
                            // x:$store['allCoinObj'][allCoinKeys[i]].coin_left_local.x,
                            // y:$store['allCoinObj'][allCoinKeys[i]].coin_left_local.y 
                            x:15,
                            y:18 

                        }, 200)
                    }
                }
                // call() 动画结束的回调
                if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_right ){
                    for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_right.length ;j<len;j++ ){
                        $egret_Tween.get( $store['allCoinObj'][allCoinKeys[i]].coin_right[j] ).to( { 
                            x:$store['allCoinObj'][allCoinKeys[i]].coin_right_local.x,
                            y:$store['allCoinObj'][allCoinKeys[i]].coin_right_local.y 
                        }, 200 )
                    }
                }
            }
            setTimeout(()=>{
                //  看 金币 定位，先把这段注释掉
                // 显示出总的金额  ,并清除所有金币 改变总的背景
                // for( let i=0;i<objLen;i++ ){
                //     // 清除左边金币
                //     if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_left ){
                //         for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_left.length ;j<len;j++ ){
                //             if( $store['allCoinObj'][allCoinKeys[i]].coin_left[j].parent ){
                //                 this.removeChild( $store['allCoinObj'][allCoinKeys[i]].coin_left[j] )
                //             }
                //         }
                //         // 全局修改left收起背景
                //         this[allCoinKeys[i]].upLeftCoinBg()
                //         $store['allCoinObj'][allCoinKeys[i]].coin_left = [] ; // 回收
                //     }
                //     // 清除右边金币
                //     if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_right ){
                //         for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_right.length ;j<len;j++ ){
                //             if( $store['allCoinObj'][allCoinKeys[i]].coin_right[j].parent ){
                //                 this.removeChild( $store['allCoinObj'][allCoinKeys[i]].coin_right[j] )
                //             }
                //         }
                //         // 全局修改right收起背景
                //         this[allCoinKeys[i]].upRightCoinBg()
                //         $store['allCoinObj'][allCoinKeys[i]].coin_right = [] ; // 回收
                //     }

                // }
            },200)
        }
    }

    private tween_Coin( stage_x:Number ,stage_y:Number ,currArr:any ){
        /**
         *  创建 金币 并执行动画  (报错对应的对象 ，为收集金币做处理 )
         *  currArr 报错金币
         *  金币的场次id 比赛id 金币的额度， 金币的来源。。。。。好像很多
         */
            let gold = new Gold();
            gold.anchorOffsetX = gold.width/2;
            gold.anchorOffsetY = gold.height/2;
            gold.x = window['store']['stage_anWidth'];
            gold.y = 1000;
            currArr.push( gold )
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
