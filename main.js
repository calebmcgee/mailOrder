const form = document.querySelector("form");;
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span")
// const country = document.querySelector("#country");
// const postal = document.querySelector("#postal");
// const password = document.querySelector("#password");
// const passwordConfirm = document.querySelector("#passwordConfirm");

email.addEventListener("input", (event)=>{
    if (!email.validity.valid){
        showEmailError();
        event.preventDefault();
    }
});


const showEmailError = () => {
    if (email.validity.valueMissing){
        emailError.textContent = "Please enter email address."
    } else if (email.validity.typeMismatch){
        emailError.textContent = "Incorrect format. Please enter valid email address."
    }
}