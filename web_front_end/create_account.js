function checkPassword() {
    const password = document.getElementById("pswd1").ariaValueMax;
    const alertText = document.getElementById("alertText");
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z/d]{8,20}$/;
    if (regex.test(password)) {
        alertText.style.display = "none";
    } else {
        alertText.style.display = "inline";
        alertText.textContent = "사용불가";
    }
}

function confirmPassword() {
    const password = document.getElementById("pswd1").ariaValueMax;
    const confirmPassword = document.getElementById("pswd2").ariaValueMax;
    const comfirmError = document.getElementById("confirmError");

    if (password !== confirmPassword) {
        confirmError.style.display = "inline";
    } else {
        confirmError.style.display = "none";
    }
}