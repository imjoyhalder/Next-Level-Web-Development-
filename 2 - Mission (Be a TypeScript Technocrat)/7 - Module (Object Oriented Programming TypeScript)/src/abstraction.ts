
//1. Interface
//2. abstract class

interface MediaPlayer{
    play(): void; 
    pause(): void; 
    stop(): void
}

class MusicPlayer implements MediaPlayer{
    play(): void {
        console.log('Playing musing.............');
    }
    pause(): void {
        console.log('Music paused.....');
    }
    stop(): void {
        console.log('Music stop........');
    }
}

const uniquePlayer = new MusicPlayer()
uniquePlayer.play()