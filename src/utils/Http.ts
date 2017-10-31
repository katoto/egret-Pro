// class Http{
//     //  request
//     private request:egret.HttpRequest;
//     // 请求地址
//     private serverUrl:string;
//     // 请求格式 post or  get
//     private httpMethod:string = egret.HttpMethod.POST;
//     //  发送缓存
//     private cacheList = [];
//     // 当前发送内容
//     private curSend;
//     //  请求状态
//     private requesting:boolean = false;
//
//     public constructor(){
//         // super();
//         this.request = new egret.HttpRequest();
//         this.request.responseType = egret.HttpResponseType.TEXT;
//         this.request.addEventListener( egret.Event.COMPLETE ,this.onPostComplete ,this );
//         this.request.addEventListener( egret.IOErrorEvent.IO_ERROR ,this.onPostIOError,this );
//     }
//
//     /**
// 	 * 初始化http访问地址
// 	 * @serverUrl 访问地址
// 	 */
//     public initServerUrl( serverUrl:string ){
//         this.serverUrl = serverUrl;
//     }
//
//     /**
//      * 发送       ??
//      *  @msg 消息字符串 一般为json
//      *  @callback 回调函数
//      *  @thisObject 回调执行对象
//      */
//     public send( msg ,callBack:Function,thisObject:any ){
//         this.cacheList.push([JSON.stringify(msg), callBack, thisObject]);
// 		this.next();
//     }
//
// 	/**发送下一条*/
// 	private next(){
// 		if(this.requesting){
// 			return;
// 		}
// 		if(this.cacheList.length == 0){
// 			return;
// 		}
// 		this.curSend = this.cacheList.shift();
// 		this.request.open(this.serverUrl ,this.httpMethod);
//         this.request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//         //this.request.setRequestHeader("Content-Type","application/json");
//         //this.request.setRequestHeader("Content-Type","multipart/form-data");
// 		this.request.send(this.curSend[0]);
// 		this.requesting = true;
// 	}
//
//
// 	/**发送完成*/
// 	private onPostComplete(e:egret.Event):void{
// 		if(this.curSend){
// 			this.curSend[1].call(this.curSend[2], this.request.response);
// 		}
//
// 		this.requesting = false;
// 		this.next();
// 	}
//
// 	/**发送失败*/
// 	private onPostIOError(e:egret.IOErrorEvent):void{
// 		 egret.log("Http send error");
//     	 this.requesting = false;
// 		 this.next();
// 	}
//
// 	/**删除所有请求*/
// 	public clearAllRequest(){
// 		this.request.abort();
// 		this.curSend = null;
// 		this.cacheList.length = 0;
// 	}
// }