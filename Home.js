function loginpage() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");

    login.style.visibility = 'visible';
    cont.style.filter = 'brightness(50%)';
}

function signup() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");

    login.style.visibility = 'hidden';
    cont.style.filter = 'brightness(50%)';
    signup.style.visibility = "visible";
}

function login() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");

    signup.style.visibility = 'hidden';
    cont.style.filter = 'brightness(50%)';
    login.style.visibility = "visible";
}

function exit() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");

    signup.style.visibility = 'hidden';
    cont.style.filter = 'brightness(100%)';
    login.style.visibility = "hidden";
}