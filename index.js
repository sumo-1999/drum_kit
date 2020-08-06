//addEvent listener basic exmplee
//1st method

/*document.querySelector(".drum").addEventListener("click",p);
function p()
{
  alert("hgbfhgf");
}*/

//2nd method

/*document.querySelector(".drum").addEventListener("click",function() {
  alert("hbjvshjf");
});*/

//eventlistener by buttonpress

var length=document.querySelectorAll(".drum").length;
for(var i=0;i<length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var button_text=this.innerHTML;
    makesound(button_text);
    buttonanimation(button_text);

  });
}

//eventlistner using keypress
document.addEventListener("keypress",function(event) {
  makesound(event.key);
  buttonanimation(event.key);
});


function makesound(key)
{
  switch(key)
  {
    case "w":
    var w_sound=new Audio("sounds//tom-1.mp3");
    w_sound.play();
    break;

    case "a":
    var a_sound=new Audio("sounds//tom-2.mp3");
    a_sound.play();
    break;

    case "s":
    var s_sound=new Audio("sounds//tom-3.mp3");
    s_sound.play();
    break;

    case "d":
    var d_sound=new Audio("sounds//tom-4.mp3");
    d_sound.play();
    break;

    case "j":
    var j_sound=new Audio("sounds//snare.mp3");
    j_sound.play();
    break;

    case "k":
    var k_sound=new Audio("sounds//crash.mp3");
    k_sound.play();
    break;

    case "l":
    var l_sound=new Audio("sounds//kick-bass.mp3");
    l_sound.play();
    break;
  }
}


function buttonanimation(currentkey)
{
  var x=document.querySelector("."+currentkey);
  x.classList.add("pressed");
  setTimeout(function(){
    x.classList.remove("pressed")
  },100);
}
