document.getElementById("get-bonus-box")
    .addEventListener('click', function (event) {
        handleToggle('get-bonus-section', 'block');
        handleToggle('transfer-money', 'none');
        handleToggle('transaction-history', 'none');
        handleToggle('cashout', 'none');
        handleToggle('addmoney', 'none');
        handleToggle('pay-bill-section', 'none');


    })