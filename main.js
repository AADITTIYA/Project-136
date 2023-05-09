object = []
status = "";
input = "";

function preload(){
    console.log("done");  
}

function setup(){
   canvas = createCanvas(480,380);
   canvas.position(615,320);
   video = createCapture(VIDEO);
   video.size(480,380)
   video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modeLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTNG OBJECTS";
   input = document.getElementById("input").value

}
function modeLoaded(){
    console.log("model loadded");
    status = "true";


}

 function draw(){
    image(video,0 ,0 ,480 ,380);
    
 }