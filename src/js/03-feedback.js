import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', evt => {

    console.log(evt.target.name);
    console.log(evt.target.value);

});
