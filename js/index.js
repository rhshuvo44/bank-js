// input flid
function getInput(inputId) {
    let InputValue = document.getElementById(inputId);
    const inputAmount= parseFloat(InputValue.value);
    // input clear 
    InputValue.value ='';
    return inputAmount;
}
////depogit and withdraw
function preBlance(amount,totalBalance) {
    let preBalanceTaxt = document.getElementById(totalBalance);
    let preBalance =parseFloat(preBalanceTaxt.innerText);
    const currentBal = preBalance + amount;
    preBalanceTaxt.innerText=currentBal;
};
// curren balance 
function currentBalance() {
const balanceText =document.getElementById('total-balance');
const balance =parseFloat(balanceText.innerText);
return balance;
}
//balance
function updateBalance(amount,isAdd) {
    const balanceText =document.getElementById('total-balance');
    if (isAdd==true) {
    const totalBalance = balance + amount;
    balanceText.innerText = totalBalance
    }else{
    const totalBalance = balance - amount;
    balanceText.innerText = totalBalance
    }
}
// bank depogit

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount=getInput('deposit-input');
    // update balance 
    if (depositAmount >0) {
    preBlance(depositAmount,'deposit-pre-balance');
    updateBalance(depositAmount,true);
    }
});

//Withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){;
const withdrawAmount=getInput('withdraw-input');
const current =currentBalance();
//update balance
if( withdrawAmount > 0 && withdrawAmount < current){
    preBlance(withdrawAmount,'withdraw-pre-balance');
    updateBalance(withdrawAmount ,false);
}
})