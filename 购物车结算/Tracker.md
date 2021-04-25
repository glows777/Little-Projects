# 步骤

## 获取值

- balance money_plus money-minus list form text amount分别获取
- 下面这些应该是初始化变量，下面这个暂时还不能理解 等后面看看
- const localStorageTransacition是localStorange（本地变量）的get一个trancitions变量去解JSON（parse）
- let设置trancitions是三元表达式
  - 获取本地变量trancitions是否为null
  - 是 为空数组【】
  - 不是 则是localStorageTransactions

## 函数

### 增加金额记录 addTrancition当前事件是e

- 当前事件阻止提交
- 判断
- text和value是否都为空（‘’）
- 两者空一的话 弹出提示语句
- 否则
  - const trancition是类，其中
  - id是调用生成随机id的函数
  - text是text的值
  - 钱（amount）是amount。value去数字化（前面加“+”）。。。。》》结束
  - transacition push进transacitions数组 这个数组用于在后面删去金额账单时，通过过滤掉当前的，然后重新渲染，即可达到删去的效果
  - 调用渲染函数 参数transacition
  - 调用更新本地存储函数
  - 清空text和amount的值（‘’）

### 函数生成随机ID generateID

- 返回随机数*100000000

### 函数 渲染 assTransacitionToDOM 参数是transacition

- const 一个sign 三元判断 这个transacition的amount（transacition是类） 小于0就-，大于就+
- const item是创建的标签li
- 三元判断 同上判断 这个li的类是plus还是minus 即大于0就plus 小于就mius
- item的内容是 有绑定内容
  - 先trasacition的text
  - 再来个span 里面是符号sign 以及transacition.amount的绝对值
  - 一个按钮 类似delete-btn 绑定点击事件 事件callback是removeTransacition，参数是transacition的id 用于移除当前的金额以及记录
  - button里面放个X 用于关闭的界面
- 把item作为子元素 append进list

### 函数更新填入的数据 updateValues 获取用户输入的值 同时用于渲染上面显示的钱

- const amount是trancitions（这个是数组）。map（transacition为参数 trturn回来transacition的amount
- const total是amounts。reduce（从左加到右）》》》参数是（返回值acc，当前项item   函数执行acc+=item，从0开始【这个也是参数，表示当前的索引】）在toFixed保留2位小数
- 同时 const expense 只不过要再乘以-1在去保留
- balance，money——plus，money-minus内容分别绑定

### 函数 移除记录 removeTransacition（id）用于前面绑定的那个button的事件

- transacitions数组用filter方法 transacition是参数 返回transacition中id不是当前id的项
- 调用更改本地存储函数
- 调用清空函数 清空内容 重新渲染

### 函数更新本地存储

- 存储本地变量transacition，存储的内容是transacition去JSON字符化

### 函数清空 Init

- list清空（‘’）
- transacition遍历 每一个都调用渲染函数 重新渲染
- 调用更新函数 所以里面用的的就是数组transacitions中的元素 所以上面的过滤是有效的

## 初始化

- 调用清空函数
- 添加submit的事件监听器，callback是添加金额记录

## 操作流程

1. 点击add transaction按钮 触发事件
2. 获取input的值 然后将这些渲染到HIstory中 特判是否合法
3. 渲染后，渲染banlance，income，expense的值 =》》通过将这些填入的内容push进一个数组，然后依次判断类型，求和
4. 删除流水账记录 可以通过在步骤3 push操作的时候 随机生成一个id，然后通过匹配这个id，过滤出不包含当前id流水账的新数组，在依次重新渲染。
5. 一个小trick： 可以通过将这些内容存储在本地变量中，从而下次打开页面的时候仍会保留这些数据。特别注意的是，要获取本地的数组后，要进行特判，是否存在，不存在就给个空的数组
