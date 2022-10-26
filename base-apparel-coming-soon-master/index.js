console.log("Hola puto el que lea....");
const input = document.querySelector('#email');
const button = document.querySelector('#btnEmail');
const iconError = document.querySelector('#error-icon');
const emailCorrect = document.querySelector('#correct_email');
const errorEmail = document.querySelector('#error_email');

button.addEventListener("click", emailValid);

function emailValid(email) {
    //Esto evita que el evento de enviarse no reinicie la pagina.
    email.preventDefault();

    const inputValue = input.value.trim();
    const emailValidator = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const isValid = emailValidator.test(inputValue);
    if(isValid == true){
        console.log("Listo..")
        emailCorrect.classList.remove('inactive');
        iconError.classList.add('inactive');
        errorEmail.classList.add('inactive');
    }else{
        console.log("No es valido..");
        emailCorrect.classList.add('inactive');
        iconError.classList.remove('inactive');
        errorEmail.classList.remove('inactive');
    }
    return;
}