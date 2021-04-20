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
  - transacition push进transacitions数组
  - 调用渲染函数
  - 调用更新本地存储函数
  - 清空text和amount的值（‘’）

  ### 函数生成随机ID generateID

  - 