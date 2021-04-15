# demo2

- 个人学习git和web用

## 子绝父相 CSS

## js继承 一般用混合式（最常用） 先call（this，。。。），后子类原型等于new一个父类 来自CSDN的资料=》

- <https://blog.csdn.net/qq_34664239/article/details/83785441?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control&dist_request_id=1331645.22000.16184908739731861&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control>

- 混合了对象冒充、原型继承方式   这种方式解决了原型链继承和对象冒充继承两种方式带来的问题，融合了两种方式的优点，目前最常用的方式！
存在一个小问题，此时子类的constructor不再是自身构造函数了
- 原型链继承 缺点是子类原型的构造函数成了父类构造函数   ，， 当父类有引用类型属性的时候，子类原型继承后，所有的实例共用同一个属性，一个实例修改了属性，所有实例的属性均受影响。，，（父构造函数中的属性都会成为共享属性，当父构造函数中有引用类型属性时，继承后实例间会相互影响）（prototype那个） ，，可用于每个子类的方法重复时继承  </br>
优点：prototype用来实现基于原型的继承与属性的共享,
避免了代码冗余，公用的属性和方法，可以放到原型对象中，这样，通过该构造函数实例化的所有对象都可以使用该对象的构造函数中的属性和方法！
(也就是说，原型链继承后 直接调用方法和属性就好了 因为当前的子类找不到 会到原型链里面找 `这样就避免了构造很多实例时（这些实例都需要某些方法），会反复调用某些的方法，会造成大量内存浪费 原型链继承则可以通过直接在原型链里一级一级的查找解决这个问题`)《--个人理解   </br>
减少了内存占用
- 对象冒充 缺点只能继承构造函数内部的属性和方法，无法继承父类原型的属性和方法 优点是父类有引用类型对象的属性时，继承后实例间也不会相互影响 要用父类原型方法的话 用那个call（this，。。）或者apply（），apply第二个参数是数组 但没有原型链的优点 call也可以传数组，[...]即可 子类没找到方法时，会从原型链找 但是找不到 因为原型链里没有

- 例子：

- 定义父类
>
>// 定义一个动物类
>
>function Animal (name) {
>
>// 属性
>  
> this.name = name || 'Animal';
>this.eat= ['肉']; // 引用类型属性
>
>// 实例方法
>
>this.sleep = function(){
>
>console.log(this.name + '正在睡觉！');
>
>}
>
>}
>
>// 原型方法和属性
>
>Animal.prototype.eating = function(food) {
>
>console.log(this.name + '正在吃：' + food);
>
>};
>
>Animal.prototype.playing = '爱玩篮球'
>
- //混合方法的使用
>
>function Cat(name) {
>
>Animal.call(this, name); //新的构造函数创建的实例中可以传任意参数}
>
> Cat.prototype = new Animal();
>
> var cat1 = new Cat('cat1');
>
>var cat2 = new Cat('cat2');
>
> cat1.eating('苹果');//cat1正在吃：苹果 -- 继承了父类原型的属性和方法
>
> console.log(cat1.playing);//爱玩篮球 -- 继承了父类原型的属性和方法
>
> cat1.eat.push('蔬菜');> console.log(cat1.eat);//["肉", "蔬菜"]
>
> console.log(cat2.eat);//["肉"] -- 实例之间的属性不会相互影响

## 例外一种组合式 是最完美的 解决上述construtor指向问题 但是繁琐

- 例子 父类同上

> // 定义猫咪构造函数
>
> function Cat(name) {
>
> this.name = name;
>
> // 继承Animal 将Animal绑定到this对象上并执行!!!
>
>
> Animal.call(this,'red');
>
> }
>
> function inheritPrototype(son, father) {
>
> var prototype = Object(father.prototype); // 将父类的原型创建一个副本
>
> prototype.constructor = son; //给副本指定constructor为子类构造函数
>
> son.prototype = prototype; //将子类原型指向这个副本}
>
> inheritPrototype(Cat,Animal);
>
> // 实例化Cat
>
> var c1 = new Cat('咪咪');
>
> var c2 = new Cat('泡泡');
>
> c1.eat.push('猫薄荷');
>
> c1.eating(); //我能吃肉，猫薄荷
>
> console.log(c1.constructor); // cat函数体，
>
> console.log(c1.eat); // 肉，猫薄荷
>
> console.log(c2.eat); // 肉  不受实例c1的影响
