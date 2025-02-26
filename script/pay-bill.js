document.getElementById("pay-bill-btn")
.addEventListener('click',function(event){
    const billerAccount = getInputStringByID("biller-account-number" );
    const pay = getInputValueByID("amount-to-pay" );
    const payBillPin = getInputValueByID("pay-bill-pin" );
    const mainBalance = getInnerTextByID('main-balance');

    // Amount Validation
    if(pay > mainBalance){
        alert("Invalid Amount");
        return;
    }

    if(pay <= 50 ){
        alert('Minimum Cah Out Amount is $50');
        return;
    }


    if(billerAccount.length === 11){
        if(payBillPin ===1234){
            const newBalance =mainBalance-pay;

            // Balance Calculations and portraying it to main balance
            setInnerTextByIDAndValue('main-balance',newBalance);

            // Getting The BAnk Name
            const bank = document.getElementById('all-pay-bank').value;


            // Creating transaction history
            const container = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.innerHTML =`
                    <div class="flex justify-between items-center  border rounded-lg p-2 bg-white m-2">
                        <div class="flex gap-4">
                            <div class="w-12 h-12  rounded-full bg-gray-200 flex justify-center items-center ">

                                <img src="assets/wallet 1.png" alt="">
                            </div>
                            <div class="">
                            <h1 class="font-bold">Pay Bill <span class="text-red-600">$${pay}</span> from  <span class="text-pink-500">${bank}</span></h1>
                            <p>Today 12:44 AM</p>
                            </div>
                        </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>
                    </div>
            `

            // container.appendChild(div)
            container.insertBefore(div, container.firstChild);

            handleToggle('transaction-history','block');
            handleToggle('pay-bill-section', 'none');


        }
        else{
            alert("Invalid Pin");

        }
    }
    else{
        alert("Account number must be 11 digits");
    }
    

})