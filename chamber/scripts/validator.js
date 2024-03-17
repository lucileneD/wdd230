function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var position = document.getElementById('position').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var organization = document.getElementById('organization').value;
    var membership = document.getElementById('membership').value;

    // Regular expression for validating email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for validating phone number (US format)
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (firstName.trim() == '' || lastName.trim() == '' || position.trim() == '' || email.trim() == '' || phone.trim() == '' || organization.trim() == '' || membership.trim() == '') {
        alert('All fields are required');
        return false;
    } else if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    } else if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (e.g., XXX-XXX-XXXX)');
        return false;
    } else {
        // If all validations pass, the form is submitted
        return true;
    }
}
