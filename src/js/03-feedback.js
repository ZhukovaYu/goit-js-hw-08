import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

fillInInfo();

refs.textarea.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) { 
    const input = evt.target.value;
    localStorage.setItem(STORAGE_KEY, input);
}

function onFormSubmit(evt) { 
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function fillInInfo() { 
    const savedInfo = localStorage.getItem(STORAGE_KEY);
    if (STORAGE_KEY) {
        console.log(savedInfo);
        refs.textarea.value = savedInfo;
    }
}
 