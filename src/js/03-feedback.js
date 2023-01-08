import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

initForm();

const onFormItemChange =  evt => {
    let persistedForm = localStorage.getItem('feedback-form-state');
    persistedForm = persistedForm ? JSON.parse(persistedForm) : {};
    persistedForm[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(persistedForm));
};

function initForm() {
    let persistedForm = localStorage.getItem('feedback-form-state')
    if(persistedForm) {
        persistedForm = JSON.parse(persistedForm);
        Object.entries(persistedForm).forEach(([name,value]) => {  
        feedbackForm.elements[name].value = value;
        });
    }
}; 

const onFormSubmit = event => {
    event.preventDefault();
    console.log();
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
}

feedbackForm.addEventListener('input', throttle(onFormItemChange, 500));
feedbackForm.addEventListener('submit',onFormSubmit);
