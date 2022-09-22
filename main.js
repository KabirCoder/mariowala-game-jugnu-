function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coin= loadSound("coin.wav")
	mario_die= loadSound("mariodie.wav");
	mario_kick= loadSound("kick.wav");
	mario_gameover= loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	posenet=ml5.poseNet(video, modelloaded);
	posenet.on("pose", gotresults);



}
function modelloaded(){
	console.log("Model Loaded");
	
  } 
  function gotresults(results){
	if(results.length>0){
	   nosex=results[0].pose.nose.x;
	  nosey=results[0].pose.nose.y
	  console.log("X axis of nose is"+ nosex+ "And the Y position is"+ nosey)
	   }
  }

function draw() {
	game()
}






