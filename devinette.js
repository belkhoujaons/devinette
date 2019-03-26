
function number () {
    var x = document.getElementById("num").value;
var i=0 ;
var random = Math.random() * 101;
do {
if (random==x) 
{ (alerte="YES ! you made it Boss!") && (i=8)   ;}
 else if (random<x)
 {(alerte="you're close! just a little lower") && (i++) ; }
  else if(random>x)
 {(alerte="you're close! just a little higher") && (i++) ;} }
 while ((i!=8)) ;

 
 

}
