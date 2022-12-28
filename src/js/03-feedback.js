import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const arr = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}

arr.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
    const formData = JSON.stringify({ email: arr.email.ariaValueMax, message: arr.message.value });
    localStorage.setItem(LOCALSTORAGE_KEY, formData);
}

arr.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log(event.target.email.value);
    if (!event.target.email.value  || !event.target.message.value) {
        alert('Заповніть усі поля форми');
        return;        
    }
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

dataFromLocalStorage();

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (data) {
        email.value = data.email;
        message.value = data.message;
    }
}