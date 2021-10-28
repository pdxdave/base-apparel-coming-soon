
const email = document.querySelector('.input__email');
const form = document.querySelector('#form')
const err_msg = document.querySelector('.error-message');
const btn = document.querySelector('.btn');
const success_msg = document.querySelector('.success-message')

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(email.value === '' || !email.value.match(pattern) ){
        err_msg.classList.add('active')

        setTimeout(() => {
            err_msg.classList.remove('active')
            email.value = '';
        }, 3000);

    } else {
        email.value = '';
        btn.style.backgroundImage = 'none';
        btn.disabled = true;
        email.disabled = true;
        success_msg.classList.add('active');
    }
})