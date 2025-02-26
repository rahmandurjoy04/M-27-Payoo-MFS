// document.getElementById('cashout').style.display ='none';
handleToggle('addmoney', 'none');
handleToggle('cashout', 'none');
handleToggle('transfer-money', 'none');
handleToggle('get-bonus-section', 'none');
handleToggle('pay-bill-section', 'none');

handleToggle('transaction-history', 'block');



// Add Money Part View
document.getElementById("add-money-box")
    .addEventListener('click', function () {
        // document.getElementById('cashout').style.display ='none';
        // document.getElementById('addmoney').style.display ='block';
        handleToggle('addmoney', 'block');
        handleToggle('transaction-history', 'none');
        handleToggle('cashout', 'none');
        handleToggle('transfer-money', 'none');
        handleToggle('pay-bill-section', 'none');



    })

// Cash Out part View
document.getElementById("cash-out-box")
    .addEventListener('click', function () {
        // document.getElementById('addmoney').style.display ='none';
        handleToggle('addmoney', 'none');

        // document.getElementById('cashout').style.display ='block';
        handleToggle('cashout', 'block');

        handleToggle('transaction-history', 'none');
        handleToggle('transfer-money', 'none');
        handleToggle('pay-bill-section', 'none');



    })
// Transfer Money Part View
document.getElementById('transfer-money-box')
    .addEventListener('click', function () {
        handleToggle('transfer-money', 'block');
        handleToggle('transaction-history', 'none');
        handleToggle('cashout', 'none');
        handleToggle('pay-bill-section', 'none');


    })
// Pay Bill Part View
document.getElementById('pay-bill-box')
    .addEventListener('click', function () {
        handleToggle('pay-bill-section', 'block');
        handleToggle('transfer-money', 'none');
        handleToggle('transaction-history', 'none');
        handleToggle('cashout', 'none');
        handleToggle('get-bonus-section', 'none');

    })



function handleToggle(id, status) {
    document.getElementById(id).style.display = status;

}
