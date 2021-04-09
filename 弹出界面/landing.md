## 步骤
### 赋值
- toggle close open modal navbar 分别getid
### 函数 关闭导航页 参数为当前事件
- 判断 如果 body的class有show-nav且e的目标不是toggle 且toggle不包含当前的事件 且navbar不包含当前事件，则body toggle一个show-nav的类名，同时移除body的事件监听器
- 否则，则移除body事件监听器
### 添加时间监听器
- toggle 触发函数｛toggle一个show-nav   添加事件监听器，closenavbar ｝
- open 添加类show-modal
- close 移除类show-modal
- window 当前事件的目标，是否为modal，是，移除show-modal，否则，false（可以写为三元表达式） 