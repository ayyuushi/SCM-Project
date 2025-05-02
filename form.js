const Users = {
    "chitkara":"241099"
};

function validateForm() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var isValid = true;

    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    }

    if (isValid) {
        if (Users[username] && Users[username] === password) {
            alert('Login successful!');
        
            window.location.href = 'projectindex.html'; 
        } else {
            alert('Invalid username or password.');
        }
    }

    return false; 
}