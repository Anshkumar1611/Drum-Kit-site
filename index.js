var numberofbuttons=document.querySelectorAll(".drum").length;

for (i=0 ; i<numberofbuttons ; i++){
                        
     //sound on cliking with mouse//

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttoninnerhtml=this.innerHTML;

        makesound(buttoninnerhtml);
        buttonAnimation(buttoninnerhtml);
        
    })
}

     //sound on keyboard key press

    document.addEventListener("keypress",function(event){
       makesound(event.key);
       buttonAnimation(event.key);
})

//fuction for generating sounds

function makesound(key){
    switch ( key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); // buffers automatically when created 
                                                    
             tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
             tom2.play();
             break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
           break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
           break;
        case "j":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
           break;
        case "k":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
           break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
           break;
    
        default: console.log(buttoninnerhtml);
            break;
    } 
}

//funtion for Animation on clicking or pressing of buttons

function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    
    activebutton.classList.add("pressed");

    setTimeout (function(){
        activebutton.classList.remove("pressed");
    },100);
}


// document.querySelectorAll(".drum")[0].
// var audio = new Audio("sounds/tom-1.mp3");
 // audio.play();