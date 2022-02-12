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

//balance
function updateBalance(amount,isAdd) {
    const balanceText =document.getElementById('total-balance');
    const balance =parseFloat(balanceText.innerText);
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
    preBlance(depositAmount,'deposit-pre-balance');
    // update balance 
    updateBalance(depositAmount,true);
});

//Withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){;
const withdrawAmount=getInput('withdraw-input');
preBlance(withdrawAmount,'withdraw-pre-balance');
//update balance
updateBalance(withdrawAmount ,false);
})