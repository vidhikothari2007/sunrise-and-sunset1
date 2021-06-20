const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg= 'sunrise1.png' ;

function preload() {
    getbgImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }


    Engine.update(engine);

    // write code to display time in correct format here
   if(hour>=12){
      fill('white') 
      text('time:'+hour%12+'PM',50,100)
   }
      else if(hour==0){
        text('time:12 AM',50,100)
      }
      else{
        fill('white') 
        text('time:'+hour%12+'AM',50,100)
      }
   }



async function getbgImg(){
    var response= await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    var responseJson=  await response.json();
    console.log(responseJson)
    var dateTime= responseJson.datetime
    var hour= dateTime.slice(11,13)
    if(hour>=04 && hour<=06){
        //debugger;
        bg= 'sunrise1.png'
    }
    else if(hour>=06 && hour<=08){
        //debugger;
        bg = 'sunrise2.png'
    }
    else if(hour>=23 && hour==0){
        //debugger;
        bg = 'sunrise10.png'
    }
    else if(hour==0 && hour<=03){
        //debugger;
        bg = 'sunrise11.png'
    }
    else{
        //debugger;
        bg= 'sunset12.png'
    }
    
    backgroundImg=loadImage(bg)
}    
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


