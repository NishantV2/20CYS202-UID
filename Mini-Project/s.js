

const name = document.getElementById('name');
const mail = document.getElementById('mail');

function checkInputs() {
// trim to remove the whitespaces
const nameValue = name.value.trim();
const mailValue = mail.value.trim();
if (nameValue === '') {
    setErrorFor(name, 'Please enter your name');
} else {
    setSuccessFor(name);
}

if (mailValue === '') {
    setErrorFor(mail, 'Please enter your email');
} else if (!isEmail(mailValue)) {
    setErrorFor(mail, 'Email not valid');
} else {
    setSuccessFor(mail);
}
function isEmail(mail) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}
}


