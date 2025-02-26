document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        // const amount = document.getElementById('amount').value;
        // const convertedAmount = parseFloat(amount);
        const Amount = getInputValueByID('amount');


        // const mainBalance = document.getElementById('main-balance').innerText;
        // const convertedMainBalance = parseFloat(mainBalance);
        const MainBalance = getInnerTextByID('main-balance');



        // const pin = document.getElementById('pin').value;
        const pin = getInputValueByID('pin');

        // const account = document.getElementById('Account-number').value;
        const account = getInputStringByID('Account-number');

        const selectedBank = document.getElementById("all-bank").value;

        // Amount Validation
        if (Amount > MainBalance) {
            alert("Invalid Amount");
            return;
        }

        if (Amount <= 50) {
            alert('Minimum Cah Out Amount is $50');
            return;
        }

        if (account.length === 11) {
            // Pin Check
            if (pin === 1234) {
                const sum = MainBalance + Amount;

                // document.getElementById('main-balance').innerText = sum;
                setInnerTextByIDAndValue('main-balance', sum);

                // Getting The BAnk Name
                const bank = document.getElementById('all-bank').value;


                // Creating transaction history
                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex gap-4 border rounded-lg p-2 bg-white m-2">
                        <div class="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center">

                            <img  src="assets/wallet 1.png" alt="">
                        </div>
                        <div>
                            <h1 class="font-bold">Add Money <span class="text-blue-600">$${Amount}</span> from <span class="text-pink-500">${bank}</span></h1>
                        <p>Today 12:44 AM</p>
                        </div>
                    </div>
                `

                // container.appendChild(div)
                container.insertBefore(div, container.firstChild);

                // As soon as the transection happens We redirect to history tab
                handleToggle('transaction-history', 'block');
                handleToggle('addmoney', 'none');

            }
            else {
                alert("Pin Didn't Match!")


            }
        }
        else {
            alert("Account Number Must be of 11 digits.");
        }


    })