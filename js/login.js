// log in pages 
document.getElementById('login').addEventListener('click',function(){
    const email =document.getElementById('email').value;
    const password =document.getElementById('password').value;
    if (email =="shuvo@bank.com" && password =="shuvo") {
        window.location.href="bank.html";
    }
});