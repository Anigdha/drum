var no_of_drum_buttons=document.querySelectorAll(".drum").length;
var i;

// for(i=0;i<no_of_drum_buttons;i++)
// {
//     // document.querySelector("button").addEventListener("click",handleClick);
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }

// function handleClick()
// {
//     //alert("I Am Clicked!");
//     var audio=new Audio("C:/Users/Vasu Bansal.000/Desktop/drum kit/sounds/tom-1.mp3");
//     audio.play();
// }

// this can also be written as
// for(i=0;i<no_of_drum_buttons;i++)
// {
//     // document.querySelector("button").addEventListener("click",handleClick);
//     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//         //alert("I Am Clicked!"); 
           //var audio=new Audio("C:/Users/Vasu Bansal.000/Desktop/drum kit/sounds/tom-1.mp3");
           //audio.play(); 
//     } )
// }



//detecting button press
for(i=0;i<no_of_drum_buttons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() 
    {
        var buttonInnerHTML=this.innerHTML;
        
        makeSound(buttonInnerHTML);

    } )
}


//detecting keyboard press
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
})


function makeSound(key)
{
    switch(key)
        {
            case "w" : 
                var tom1=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/tom-1.mp3");
                tom1.play(); 
                break;
            case "a":
                var tom2=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/tom-2.mp3");
                tom2.play(); 
                break;
            case "s":
                var tom3=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/tom-3.mp3");
                tom3.play(); 
                break;
            case "d":
                var tom4=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/tom-4.mp3");
                tom4.play(); 
                break;
            case "j":
                var crash=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/crash.mp3");
                crash.play(); 
                break;
            case "k":
                var snare=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/snare.mp3");
                snare.play(); 
                break;
            case "l":
                var kick=new Audio("C:/Users/anigd/Desktop/drum kit/sounds/kick-bass.mp3");
                kick.play(); 
                break;
            default: console.log(key);
        }
}