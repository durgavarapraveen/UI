function myfun() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    var y = document.getElementById('google-font');
    if(x.type === 'password') {
        y.textContent = 'visibility_off';
    }
    else {
        y.textContent = 'visibility';
    }
}

const input = document.getElementById('email');
const label = document.querySelector('label[for="email"]');

const input1 = document.getElementById('password');
const label1 = document.querySelector('label[for="password"]');

input.addEventListener('input', () => {
  if (input.value) {
    label.classList.add('active');
  } else {
    label.classList.remove('active');
  }
});


// input.addEventListener('focus', () => {
//     label.classList.add('active');
// });
  
// input.addEventListener('blur', () => {
//     label.classList.remove('active');
// });

input1.addEventListener('input', () => {
    if (input.value) {
      label1.classList.add('active');
    } else {
      label1.classList.remove('active');
    }
});
  
  
// input1.addEventListener('focus', () => {
//       label1.classList.add('active');
// });
    
// input1.addEventListener('blur', () => {
//       label1.classList.remove('active');
// });