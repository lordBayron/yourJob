function redirecting() {
    document.querySelector('#registerButton').onclick=registrationRedirecting();
}

function registrationRedirecting() {
    window.location = "registration.php";
}

