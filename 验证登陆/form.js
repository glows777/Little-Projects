const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//show error
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

//show success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//check intact
function checkIntact(inputArr){
    let isCorrect=false;
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${get(input)} is required!`);
            isCorrect=true;
        }
        else{
            showSuccess(input);
        }
    })
    return isCorrect;
}

//check password match
function checkPassword(input1,input2){
    if(input1.value!=input2.value){
        showError(input2,'Passwords are not the same as the first!');
    }
}

//check length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${get(input)} must at least ${min} chareters`);
    }
    else if(input.value.length>max){
        showError(input,`${get(input)} must less than ${max} chareters`);
    }
    else{
        showSuccess(input);
    }
}

//get name
function get(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}


//add listener
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!checkIntact([username,email,password,password2])){
        checkLength(username,5,10);
        checkLength(password,6,15);
        checkPasssword(password,password2);
    }
});
