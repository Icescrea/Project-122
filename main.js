x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content)

 if (Number.isInteger(to_number)){

  document.getElementById("status").innerHTML = "Started drawing apple"
  draw_apple = "set"

 }

 else{

  document.getElementById("status").innerHTML = "Speachhas not ben reconised as a number"

 }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
  canvas = createCanvas(1000,900)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){

  apple = loadImage("apple.png")

}
