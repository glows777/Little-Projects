const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionBtn = document.getElementById('show-million');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data=[];
getRandomUser();
getRandomUser()
getRandomUser()

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)
    };
    addData(newUser);
}

function doubleMoney(){
    data = data.map(user =>{
        return {...user,money:user.money * 2}
    });
    updateDOM();
}

function showMillion(){
    data = data.filter(user => user.money > 1000000);
    updateDOM();
}

function sortByRichest(){
    data.sort((a,b) => b.money-a.money);
    updateDOM();
}

function calculateWealth(){
    const wealth = data.reduce((acc,user) => (acc+=user.money));
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth<strog>${formatMoney(wealth)}</strog></h3>`;
    main.appendChild(wealthEl);
}

function addData(obj){
    data.push(obj);
    updateDOM();
}

function updateDOM(providedData = data){
    main.innerHTML=``;
}