const form = document.querySelector("form");;
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span")
const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");
const postal = document.querySelector("#postal");
const postalError = document.querySelector("#postal + span.error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirm = document.querySelector("#passwordConfirm");
const passwordConfirmError = document.querySelector("#passwordConfirm + span.error");
const submitButton = document.querySelector("#submit");
const submitMessage = document.querySelector("#submitMessage");

email.addEventListener("input", (event)=>{
    if (!email.validity.valid){
        showEmailError();
        event.preventDefault();
    } else {
        emailError.textContent = "";
    }
});

country.addEventListener("input", (event)=>{
    if(!country.validity.valid){
        showCountryError();
        event.preventDefault();
    } else {
        countryError.textContent = "";
    }
});

postal.addEventListener("input", (event)=>{
    if(!postal.validity.valid){
        
        showPostalError();
        event.preventDefault();
    } else {
        postalError.textContent = "";
    }
});

password.addEventListener("input", (event)=>{
    if(!password.validity.valid){
        showPasswordError();
        event.preventDefault();
    } else {
        passwordError.textContent = "";
    }
});
passwordConfirm.addEventListener("input", (event)=>{
    if(!passwordConfirm.validity.valid){
        showPasswordConfirmError();
        event.preventDefault();
        
    } else if(password.value != passwordConfirm.value) {
        passwordConfirm.style.backgroundColor = "rgb(255, 123, 123)";
        passwordConfirmError.textContent = "Password does not match";
    } else {
        passwordConfirm.style.backgroundColor = "inherit";
        passwordConfirmError.textContent = "";
    }
});

const showEmailError = () => {
    if (email.validity.valueMissing){
        emailError.textContent = "Please enter email address."
    } else if (email.validity.typeMismatch){
        emailError.textContent = "Incorrect format. Please enter valid email address."
    }
}   
const showCountryError = () =>{
    if (country.validity.valueMissing){
        countryError.textContent = "Enter a country";
    } 
}

const showPostalError = () =>{
    if (postal.validity.valueMissing){
        postalError.textContent = "Enter postal code.";
    } else if (postal.validity.typeMismatch){
        postalError.textContent = "Please enter a number.";
    } else if (postal.validity.rangeUnderflow || postal.validity.rangeOverflow){
        postalError.textContent = "Postal code must be 5 digits.";
    }
} 

const showPasswordError = () =>{
    if (password.validity.valueMissing){
        passwordError.textContent = "Enter password.";
    } else if (password.validity.tooShort){
        passwordError.textContent = "Password must be at least 8 characters.";
    }
} 

const showPasswordConfirmError = (password) =>{
    if (passwordConfirm.validity.valueMissing){
        passwordConfirmError.textContent = "Enter password again.";
    }
}

form.addEventListener("submit", (event)=> {
    if (!email.validity.valid || !country.validity.valid || !postal.validity.valid || !password.validity.valid || !passwordConfirm.validity.valid){
        event.preventDefault();
    } else {
        submitMessage.textContent = "Form Submitted!";
    }
    
});