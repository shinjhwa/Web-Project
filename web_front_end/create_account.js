function checkPassword() {
    const password = document.getElementById("pswd1").value;
    const alertText = document.getElementById("alertText");
    const alertTextContainer = document.getElementById("alertTextContainer");
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (password.length === 0) {
        alertTextContainer.style.display = "none";
        return;
    }

    alertTextContainer.style.display = "block"; // 컨테이너를 보이게 합니다.
    if (regex.test(password)) {
        alertText.textContent = "사용 가능";
        alertText.className = "alert-success"; // 성공 클래스 추가
    } else {
        alertText.textContent = "사용 불가";
        alertText.className = "alert-danger"; // 실패 클래스 추가
    }
}


function confirmPassword() {
    const password = document.getElementById("pswd1").value;
    const confirmPassword = document.getElementById("pswd2").value;
    const confirmError = document.getElementById("confirmError");

    if (password !== confirmPassword) {
        confirmError.style.display = "inline";
        confirmError.textContent = "비밀번호가 일치하지 않습니다.";
        confirmError.style.color = "red";
    } else {
        confirmError.style.display = "none";
    }
}
