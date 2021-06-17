var canvas=document.getElementById("myCanvas");
var roverx=10;
var rovery=10;
roverwidth=100;
roverheight=90;
ctx=canvas.getContext("2d");

function add(){
    backgroundImgTag=new Image;
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src="mars.jpg";

    roverImgTag=new Image;
    roverImgTag.onload=uploadRover;
    roverImgTag.src="gbUIAx-TopView.png";
}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImgTag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;

if(keyPressed=='38'){
 up();
}

if(keyPressed=='40'){
    down();
}

if(keyPressed=='37'){
    left();
}

if(keyPressed=='39'){
    right();
}
}

function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("xvalue"+roverx+"yvalue"+rovery);
        uploadRover();
        uploadBackground();
    }
  
}

function down(){
    if(rovery<=500){
        rovery=rovery+10;
        console.log("xvalue"+roverx+"yvalue"+rovery);
        uploadRover();
        uploadBackground();
    }
  
}

function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("xvalue"+roverx+"yvalue"+rovery);
        uploadRover();
        uploadBackground();
    }
  
}

function right(){
    if(roverx<=700){    roverx=roverx+10;
        console.log("xvalue"+roverx+"yvalue"+rovery);
        uploadRover();
        uploadBackground();}
}