//add money feature
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const validPin = 1234;

    const bank = document.getElementById('bank')
    .value;
    const bankAccountNumber = document.getElementById('bank-account-number').value;

    const addMoney = parseInt(document.getElementById('add-money-input').value);

    const pinNumber = parseInt(document.getElementById('pin-number').value);

    if (bankAccountNumber.length < 11) {
        alert('Please Provide Valid Account Number')
        return;    
    }
    if (pinNumber != validPin ) {
        alert('Invalid Pin')
        return;  
    }

    const preBalance = parseInt(document.getElementById('pre-balance').innerText);

    const totalBalance = preBalance + addMoney;
    
    document.getElementById('pre-balance').innerText = totalBalance;  
    
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

//withdraw money feature
document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const validPin = 2062;
    
    const bankAccountNumber = document.getElementById('withdraw-bank-account-number').value;

    const withdrawMoney = parseInt(document.getElementById('withdraw-money-input').value);

    const pinNumber = parseInt(document.getElementById('withdraw-pin-number').value);

    if (bankAccountNumber.length < 11) {
        alert('Please Provide Valid Account Number')
        return;    
    }
    if (pinNumber != validPin ) {
        alert('Invalid Pin')
        return;  
    }
    
    const preBalance = parseInt(document.getElementById('pre-balance').innerText);

    const totalBalance = preBalance - withdrawMoney;
    
    document.getElementById('pre-balance').innerText = totalBalance;    

    const data = {
        name: 'Withdraw Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)

})

// function to toggle 
function handleToggle(id ) {
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// transaction
const transactionData = [];

document.getElementById('transaction-btn').addEventListener('click', function() {
    const transactionContainer = document.getElementById('transaction-container')

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML =
        
        `
        <div class="bg-white flex justify-between items-center p-3 rounded-2xl  mt-5">
                <div class=" flex items-center ">
                    <div class=" bg-[#f4f5f7] p-5 rounded-full">
                        <img class="" src="./assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-5">
                        <h1 class="font-bold text-xl">Add Money</h1>
                        <h3>Today 01:44 AM</h3>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }

})

// toggling feature
document.getElementById('add-money-button').addEventListener('click', function(){
    // document.getElementById('cash-out-money').style.display = 'none';
    // document.getElementById('transfer-money-section').style.display = 'none';
    // document.getElementById('add-money-section').style.display = 'block';
    handleToggle('add-money-section');
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    }
    document.getElementById('add-money-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

document.getElementById('cash-out-money-button').addEventListener('click', function(){
    // document.getElementById('add-money-section').style.display = 'none';
    // document.getElementById('transfer-money-section').style.display = 'none';
    // document.getElementById('cash-out-money').style.display = 'block';
    handleToggle('cash-out-money');
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    }
    document.getElementById('cash-out-money-button').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

document.getElementById('transfer-money-btn').addEventListener('click', function(){
    // document.getElementById('add-money-section').style.display = 'none';
    // document.getElementById('cash-out-money').style.display = 'none';
    // document.getElementById('transfer-money-section').style.display = 'block';
    handleToggle('transfer-money-section');
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    }
    document.getElementById('transfer-money-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

document.getElementById('get-bonous-btn').addEventListener('click', function(){
    handleToggle('get-bonous-money-section');
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    }
    document.getElementById('get-bonous-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

document.getElementById('pay-bill-btn').addEventListener('click', function(){
    handleToggle('pay-bill-section');
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    }
    document.getElementById('pay-bill-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

document.getElementById('transaction-btn').addEventListener('click', function(){
    handleToggle('transaction-section');
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    }
    document.getElementById('transaction-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

