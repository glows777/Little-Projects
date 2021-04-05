# 步骤
## 获取数据
- main addUserBTN doubleBTn showmillion sortBtn calculateWEalthBtn 分别获取id是main add-user等的数据
## 初始化
- 创建data空数组 

- 调用几次增加函数（getrandomUser） 这样可以使页面初始化时就有数据
## 函数
### 增加函数getRandomUSer（记得异步一下 前面加async）
- const 一个res去await fetch（盲猜await时异步的作用）一个API

- const data=await res的json（）

- const user=data。results【0】（这几步应该是那个API的接口）

- const一个新对象newUser name：`$｛user的name的first｝ 同理 。。。的last` money是Math。floor（Math。random（）*1000000) (这步是用于调用随机生成数，随机生成金钱)

- 调用addData（newUser（对象为参数））函数
### 加倍金钱函数
- data=data。map（user作为参数 函数return一个｛。。。user，money变成：原来的money*2｝

- 调用updateDOM（）函数
### 过滤富翁函数
- data=data调用filter函数，user.money》百万

 - 调用updateDOM（)
### 排序函数
- data。sort（a，b），b的money-a的（降序排序，若要升序，则a-b）

- updateDOM（）
### 计算总金额函数
- const wealth=data。reduce（acc，user），acc+=user。money

- const wealEL新建div元素

- wealthEl的innerHTML是<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong></h3>
（记得绑定``）formatMOney暂时不清楚该函数在干嘛，因为看不懂代码，h3是因为css中先定义了h3的样式，所以增加h3直接就可以变换样式

- append到main中（main是那个获取的元素）
### 添加对象到data函数（addData（obj））
- 将objpush进去data

- updateDOM（）
### 函数updateDOM 参数为providedData = data
- main。innerHTML为'<h2><strong>Person</strong>Wealth</h2>';（这个用于清除原来的）
- providedData 。foreach（item ，函数｛
const element是新建的div
添加类名person
element的innerHTML是 `<strong>${item.name}</strong>${formatMoney(item.money)}`;
append到main里面
｝
### 函数formatmoney
- 。。。。
## 事件监听器
- addUSer，click，新增元素函数 
- doubleBTN 加倍函数
- sortBTN 排序函数
- showMIllionBTN 过滤函数
- calculate。。。。 计算函数
- - 都是click 因为是按钮，一般都是点击
