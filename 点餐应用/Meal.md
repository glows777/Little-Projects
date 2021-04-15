# 步骤

## 赋值

- search submit random mealsEl resultHeading single_mealEl 分别赋值

## 函数

### 异步寻找食物 searchMeal（）参数为当前事件

- e。preventDefault
  - 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。（w3school说的），也就是阻止如表单的提交（无数据库，且要在下方显示内容）
- 清空当前页面的食物，上次搜索的页面，single那个innerHtml设置为空即可
- 获取input栏的value作为term
- 判断term去trim（）是否为空（因为空的话，无法搜索）（trim方法可以去除term的空格键等空白内容）
- 如果不为空 （异步）fetch（`网址`）
  - 。then（res变为res。json）
  - 。then（data为参数，函数  （data。meals应该是异步的类，不然下面赋值怪怪的）
  - ｛打印data，
  - resultHeading（那个头，储存标题语句）｝）添加《h2》=》。。。`绑定term`｝
    - 判断 data。meals是否为空
    - 为空，
      - 则添加提示语句（标题语句添加）《p》。。。
    - 不为空
      - mealsEl（菜品的说明和做法）元素添加html为
      - 添加的html是data。meals
      - 上面的data。meals添加。map方法（参数meal，函数｛`
      - 类为meal的div
      - img，src是。。。，alt是绑定meal。strMeal` （作为属性绑定，记得加""）
      - 类名为meal-info的div，他的data-mealID是绑定meal。idMeal（作为属性绑定，记得加""）
        - 《h3》里面绑定meal。strMeal
      - `｝)
      - 再。join（‘’）
- 清空搜索栏的value，赋值为‘’
- 为空
  - 弹出一句话。。。

### 通过ID来匹配meal函数 getMealById，参数是mealID

- fetch一个网址，网址最后绑定mealID，所以要在这个网址前面加``
- 。then（res变为res。json）
- 。then（参数data，函数｛
  - const一个meal是data。meals【0】
  - 调用addMealToDOM，参数是meal｝

### 函数调用异步 API获取随机菜品getRandomMeal 此处无参数

- 清空显示区域》》》html为空（mealEl和resultHeading）
- fetch（`...`)
- .then(res是res。json)
- 。then（参数data 函数｛
  - 。。。同函数GetMealId部分

### 函数 添加菜品内容到DOM树 addMealToDOM

- 定义空数组ingredients
- 循环20次
- 每次先判断meal【strIngredients+绑定i】是否为空
- 不为空，则ingredients push进 绑定》》》meal【strIn。。。+i】和meal【strMeasure+i】的差集
- 为空，则循环结束
- 填充正文 single_mealEl的内容是 绑定`
- 。single-meal的div
- 里面h3标题，绑定meal。strMeal
- img标签 src：绑定meal。strMeal，alt是绑定meal。strMeal
- 。single-meal-info的div
- 里面是绑定 三元表达式meal。strCategory存在，就p标签一个这个 不存在，输入空 再来一个三元 绑定 meal。strArea，是就。。。同上
- p标签 绑定meal。strInstructions
- h2 Ingredients
- 列表ul 绑定 ingredients，调用map方法，项为ing，写入绑定内容ing 然后join一起
- 绑定结束`

## 添加事件监听器

- submit一个，调用searchMeal 类型submit
- random一个 调用getRandomMeal 类型click
- 搜索菜品的点击事件（点击下面出现详细说明） 当前事件为参数。函数｛
  - const mealInfo是当前事件的path调用方法find，当前项item作为参数，
  - 判断item的类名是否为空
  - 不为空 返回语句 item.classList.contains('meal-info')
  - 为空，返回false
  - 判断mealInfo是否 为空
  - 不为空 const mealID是mealInfo。getAttribute（‘data-mealid’）（这个是获取相应属性名的属性值）
  - 同时调用getMealByID函数
- ｝
