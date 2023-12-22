const password = document.getElementById("password");
const confirm_password = document.getElementById("password-confirm");

confirm_password.addEventListener("input", (e) => {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity('Passwords do not match');
    }
});