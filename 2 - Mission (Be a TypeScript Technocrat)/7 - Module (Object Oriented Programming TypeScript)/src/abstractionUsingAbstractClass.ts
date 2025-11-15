// implement using abstract class
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log(`Playing musing.......`);
    }
    pause(): void {
        console.log(`Music pause.....`);
    }
    stop(): void {
        console.log(`Music stop.......`);
    }
}


const uniquePlayer = new MusicPlayer()
uniquePlayer.pause()
uniquePlayer.play()
uniquePlayer.stop()