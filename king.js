var bar = document.querySelector(".bar"),
cross  = document.querySelector(".cross"),
menu = document.querySelector(".menu"),
nav2 = document.getElementById("nav2"),
divider = document.getElementById("divider");

bar.addEventListener("click" , function(){
   bar.classList.toggle(".active");
   if(bar.classList.contains(".active")){
     cross.style.opacity = "1";
     bar.style.opacity = "0";
     menu.style.top = "0";
     nav2.style.top = "75%";
     divider.style.display = "none";
   }
})



var navCr = document.getElementById("navCr");
navCr.onclick = function(){
  cross.style.opacity = "0";
  bar.style.opacity = "1";
  menu.style.top = "-200%";
  nav2.style.top = "-200%";
  divider.style.display = "block";
}
// Navbar Complete Here.........
var must  = document.getElementById("must");
var anao = document.getElementById("anonams")
window.onload = function(){
  must.classList.add("animate__animated");
  must.classList.add("animate__zoomIn");
}
function wao(){
  anao.classList.add("animate__heartBeat");
  must.classList.add("animate__animated");
  must.classList.add("animate__slower");
}
wao();



// footer
// sticky navbar code
var stck = document.getElementById("stck");
var zero  = document.getElementById("zero");
var still = document.getElementById("still");
window.onscroll = function(){
  if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    zero.style.display = "block";
    stck.classList.add("sk");
    stck.classList.add("animate__animated");
    stck.classList.add("animate__bounce");
  }
  else{
    zero.style.display = "none";
    stck.classList.remove("sk");
    stck.classList.remove("animate__animated");
    stck.classList.remove("animate__bounce");

  }
}
zero.onclick = function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop  = 0;
}