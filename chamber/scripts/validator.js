function validateForm() {
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var position = document.getElementById('position').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var organization = document.getElementById('organization').value.trim();
    var membership = document.getElementById('membership').value.trim();

    // Regular expression for validating email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for validating phone number (US format)
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (firstName === '' || lastName === '' || position === '' || email === '' || phone === '' || organization === '' || membership === '') {
        alert('All fields are required');
        return false;
    } else if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    } else if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number in the format XXX-XXX-XXXX');
        return false;
    } else {
        // Enable the submit button
        document.getElementById('submitBtn').disabled = false;
        return true;
    }
}
