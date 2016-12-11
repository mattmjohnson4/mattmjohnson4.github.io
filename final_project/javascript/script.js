var emailInputField = document.getElementById('email');

emailInputField.addEventListener('blur', checkEmailInput);

var submitButton = document.getElementsByTagName('button')[0].addEventListener('click', submitForm);

// functions for email form submission

function submitForm(){
	showLoadingIcon();
	checkEmailInput();
}

function showLoadingIcon() {
  if (emailInputField.value.length !== 0){
  	document.getElementById('loading').style.display = "block";
	} else {
		checkEmailInput();
	}
}

function checkEmailInput () {

	if(emailInputField.value.length === 0){
		document.getElementById('message').innerText = 'Please enter a valid email address.';
		emailInputField.className = 'error';
		document.getElementById('loading').style.display = "none";
		
	} else {
		document.getElementById('message').innerText = '';

		emailInputField.className = '';
	}

}