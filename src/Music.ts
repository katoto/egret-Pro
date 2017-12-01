// // 声音
// class Music extends egret.DisplayObjectContainer{
//     public constructor(){
//         super();
//         this.music();
//     }
//     private music(){
//         //创建 URLLoader 对象
//         var loader:egret.URLLoader = new egret.URLLoader();
//         //设置加载方式为声音
//         loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
//         //添加加载完成侦听
//         loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
//         //开始加载
//         loader.load(new egret.URLRequest("resource/assets/music/bet.mp3"));

          
//     }
//     private onLoadComplete(event:egret.Event):void {
//         var loader:egret.URLLoader = <egret.URLLoader>event.target;
//         //获取加载到的 Sound 对象
//         var sound:egret.Sound = <egret.Sound>loader.data;
//         this.sound = sound;
//     }
//     private sound:egret.Sound;
//     private soundChannel:egret.SoundChannel;
//     public onTouch(event:egret.Event){
//         var sound = this.sound;
//         var channel:egret.SoundChannel = this.soundChannel;
//         //使用SoundChannel播放音频
//         channel = sound.play(0,1);
//         //Egret 3.0.4 新增获取音频长度 length 属性。
//         //保存soundChannel对象
//         this.soundChannel = channel;
//     }
// }