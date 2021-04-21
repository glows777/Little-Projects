const balace = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transacitions')
);
let transactions = localStorage.getItem('transacitions')!== null ? localStorageTransactions : [];

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
        addTransacitionDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value='';
        amount.value='';
    }
}

function generateID(){
    return Math.floor(Math.random()*100000000);
}

function addTransacitionDOM(transaction){
    
}