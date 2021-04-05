const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//显示错误的信息
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
//显示正确的信息
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}


//检查是否填完整
function checkIntact(inputArr){
    let isCorrect=false;
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
            isCorrect=true;
        }
        else {
            showSuccess(input);
        }
    });
    return isCorrect;
}

//检查两次输入密码是否相同
function checkPassword(input1,input2){
    if (input1.value!=input2.value) {
        showError(input2,'Passwords are not the same!');
    }
}

//检查密码长度是否合法
function checkLength(input,min,max){  //min max密码长度区间
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must at least ${min} characters`);   
    }
    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than${max} characters`);
    }
    else{
        showSuccess(input);
    }
}


// 获取警告部分的名字
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

//为按钮添加监听器
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!checkIntact([username,email,password,password2])){
        checkLength(username,5,10);
        checkLength(password,6,15);
        checkPassword(password,password2);
    }
});