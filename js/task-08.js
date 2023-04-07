const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
      
    const { elements: { email, password } } = event.currentTarget;
    if(email.value===''||password.value===''){
        alert('Будь ласка, заповніть усі поля форми');
    } else {
        // const formData = new FormData(event.currentTarget);
        // formData.forEach((value, name) => {
        //     console.log(` ${name}: ${value}`);
        // });
        const resultInput={email:email.value, password:password.value}
        console.log(resultInput);
};
    event.currentTarget.reset();

}
