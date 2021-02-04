ReyeX = 0;
ReyeY = 0;
LeyeX = 0;
LeyeY = 0;

function preload(){

 cool = loadImage('https://i.postimg.cc/TPkghZ9n/glasses.png');

}

function setup(){

  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function draw(){

  image(video,0,0,300,300);
  image(cool,ReyeX,ReyeY,LeyeX,LeyeY,20,20)

 

}

function takeSnap(){

 save("YouLookCool.png");

}

function gotPoses(result){

  if(result.length > 0){

     console.log(result);
     ReyeX = result[0].pose.rightEye.x-45;
     ReyeY = result[0].pose.rightEye.y-45;
     LeyeX = result[0].pose.leftEye.x-45;
     LeyeY = result[0].pose.leftEye.y-45;
     

  }

 

}

function modelLoaded(){

 console.log("model has been loaded");

}