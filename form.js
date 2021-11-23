var $ = document;

var userNameInput = $.getElementById("userName")
var userPasswordInput = $.getElementById("userPassword")

var userNameError = $.getElementById("userNameError")
var userpasswordError = $.getElementById("userpasswordError")


function userNameValidate() {
    if(userNameInput.value.length < 8) {
        userNameError.innerHTML = "نام کاربری شما باید حداقل دارای 8 کاراکتر باشد"
    } else {
        userNameError.innerHTML = ""
    }
}


function userPasswordValidate() {
    if(userPasswordInput.value.length < 8) {
        userpasswordError.innerHTML = "گذرواژه شما باید حداقل دارای 8 کاراکتر باشد"
    } else {
        userpasswordError.innerHTML = ""
    }
}