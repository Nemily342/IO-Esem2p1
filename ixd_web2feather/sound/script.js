let mySound;

function preload() {
//    soundFormats('mp3', 'ogg');
    mySound = loadSound('assets/britney');
}

function setup() {
    let cnv = createCanvas(100, 100);
    cnv.mousePressed(canvasPressed);
    background(220);
    text('tap here to play', 10, 20);
}

function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }

    mySound.play();
}