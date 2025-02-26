document.getElementById('transaction-box')
.addEventListener('click',function(event){
    handleToggle('transaction-history','block');
    handleToggle('addmoney','none');
    handleToggle('cashout','none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('transfer-money', 'none');
    handleToggle('pay-bill-section', 'none');


})