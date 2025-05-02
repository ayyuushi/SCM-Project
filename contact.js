function validateAndSubmitForm(event) {
    event.preventDefault(); 

    document.getElementById('nameError')?.textContent = '';
    document.getElementById('emailError')?.textContent = '';
    document.getElementById('phoneError')?.textContent = '';
    document.getElementById('messageError')?.textContent = '';

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone is required.';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for contacting us, we will get back to you soon.');
        window.location.href = 'contact.html'; 
    } else {
        alert('Please fill all the fields correctly.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateAndSubmitForm);
});
