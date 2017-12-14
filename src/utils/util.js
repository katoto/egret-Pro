
// class AssetAdapter implements eui.IAssetAdapter{
//     /**
//      *  解析素材
//      * @param source 待解析的新素材
//      * @param compFunc 解析完成回调函数
//      * @param thisObject callback 的this 引用
//      * 
//      */
//     public getAsset( source:string, compFunc:Function,thisObject:any ):void{
//         function onGetRes( data:any ):void{
//             compFunc.call( thisObject ,data,source )
//         }
//         if(RES.hasRes( source )){
//             let data = RES.getRes( source );
//             if( data ){
//                 onGetRes( data );
//             }else{
//                 RES.getResAsync( source ,onGetRes ,this );
//             }
//         }else{
//             RES.getResByUrl( source,onGetRes,this,RES.ResourceItem.TYPE_IMAGE );
//         }
//     }
// }

// class ThemeAdapter implements eui.IThemeAdapter{
//     /**
//      *  解析主题
//      *  @param url 待解析的主题url
//      *  @param compFunc 解析完成回调函数， eg compFunc( e:egret.Event ):void;
//      *  @param errorFunc 解析失败回调函数 ， eg errorFunc()：void;
//      *  @param thisObject 回调的this 引用
//      */
//     public getTheme( url:string, compFunc:Function,errorFunc:Function ,thisObject:any):void{
//         function onGetRes(e:string):void{
//             compFunc.call(thisObject,e);
//         }
//         function onError(e:RES.ResourceEvent):void{
//             if(e.resItem.url == url){
//                 RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,onError,null);
//                 errorFunc.call(thisObject);
//             }
//         }
//         RES.addEventListener( RES.ResourceEvent.ITEM_LOAD_ERROR,onError,null );
//         RES.getResByUrl( url ,onGetRes ,this,RES.ResourceItem.TYPE_TEXT );
//     }
// }

/**
 *  数组转对象
 *  @param  arr  key
 */
function convertArrToObj(arr, key) {
    let result = {};
    arr.forEach(item => {
        result[item[key]] = item;
    });
    return result;
}

/**
 *  用户信息的提取 
 *  @param 
 */
var urlData = (function () {
    var obj = {},
        deseg = window.location.search,
        seg = deseg.replace(/^\?/, '').split('&'),
        len = seg.length, i = 0, s;
    for (; i < len; i++) {
        if (!seg[i]) {
            continue;
        }
        s = seg[i].split('=');
        obj[s[0]] = s[1];
    }
    return obj;
})();

/**
 *  平台 ios  or android
 */
var platform = (function(){
    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = /android/.test(ua);  
    let platform = 'android';
    if(isAndroid){
        platform = 'android';
    }else{
        platform = 'ios';
    }
    return platform
})()

/**
 *  洗牌算法，取8个随机数组
 *  @param len 随机数组长度
 */
function randomArray( len ){
    let i,index,temp,arr = [len];
    len = typeof( len ) === 'string' ? 8 :len;
    for(i=1;i<=len;i++ ){
        arr[i-1] = i;
    }
    for( i = 1; i<=len ; i++ ){
        index = parseInt( Math.random() * ( len - i ))+i;
        if( index != i ){
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}
/**
 *  金币处理
 *  @param money
 */
function formateGold(num) {
    num = Number(num)
    if( num === null || isNaN(num) ){
        console.log( num )
        console.error( 'formateGold error' )
    }
    if (num < 10000) {
        return num
    } else if (num < 100000000) {
        return Math.round(num / 10000 * 10) / 10 + '万'
    } else {
        return Math.round(num / 100000000 * 10) / 10 + '亿'
    }
}

/**
 *  用户名处理
 *  @param name
 */
function formateName(name) {
    if( typeof name === 'string' ){
        if( name.length >= 5 ){
            return name.slice(0,5)+'...'
        }
        return name
    }
}

/**
 *   数据序列化
 */
function convertToQueryString( obj ){
    let result = []
    if (Object.keys(obj).length <= 0) {
        return false
    }
    Object.keys(obj).forEach(key => {
        result.push(`${key}=${obj[key]}`)
    })
    return result.join('&')
}

/**
 *   原生ajax 和 promise 
 * conf {
 *      type
 *      url
 *       dataType
 * }
 *  @param type  get or post
 * @param url
 * @param dataType text xml json 
 */

function getJson( conf ){
    return new Promise ( function ( resolve ,reject ){
        var type = conf.type;
        var url = conf.url;
        var dataType = conf.dataType;
        // XMLHttpRequest 可以兼容处理
        var xhr = new XMLHttpRequest();
        xhr.open( type ,url ,true );
        if (type == null) {
            type = "get";
        }
        if (dataType == null) {
            dataType = "text";
        }

        if (type == "GET" || type == "get") {
            xhr.send(null);
        } else if (type == "POST" || type == "post") {
            xhr.setRequestHeader("content-type",
                "application/x-www-form-urlencoded");
            xhr.send(data);
        }
        xhr.onreadystatechange = function(){
            if(  xhr.readyState == 4 ){
                if( xhr.status == 200 ){
                    try{
                        if( dataType == 'text' || dataType == 'TEXT' ){
                            resolve( xhr.responseText )
                        }
                        if( dataType == 'xml' || dataType == 'XML' ){
                            resolve( xhr.responseXML )
                        }
                        if( dataType == 'json' || dataType == 'JSON' ){
                            resolve( eval( "(" + xhr.responseText + ")" ) )
                        }
                    } catch(e){
                        reject(e)
                    }
                }else{
                    reject( new Error( xhr.statusText ) );
                }
            }
        }
    } )
}

