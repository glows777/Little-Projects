## 获取元素 
- wordEl wrongLettersEl playAgainBtn popup notification finalMessange FinalMessangeReavealWord figuresParts 分别获取
## 定义
- const一个word数组 let selectedword=words中随机一个单词 
- let playable是true 
- 定义两个空数组correctletters和wrongletters
## 函数
### 打出正确的字母
- wordEl的html是selectedword去分别切片，
- 然后map每个letter是类名为letter的span中正确字母数组（三元运算 正确数组是否include letter 是，则填进去letter 不是则空） 
- 在join进去
- const一个innerword是wordEl的innertext replace了（/【\n】/g）这个应该是正则表达式
- 判断innerword如果等于选中的单词 则finalmessage是祝贺。 答案为空 popup的样式display为flex playable是false
### 更新输入错误字母的函数
- 