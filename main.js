let theForm=document.getElementById("register");
let theUSer=document.getElementById("user");
let theEmail=document.getElementById("mail");
let thePassword=document.getElementById("pass");
let theConfrimationPassword=document.getElementById("confirm");

theForm.addEventListener('submit', function (e) {
    e.preventDefault();
    checkUserName();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
});

let checkUserName=function () {
    // Get The Username value without spaces
    let userNameValue=theUSer.value.trim();
    let regUsername=/^[a-zA-Z]{3,15}$/;
    if(userNameValue=="") {
        setErrorFor(theUSer, "Username Can't Be Empty");
    } else if(!regUsername.test(userNameValue)) {
        setErrorFor(theUSer, "Username Must Be Contains Characters In Range 3-15!");
    }
    else {
        setSuccessFor(theUSer);
        window.localStorage.setItem("theUSer", userNameValue);
    }
};


let checkEmail=function () {
    // Get The Username value without spaces
    let EmailValue=theEmail.value.trim();
    let regEmail=/^[a-zA-z0-9_'%=+!`#~$*?^{}&|-]+@[a-zA-Z]+\.[a-zA-Z]{2,8}$/;
    if(EmailValue=="") {
        setErrorFor(theEmail, "Email Can't Be Empty");
    } else if(!regEmail.test(EmailValue)) {
        setErrorFor(theEmail, "Email Not valid!");
    }
    else {
        setSuccessFor(theEmail);
        window.localStorage.setItem("theEmail", EmailValue);
    }
};

let checkPassword=function () {
    // Get The Username value without spaces
    let PasswordValue=thePassword.value.trim();
    let regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    if(PasswordValue=="") {
        setErrorFor(thePassword, "Please Enter Password");
    } else if(!regPass.test(PasswordValue)) {
        setErrorFor(thePassword, "password must be eight characters or longer , Must Conatains At least on special chars and lower and uppercase chars and numbers!");
    }
    else {
        setSuccessFor(thePassword);
        window.localStorage.setItem("thePassword", PasswordValue);
    }
};

let checkConfirmPassword=function () {
    // Get The Username value without spaces
    let PasswordConfirmValue=theConfrimationPassword.value.trim();
    let PasswordValue=thePassword.value.trim();
    if(PasswordConfirmValue=="") {
        setErrorFor(theConfrimationPassword, "Please Enter Password");
    } else if(PasswordConfirmValue!==PasswordValue) {
        setErrorFor(theConfrimationPassword, 'Confirm password does not match');
    }
    else {
        setSuccessFor(theConfrimationPassword);
        window.localStorage.setItem("theConfrimationPassword", PasswordConfirmValue);
    }
};
let setErrorFor=function (input, message) {
    // Get Parent Element Of Input and Span
    let controlField=input.parentElement;
    let theError=controlField.querySelector("span");
    // Add Message To Span
    theError.innerHTML=message;
    // Add Error Class
    controlField.classList.add("error");
    // Remove Succsee Class
    controlField.classList.remove("success");
};


let setSuccessFor=function (input) {
    let controlField=input.parentElement;
    let theError=controlField.querySelector("span");
    theError.innerHTML="";
    // Add Success Class
    controlField.classList.add("success");
    // Remove Error Class
    controlField.classList.remove("error");
};

