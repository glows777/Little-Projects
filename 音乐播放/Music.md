# 步骤

## 赋值

1. musicContainer playBtn prevBtn nextBtn audio progress progressContainer title cover 依次获取元素
2. const一个歌名数组songs 以及歌的索引（这个一开始设置的索引就是默认播放歌曲的索引，后面会变化，所以是变量）
3. 调用加载歌曲loadSong函数 用于初始化，参数是songs[index]===>>>用于获取播放歌曲的src

## 函数

### 加载函数 loadSong 参数song，因为里面要获取song的src

1. title渲染歌名
2. audio&cover的src是（统一格式，后面是歌名song<<==此处绑定<<<===记得加后缀！！！）

### 播放函数 playSong

1. musicContainer添加类名play，配合css做出旋转和上弹动画
2. 播放的按钮（playBtn）中，选择标签i类名为fas的元素移除类名fa-play
3. 同上的选择器，添加类名fa-pause
4. audio调用函数play() 开始播放

- 这两个类名的转化配合css，可以使button的图标有播放改为暂停

### 暂停函数 pauseSong

1. 操作与play相反 全部相反 包括后面的audio改为暂停

### 播放下一首歌曲 nextSong

1. songIndex++ <<<==索引加一，表示下一首歌
2. 判断如果加完的索引大于song的长度-1，就要变为0<<<===因为这样就会循环播放了
3. 调用加载歌曲函数，参数就是索引，用于改变src
4. 调用播放函数

### 播放上一首歌曲 prevDong

1. 基本和呢系统Song类似，只不过songIndex是--，因为前一首，后面判断的话，就是这个索引<0,就变为最后一首（song的长度-1）

### 时刻更新进度条 updateProgress，当前事件是参数

1. const｛duration，currentTime｝是e。srcElement
2. const 进度百分比progressPercent是（当前时间currentTime/持续时间duration）*100<<<===*100的作用是使得这个百分数变为。。%的形式
3. progress的宽度（样式的）继承于父类，百分比形式（绑定）<<<===这样的话，就可以通过改变继承父类的宽度使得进度条一直变化

### 点击设置进度条进度，同时改变歌曲的进度

1. const width是当前的clientWidth
2. clickX是当前点击事件的位置，也就是offsetX（offsetX的X是指获取的是类似X轴坐标，起点）
3. 持续时间duration是音频的duration
4. 更改audio的当前时间currentTime是（clickX/width
)*duration

## 添加事件监听器

### playBtn的click事件监听器

1. const isplaying 是获取musicContainer的类名是否包含play <<<===所以这是个bool类型
2. 判断isplaying，true就调用停止播放函数，false就开始播放函数

### 改编歌曲的监听器

1. 前一首歌曲，后一首歌曲（prev/next-Btn）点击事件，分别调用对应的函数

### audio音乐播放事件，类型是timeupdate，触发更新进度条

### progressContainer点击事件 触发点击更改进度条函数

### aduio音乐播放结束事件（ended），触发播放下一首歌曲函数<<<===这样就会使得音乐播放完成后，自动播放下一首歌曲

## 思路

1. 获取值，设置索引，歌名
2. 点击播放和更改播放的图标（通过增删类）来实现，暂停同个道理
3. 实时更新进度条，就获取当前的时间，然后宽度继承（继承比例可以通过当前/总算出来）
4. 点击进度条更改进度，这个可以先获取点击进度调的X轴位置，然后除以总长度（即容器宽度）再乘以总时间，最后将音频时间改为这个值，即是点击位置的音频时间
5. 一个trick：播放完后自动播放，可以通过添加监听器结束，然后调用播放下一首的函数实现
