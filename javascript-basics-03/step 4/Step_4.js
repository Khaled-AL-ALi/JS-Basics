function checkPass(){
let pass1=document.getElementById("password").value;
let pass2=document.getElementById("confirmation").value;
if(pass1 !== pass2){
    document.getElementById("password").style.border=" 2px solid red";
    document.getElementById("confirmation").style.border=" 2px solid red";
}
else{alert("true")}
}