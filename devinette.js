function number (){
var nombre =document.form.input.value;
var tentative = 0;
var solution = Math.floor(Math.random() * 100) + 1;
while((nombre !== solution) && (tentative < 8)){
  if (nombre > solution)
    {
      document.getElementById("1").style.display = "block";
      document.getElementById("3").style.display = "block";
      document.getElementById("4").style.display = "block";
    }
  else (nombre < solution)
  {document.getElementById("2").style.display = "block";
      document.getElementById("3").style.display = "block";
      document.getElementById("4").style.display = "block";}
  tentative++;
  
}
 
if(nombre == solution)
{document.getElementById("1").style.display = "block";
      document.getElementById("2").style.display = "block";
      document.getElementById("4").style.display = "block";}
else
{document.getElementById("1").style.display = "block";
document.getElementById("2").style.display = "block";
document.getElementById("3").style.display = "block";}
}