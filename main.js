function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,180);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    rect(30, 20, 580, 440, 20);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
}

function take_snapshot(){
    save('fun.png');
}