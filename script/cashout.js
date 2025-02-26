document.getElementById('cashout-btn')
    .addEventListener('click', function (event) {
        event.preventDefault;
        // const cashoutAmount = parseFloat(document.getElementById('cashout-amount').value);
        const cashoutAmount = getInputValueByID('cashout-amount');

        // const cashoutPingetInputBy = parseInt(document.getElementById('cashout-pin').value);
        const cashoutPin = getInputValueByID('cashout-pin')

        // const agentNumber = document.getElementById('agent-number').value;
        const agentNumber = getInputStringByID('agent-number');

        // const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
        const mainBalance = getInnerTextByID('main-balance')
        if (cashoutPin === 1234) {

             // Amount Validation
             if (cashoutAmount > mainBalance) {
                alert("Invalid Amount");
                return;
            }

            if (agentNumber.length === 11) {
                const Amount = mainBalance - cashoutAmount;
                // document.getElementById('main-balance').innerText = newAmount;
                // setInnerTextByID('main-balance')=newAmount;
                setInnerTextByIDAndValue('main-balance', Amount);

               


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
                            <h1 class="font-bold">Cash Out <span class="text-red-600">$${cashoutAmount}</span></h1>
                            <p>Today 5:11 AM</p>
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
            handleToggle('transaction-history','block');
            handleToggle('cashout', 'none');
            }
            else {
                alert('Number Must Be 11 Digits!');

            }

        }
        else {
            alert('Pin doesnot match!');
        }
    })