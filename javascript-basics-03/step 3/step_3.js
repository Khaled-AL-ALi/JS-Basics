function changeColor(id){
if(id=="GreenColor"){document.getElementById("text").classList.add('green');}
else if(id=="RedColor"){document.getElementById("text").classList.add('red');}
else if(id=="BlueColor"){document.getElementById("text").classList.add('blue');}
else {document.getElementById("text").style.backgroundColor="white";}
}
