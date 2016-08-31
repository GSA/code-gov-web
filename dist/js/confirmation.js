
var submitted=false; 

function showConfirmation(){
  var emailField  = document.getElementById('mce-EMAIL');
  var confirmationEl = document.getElementById("confirmation");

  if(emailField.validity && !emailField.validity.valid) {
    confirmationEl.innerHTML='Please enter a valid email.';
  }
  else {
    submitted=true;
    confirmationEl.innerHTML='Thanks for joining the code.gov mailing list, ' + emailField.value + '!';

    emailField.value=' ';
  }
}
        