document.getElementById('login-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('number-input').value;
    const pinInput = document.getElementById('pin-input').value;
    if (numberInput == 01314099865 && pinInput == 1234) {
        alert('login success');
        window.location.assign('./home.html')
    }
    else {
        alert('login failed');
        return;
    }
})
