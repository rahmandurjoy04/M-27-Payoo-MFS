// Getting the Button to do some Action
document.getElementById('transfer-btn')
    .addEventListener('click', function (event) {

        const mainBalance = getInnerTextByID('main-balance');
        const accountNumber = getInputStringByID('transfer-account-number');
        const transferAmount = getInputStringByID('transfer-amount');
        const pin = getInputStringByID('transfer-pin');
        if (accountNumber.length === 11) {
            if (pin === '1234') {
                const newBalance = mainBalance - transferAmount;

                // Balance Calculations and portraying it to main balance
                setInnerTextByIDAndValue('main-balance', newBalance);


                // Creating transaction history
                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="flex justify-between items-center  border rounded-lg p-2 bg-white m-2">
                        <div class="flex gap-4">
                            <div class="w-12 h-12  rounded-full bg-gray-200 flex justify-center items-center ">

                                <img src="assets/wallet 1.png" alt="">
                            </div>
                            <div class="">
                            <h1 class="font-bold">Transfer Money <span class="text-red-600">$${transferAmount}</span></h1>
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

                // As soon as the transection happens We redirect to history tab
                handleToggle('transaction-history', 'block');
                handleToggle('transfer-money', 'none');


            }
            else {
                alert("Pin Doesn't Match!")
            }
        }
        else {
            alert('Account Number Must Be 11 Digit');
        }
        


    })
