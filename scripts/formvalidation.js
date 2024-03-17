function validateForm() {
    var password = document.getElementById("pwd1").value;
    var confirm_password = document.getElementById("pwd2").value;
    var email = document.getElementById("email").value;

    // Password validation
    if (password !== confirm_password) {
        document.getElementById("noMatch").classList.add("expanded");
        document.getElementById("pwd1").value = "";
        document.getElementById("pwd2").value = "";
        document.getElementById("pwd1").focus();
        return false;
    } else {
        document.getElementById("noMatch").classList.remove("expanded");
    }

    // Email domain validation
    if (!/^[a-zA-Z0-9._%+-]+@byui\.edu$/.test(email)) {
        document.getElementById("req").classList.add("expanded");
        document.getElementById("email").focus();
        return false;
    } else {
        document.getElementById("req").classList.remove("expanded");
    }

    return true;
}
