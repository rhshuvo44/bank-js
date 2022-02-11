

// bank depogit

document.getElementById('deposit-btn').addEventListener('click',function(){
    // input button 
    const depositInput = document.getElementById('deposit-input');
    const depositAmount= parseFloat(depositInput.value);
    //taxt deposit
    let depositPreBalanceTaxt = document.getElementById('deposit-pre-balance');
    let depositPreBalance =parseFloat(depositPreBalanceTaxt.innerText);
    let depositCurrentBal = depositPreBalance + depositAmount;
    depositPreBalanceTaxt.innerText=depositCurrentBal;
    // update balance 
    const balanceText = document.getElementById('total-balance');
    const balance=parseFloat(balanceText.innerText);
    const totalBalance = balance + depositAmount;
    balanceText.innerText=totalBalance;
    // input clear 
    depositInput.value ='';
});

//Withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //input button
const withdrawInput =document.getElementById('withdraw-input');
const withdrawAmount = parseFloat(withdrawInput.value);
// withdraw-pre-balance
const withdrawPreBalanceTaxt = document.getElementById('withdraw-pre-balance');
const withdrawPreBalance=parseFloat(withdrawPreBalanceTaxt.innerText);
const withdrawCurrentBalance = withdrawPreBalance + withdrawAmount;
withdrawPreBalanceTaxt.innerText=withdrawCurrentBalance;
//update balance
const balanceText =document.getElementById('total-balance');
const balance =parseFloat(balanceText.innerText);
const totalBalance = balance - withdrawAmount;
balanceText.innerText = totalBalance
// input clear 
withdrawInput.value ='';
})