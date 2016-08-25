
var submitted=false; 

function showConfirmation(){
  submitted=true;
  document.getElementById("confirmation").innerHTML='Thanks for joining the code.gov mailing list, '+document.getElementById("mce-EMAIL").value+'!'; 
  
  document.getElementById("mce-EMAIL").value=' ';
}
        