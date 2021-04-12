# 步骤

## 获取元素

- wordEl wrongLettersEl playAgainBtn popup notification finalMessange FinalMessangeReavealWord figuresParts 分别获取

## 定义

- const一个word数组 let selectedword=words中随机一个单词
- let playable是true
- 定义两个空数组correctletters和wrongletters

## 函数

### 打出正确的字母 displayWord函数

- wordEl的html是selectedword去分别split，
- 然后map每个letter是类名为letter的span中正确字母数组（三元运算 正确数组是否include letter 是，则填进去letter 不是则空）
- 在join进去
- const一个innerword是wordEl的innertext replace了（/【\n】/g）这个应该是正则表达式
- 判断innerword如果等于选中的单词 则finalmessage是祝贺。 答案为空 popup的样式display为flex playable是false

### 更新输入错误字母的函数 updateWrongLettersEl函数

- wrongLetterEl的html是（三元，错误数组长度大于0 添加p标签wrong 否则，空） 后错误数组map每个letter添加span，里面是letter的值
- 每个figurepart类 用foreach遍历，当前值为part。索引index 执行函数=》｛error是错误数组的长度，判断索引位置小于长度，则part的样式display为块状，否则，display为none｝
- 检查是否lost game 判断错误数组长度等于figureparts（输入错误字母的长度）则finalmessage的text是抱歉，显示正确的答案（即。。。revealword的text）是selectword ，popup的样式是flex，playable=false

### 显示提示show notification函数

- noytification添加类show
- 设置计时器，一次性settime。notification移除类show 延迟是2kms

## 添加事件监听器

### window一个 类型是keydown 当前事件为参数，函数

- 判断playable是否为真，
- 真，在判断输入合法（当前事件的keycode在65和90之间，叫a什么码），是则定义letter是当前事件的key去tolowerCase
- ，在判断，选择的单词是否包含letter，
- 包含，判断正确数组里面是否含有letter，没有，则push进去正确数组，调用displayWord函数 有则调用shownotification函数
- 不包含 在判断错误数组是否包含letter，没有，push进去 调用updateWrongLettersEl函数，有 调用shownotification

### 添加重新游戏的事件监听器

- playagainbtn click，｛playable归位为true 正确数组spilce（0），错误数组spilce（0），selexctedword重新random一下，｝ displayword函数 updateWrongLetterEl函数，popup样式display为none

## 调用displayword函数
