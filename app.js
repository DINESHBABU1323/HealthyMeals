const uname=document.getElementById('uname');
const email=document.getElementById('email');
const msg=document.getElementById('msg');
const form=document.getElementById('form');

form.addEventListener('submit', (e) => {
    if(!validateInput()){
        e.preventDefault();
    }
})

function validateInput()
{
    const unameVal=uname.value.trim();
    const emailVal=email.value.trim();
    const msgVal=msg.value.trim();
    let success=true;

    if(unameVal===""){
        success=false;
        setError(uname,'Please enter your name');
    }
    else{
        setSuccess(uname);
    }
    if(emailVal===""){
        success=false;
        setError(email,'Please enter your email');
    }
    else if(!validateEmail())
    {
        success=false;
        setError(email,'Please enter valid email');
    }
    else{
        setSuccess(email);
    }
    if(msgVal===""){
        success=false;
        setError(msg,'Please give your feedback');
    }
    else{
        setSuccess(msg);
    }
    return success;
}
function setError(element,message)
{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;
};
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelect('.error');
    errorElement.innterText="";
}
function validateEmail()
{
 (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
}