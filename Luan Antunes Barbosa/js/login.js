function onChangedLogin(){

    toggleButtonsDisable();
    toggleEmailErros();
}

function onChangedPassword(){

    toggleButtonsDisable();
    togglePasswordErros();
}

function login(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response =>{
        hideLoading();
        window.location.href = "indexbr.html";
        }).catch(error  => {
            hideLoading();
           alert(getErrorMessage(error));
        });
}



function getErrorMessage(error){
        if(error.code == "auth/too-many-requests"){
            return "Usuáro não encontrado";
        }

        if(error.code =="auth/wrong-password"){
            return "Senha inválida";
        }

        return error.message;
}


function register(){
    
    window.location.href = "register.html";
}

function recoverPassword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then( () => {
         hideLoading();
         alert('Email enviado com sucesso');
    }).catch(error => {
         hideLoading();
         alert(getErrorMessage(error));
    });
}


function isEmailValid(){

    const email = form.email().value;
    if(!email){
        return false;
    }
    
    return validateEmail(email);
}

function toggleEmailErros(){
    const email = form.email().value;
    
    form.emailError().style.display= email ? "none" : "block";

    form.emailInvalid().style.display= validateEmail(email) ? "none" : "block";
}

function togglePasswordErros(){
    const password = form.password().value;

    form.passwordError().style.display= password ? "none" : "block";
}

function toggleButtonsDisable(){
    
    const emailValid = isEmailValid();
    form.passwordRecover().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid(){
    const password = form.password().value;

    if(!password){
        return false;
    }

    return true;
}

const form = {
    email          : () => document.getElementById('email'),
    password       : () => document.getElementById('password'),
    emailError     : () => document.getElementById('emailError'),
    emailInvalid   : () => document.getElementById('emailInvalid'),
    loginButton    : () => document.getElementById('loginButton'),
    passwordError  : () => document.getElementById('passwordError'),
    passwordRecover: () => document.getElementById('passwordRecover')  
}