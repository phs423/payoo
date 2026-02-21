document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashOutNumber = document.getElementById('agent-number').value;

    if (cashOutNumber.length != 11) {
        alert('Invalid Agent Number');
        return;
    }

    const cashOutAmount = document.getElementById('amount-input').value;
    if (cashOutAmount < 0) {
        alert('Invalid Amount');
        return;
    }

    const balance = document.getElementById('balance').innerText;

    const newBalance = Number(balance) - Number(cashOutAmount);



    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    const cashOutPin = document.getElementById('cashout-pin').value;

    if (cashOutPin === '1234') {
        alert('Cash out successful');
        document.getElementById('balance').innerText = newBalance;

    }
    else {
        alert('Invalid Pin')
        return;
    }

}) 