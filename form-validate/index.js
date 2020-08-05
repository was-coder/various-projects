const form = document.getElementById("form");
const user = document.getElementById("user");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    getInputs();
});

function getInputs() {
    const userValue = user.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();
    const emailValue = email.value.trim();

    if (userValue === "") {
        setFail(user, "Username cannot be blank");
    }
    else {
        setSuccess(user, "Username Accepted");
    }


    if (pass1Value === "") {
        setFail(pass1, "Password cannot be blank");
    }
    else {
        setSuccess(pass1);
    }

    if (pass2Value === "") {
        setFail(pass2, "Password Check cannot be blank");
    }
    else {
        setSuccess(pass2);
    }

    if (emailValue === "") {
        setFail(email, "Email cannot be blank");
    }
    else if (!emailCheck(emailValue)) {
        setFail(email, "Email is not valid");
    }
    else {
        setSuccess(email);
    }
}

function setFail(input, message) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = message;
    control.className = "control fail";
}

function setSuccess(input) {
    const control = input.parentElement;
    control.className = "control success";
}

function emailCheck(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}