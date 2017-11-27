// 拓展模板
class Music extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.myMusic();
    }
    private myMusic(){
        var sound:egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event:egret.Event) {
            sound.play(0,3);
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event:egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/assets/music.mp3");
        // ----------
        // var loader:egret.URLLoader = new egret.URLLoader();
        // loader.addEventListener(egret.Event.COMPLETE, function loadOver(event:egret.Event) {
        //     var sound:egret.Sound = loader.data;
        //     sound.play(0,3);
        // }, this);
        // loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        // loader.load(new egret.URLRequest("resource/assets/music.mp3"));

        // --------------
        //  var sound:egret.Sound = RES.getRes("music_mp3");
        // sound.play(0,3);
    }
}