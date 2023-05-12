function loginpage() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");
    login.style.visibility = 'visible';
    cont.style.filter = 'brightness(50%)';
    sign_login.style.visibility = 'visible';
}

function signup() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");
    var signup_login = document.getElementById('signup_login');
    var sign_login = document.getElementById('sign_login');
    login.style.visibility = 'hidden';
    cont.style.filter = 'brightness(50%)';
    signup.style.visibility = "visible";
    sign_login.style.visibility = 'hidden';
    signup_login.style.visibility = 'visible';
}

function login() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");
    var signup_login = document.getElementById('signup_login');
    var sign_login = document.getElementById('sign_login');
    signup.style.visibility = 'hidden';
    cont.style.filter = 'brightness(50%)';
    login.style.visibility = "visible";
    signup_login.style.visibility = 'hidden';
    sign_login.style.visibility = 'visible';

    console.log('click')
}

if(document.getElementById('exit').clicked == true)
{
   alert("button was clicked");
}

function exit() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");
    var signup_login = document.getElementById('signup_login');
    var sign_login = document.getElementById('sign_login');
    signup.style.visibility = 'hidden';
    cont.style.filter = 'brightness(100%)';
    login.style.visibility = "hidden";
    sign_login.style.visibility = 'hidden';
    signup_login.style.visibility = 'hidden';
}


setInterval(function() {
    var w = window.innerWidth;
    if(w<600) {

        writeapost.innerHTML = "Filter: All";
        share.innerHTML = "share";
        share2.innerHTML = "share";
        share3.innerHTML = "share";
        share4.innerHTML = "share";
        allposts.innerHTML = "Posts(368)";
        signinterms.innerHTML = "By signing up, you agree to our Terms & conditions, Privacy policy";
        welcome.innerHTML = "Welcome back!";
        img.style.visibility = "visible";
        sign_login.innerHTML = "or, Sign In";
        signup_login.innerHTML = 'or, Create Account';

    }
    if(w>600) {
        writeapost.innerHTML = "Write a Post";
        share.innerHTML = "";
        share2.innerHTML = "";
        share3.innerHTML = "";
        share4.innerHTML = "";
        allposts.innerHTML = "All Posts(32)";
        signinterms.innerHTML = "";
        welcome.innerHTML = "Sign In";
        img.style.visibility = "hidden";
    }
  }, 1000);

var circle = document.getElementById('circle');
var img = document.getElementById("img");
var signinterms = document.getElementById('signinterms');
var writeapost = document.getElementById("writeapost");
var share = document.getElementById("share")
var share2 = document.getElementById("share2")
var share3 = document.getElementById("share3")
var share4 = document.getElementById("share4")
var allposts = document.getElementById("allpost");
var welcome = document.getElementById("welcome");


function joingrp() {
    var grp = document.getElementById('joingrp');
    console.log(grp);
    if(w<767) {
        grp.innerHTML = "Leave Group";
    }
}

window.addEventListener('scroll' ,circle);

function circle() {
    circle.style.visibility = 'hidden';
    console.log("Scrolling");
}

var oldscrollY = window.scrollY;
window.onscroll = function(e) {
    circle.style.visibility = 'hidden';
}

const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener(
      'scroll',
      e => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          callback();
        }, 150);
      },
      false
    );
};

onScrollStop(() => {
    if(window.innerWidth<600) {
        circle.style.visibility = 'visible';
    }
});

function joingrp() {
    var cont = document.getElementById("container");
    var login = document.getElementById("loginpage");
    var signup = document.getElementById("signuppage");
    leavgrp.style.visibility = 'visible';
    grp.style.visibility = 'hidden';
    signup.style.visibility = 'hidden';
    cont.style.filter = 'brightness(100%)';
    login.style.visibility = "hidden";
}

var leavgrp = document.getElementById('leavegrp');
var grp = document.getElementById('grp');

function leavegrp() {
    leavgrp.style.visibility = 'hidden';
    grp.style.visibility = 'visible';
    
}

function pagedouble() {
    if(window.innerWidth>600) {
        
    } 
}