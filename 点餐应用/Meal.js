const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeadiong = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');


//Search Meal Fetch API 
// 搜索菜品
function searchMeal(e){
    // 阻止事件提交
    e.preventDefault();
    // 清空原先搜索的内容
    single_mealEl.innerHTML = '';

    const term = search.value;
    // 获取搜索内容的值
    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        //data为参数传入 
        .then(data =>{
            console.log(data);
            resultHeadiong.innerHTML = `<h2>Search results for '${term}':</h2>`;
            
            //判断搜索结果是否为空 空的话 就是搜不到 不为空 开始渲染 这个是显示图片
            if(data.meals===null){
                resultHeadiong.innerHTML = `<p>There are no search results. Try again!</p>`;
            }
            else{
                mealsEl.innerHTML = data.meals
                .map(meal =>`
                <div class="meal">
                   <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class ="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div> `)
                .join('');//                                                                                                                                                                                  
            }
        });
        search.value = '';
    }
    else{
        alert('Please enter a search term');
    }
}

//Fetch Meal By ID
// 匹配点击图片的ID 渲染下面菜品的做法
function getMealById(mealID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res =>res.json())
    .then(data => {
        const meal = data.meals[0];
        addMealToDOM(meal);
    });
}

//get random Meals
//获取随机菜品 然后调用addMealToDOM函数渲染 异步  获取随机的meal 调用 渲染
function getRandomMeal(){
    mealsEl.innerHTML = '';
    resultHeadiong.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
}

//add Meal To DOM
//这个是详细一道菜的东西 参数meal是获取随机菜品或者点击搜索图片后出发的函数所赋予的
function addMealToDOM(meal){
    const ingredients=[];
    //最多遍历20次 如果空了 会break出来
    for(let i=1;i<=20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(
                `${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`//这个是所需原料的名字和质量
            );          
        }
        else break;
    }
    //填充内容 用绑定的写法 --》因为这些是变量 
    single_mealEl.innerHTML = `
        <div class="single-meal">
            //菜名
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            //菜品的主要原料和来自哪个国家
            <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
                ${meal.strArea?`<p>${meal.strArea}</p>`:''}
            </div>
            //主体文本内容
            <div class="main">
                //文字介绍菜品做法
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                   ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            <div/>
        </div>
    `;
}

//add EventListner
submit.addEventListener('submit',searchMeal);
random.addEventListener('click',getRandomMeal);
mealsEl.addEventListener('click',e => {
    const mealInfo = e.path.find(item =>{
        // path是当前点击事件路径 即点击图片的路径 然后find会返回包含meal-info的item
        // 也就是说find 只是做一个判断 判断是否包含类meal-info 同时返回item 
        if(item.classList){
            return item.classList.contains('meal-info'); //判断是否包含类meal-info 有返回true 没有返回false
        }
        else{
            return false;
        }
    });
    if(mealInfo){
        const mealID = mealInfo.getAttribute('data-mealid');//getAttribute 获取属性名的属性值 
        //要求大写全部转为小写 所以变为data-mealid 对应前面那个每道菜品图片的div的data-mealID
        //mealID在这里赋值 然后调用函数 就可以有点击事件 下文就会有菜品的说明
        getMealById(mealID);
    }
})