const main=document.getElementById('main');
const addUserBtn=document.getElementById('add-user');
const doubleBtn=document.getElementById('double');
const showMillionBtn=document.getElementById('show-million');
const sortBtn=document.getElementById('sort');
const calculateWealthBtn=document.getElementById('calculate-wealth');
 
let data=[];//创建存放人名和金钱

getRandomUser();
getRandomUser();
getRandomUser();

//获取随机的名字和金钱 通过fetch一个网站的API 这是构造对象
async function getRandomUser(){  //async涉及异步的内容 后面再了解
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)
    };

    addData(newUser);
}

//加倍金钱
function doubleMoney(){
    data = data.map(user => {
        return {...user,money:user.money*2};
    });
    updateDOM();
}

  
//过滤出百万富翁
function showMillion(){
    data = data.filter(user => user.money > 1000000);
    updateDOM();
}
//排序
function sortByRichest(){
    console.log(123);
    data.sort((a,b) => b.money - a.money);
    updateDOM();
}

//计算总金额
function calculateWealth(){
    const wealth = data.reduce((acc,user) => (acc+=user.money),0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

//添加新对象到data中
function addData(obj){
    data.push(obj);
    updateDOM();
}

//updateDOM函数
function updateDOM(providedData = data){
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';//等下打完再来看看这个是干嘛的
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

//formatMoney函数
function formatMoney(number){
    return '$'+number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,');
}

//添加事件监听器
addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortByRichest);
showMillionBtn.addEventListener('click',showMillion);
calculateWealthBtn.addEventListener('click',calculateWealth);