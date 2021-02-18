//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/Emooly/feeds/testdata/data';

var data = 0;

function setup() {
    createCanvas(400, 400);
    myButton = createButton('Turn on the heat');
    myButton.mousePressed(press);
    myButton.mouseReleased(off);
}

function draw() {
    //    background(120);
    let col = color(200, 232, 222);
    myButton.style('font-size', '30px');
    myButton.style('background-color', col);
    myButton.position(10, 50);
}

function press() {
    data = 1;
    console.log(data);
    sendData(data);
}

function off() {
    data = 0;
    console.log(data);
    sendData(data);
}

function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "aio_JQor88XbPnJvHQy38kO81BzCFN68"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
