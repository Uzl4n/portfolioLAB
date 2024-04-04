firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.location.href = "indexbr.html";
    }
})

function onChangeEmail(){
    const email = form.email().value;
    form.emailError().style.display = email ? "none" : "block";

    form.emailInvalid().style.display = validateEmail(email) ? "none" : "block";

    toggleRegisterButtonDisable()
}

function onChangePassword(){

    const password = form.password().value;

    form.passwordError().style.display = password ? "none" : "block";

    form.passwordErrorMinLength().style.display = password.length >= 6 ? "none" : "block";

    toggleRegisterButtonDisable();
    validatePasswordsMatch();

    

}

function onChangeConfirmPassword(){

    validatePasswordsMatch();
    toggleRegisterButtonDisable();
    
}

function register(){
    showLoading();

    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(() =>{
        hideLoading();
        window.location.href = "indexbr.html";
        }).catch(error  => {
            hideLoading();
           alert(getErrorMessage(error));
        });
}


function getErrorMessage(error){
    if(error.code == "auth/email-already-in-use"){
        return "Email ja está em uso!";
    }
    return error.message;
}

function validatePasswordsMatch(){

    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.passwordErrorDoesntMatch().style.display = password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable(){
    form.registerButton().disabled = !isFormValid();
}

function isFormValid(){
    const email = form.email().value;

        if(!email || !validateEmail(email)){
            return false;
        }

    const password = form.password().value;

        if(!password || password.length < 6){
            return false;
        }
    const confirmPassword = form.confirmPassword().value;

        if(password != confirmPassword){
            return false;
        }

        return true;
}

const form = {
    confirmPassword:                  () =>document.getElementById('confirmPassword'),
    email:                            () => document.getElementById('email'),
    emailError:                       () =>  document.getElementById('emailError'),
    emailInvalid:                     () => document.getElementById('emailInvalid'),
    password:                         () => document.getElementById('password'),
    passwordError:                    () => document.getElementById('passwordError'),
    passwordErrorMinLength:           () => document.getElementById('passwordErrorMinLength'),
    passwordErrorDoesntMatch:         () => document.getElementById('passwordErrorDoesntMatch'),
    registerButton:                   () => document.getElementById('registerButton')
}