const balace = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

//获取先前用户存储在本地的数据（transactions数组），这样就可以读取以前用户的数据，做到真正的记账
const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

// 判断上面获取的本地数据是否存在，
// 存在，就把上面获取的那个数据重新传给transactions数组，
// 不存在（表示用户第一次使用或者之前清空了），新建一个空数组
let transactions = localStorage.getItem('transactions')!== null ? localStorageTransactions : [];

function addTransacition(e){
    e.preventDefault();
    if(text.value.trim() === ''||amount.value.trim() ===''){
        alert('Please add a text and amount');
    }
    else{
        const transaction = {
            id:generateID(),
            text:text.value,
            amount:+amount.value
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value='';
        amount.value='';
    }
}

function generateID(){
    return Math.floor(Math.random()*100000000);
}

function addTransactionDOM(transaction){
    const sign = transaction.amount <0 ?'-' : '+';
    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ?'minus':'plus');
    item.innerHTML=`
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" 
    onclick="removeTransaction(${transaction.id})">
    X
    </button>
    `;
    list.appendChild(item);
}

function updateValues(){
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) =>(acc+=item),0).toFixed(2);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc,item) => (acc += item),0)*-1)
    .toFixed(2);
    balace.innerHTML = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id!==id);
    updateLocalStorage();
    init();
}

function updateLocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init(){
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();
form.addEventListener('submit',addTransacition);
