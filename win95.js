
function clicksurdemarer(){
var t1;

if (document.querySelector(".lanceur").style.visibility="hidden"){

	do document.querySelector(".lanceur").style.visibility="visible";
}
else if(document.querySelector(".lanceur").style.visibility="visible"){

	do document.querySelector(".lanceur").style.visibility="hidden";
}



}
document.querySelector("#start").addEventListener("click",clicksurdemarer);
