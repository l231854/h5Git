// 怎么使用js
// 三种方式
// alert("hello world!")
// 语法
// 1.用字母 数字 特殊符号 组成的命令
// 2.字母的大小写 是敏感的
// 3.命令以行 ;来区分
// 4.注释
// //单行注释
// /*
// */多行注释
// 5.输出
// alert 弹框
// console.log("hello world console");

// 二
// 值：->直接量
//   数字：
//   整数
//   小数 浮点数
//   字符串： "abc" '1'
//   布尔值：true false

// 变量-》容器 -》存值
//   大小-》只能存一个直接量
//   变量 = 地址-对象 -一个数字 一个字符
// 声明:
// var x;创建一个变量
// x = "hello world!";

// 变量名
// 1.变量名 必须是字母和数字 $ _组成
// 2.变量的开始必须是字母
// 3.变量名大小敏感

// 三 运算符
//  算数
//  赋值
//  比较
//  逻辑

// 四 数据类型和转换
// js-》弱类型语言
// var a;
// 原始类型： 数字Number 字符串String 布尔值Boolean undefined
// 对象：Object
// 系统自带的对象：数组 函数
// 自定义


// 数组：把原始类型排列好

// var a = [60,70,80];
// 下标
// a[0]=60;

// var b = {"a1":60,"a2":70,"a3":80};
// b.a1=60;

// 查看对象类型
// typeof(a);
// 数据类型转换
// var c="123";
// var d =Number(a);
// var c=123;
// var d =c.toString;
// var d =String(c);

// 条件判断if
// switch 选择
// 循环 for while

// if()
// {

// }
// switch (表达式的值){
//     case 1:
//          a=1;
//          break;
//     case 2:
//          break;
//     default:
//            a=0;
//            break;
// }

// f
// var a=0;
// while(true){
//     console.log(a);
//     a++;
//     if(a>10)
//     {
//         break;
//     }
// }
// var a=0;
// while(true){
//     console.log(a);
//     a++;
//     if(a<=10)
//     {
//         continue;
//     }
//     break;
// }
// var a=0;
// do {
//     console.log(a);
//     a++;
// }while(a<=10);

// 函数：代码的复用 写一遍多次使用 

// function 名字（多个参数）{
    
// }

// 返回值 return;
// function add(x,y){
//     var z = x+y;
//     return z;
// }

// var rs = add(1,2);
// console.log(rs);

//动态参数
// function add(){
//     var z=0;
//     for(var i=0; i<arguments.length;i++){
//         z+=arguments[i];
//     }
//     return z;
// }
// var rt = add(1,2,3,4,5);
// console.log(rt);

// 作用域：可访问变量得集合(对象,函数)
// 定义的变量 这个变量可以被使用的地方 和可以使用的范围

// 预解析： 浏览器 获得js文件的时候 不是立刻去执行代码，而是先全篇快速扫描起来把变量 预先解析

// 变量 把变量得声明提前

// 闭包： 解决变量得私有化问题
// 计数器 每次调用+1
// function add() {
//     var counter=0;//局部变量-实现由全局变量得生命力
//     //plus(方法里面没有声明的变量会变成全局变量)-伪全局变量
//     plus = function (){
//         counter++;//方法里面没有声明的变量会变成全局变量（伪全局变量）-全局变量得生命周期
//         console.log("counter="+counter);
//     }
// }
// 传统闭包写法
// var plus=(function add() {
//     var counter=0;//局部变量-实现由全局变量得生命力
//     //plus(方法里面没有声明的变量会变成全局变量)-伪全局变量
//     // plus = function (){
//     //     counter++;//方法里面没有声明的变量会变成全局变量（伪全局变量）-全局变量得生命周期
//     //     console.log("counter="+counter);
//     // }
//     return  function (){
//         counter++;//方法里面没有声明的变量会变成全局变量（伪全局变量）-全局变量得生命周期
//         console.log("counter="+counter);
//     };
// })();//counter初始化;

// plus();//counter=1;
// plus();//counter=2;

//在外面不能访问counter
// console.log(counter);


// 对象
// 变量 var
// 函数 function 一堆语句的集合
// 对象： 一堆变量+ 一堆函数的集合
// var obj1 = {
//     x:0,
//     y:1,
//     z:function () {console.log("z");}
// }
// 属性：名：值
// 名：string 不管你是x还是"x"都会隐式 转化 成string
// x123->可以不加""
// 如果包含了特殊字符必须加引号-》 "first name"

// 对象的直接量
// var obj1 = {
//     x:0,
//     "x":1,
//     1:0,
//     "1":2,
// }

// console.log(obj1);
// var person1 = {
//     name:"xiaoming",
//     sex:"male",
//     age:"18",
//     slogan:function(){
//         for(var i=0; i<10;i++){
//             console.log("my name is xiaoming"+i);
//         }
//     }
// }
// console.log(person1);

// 类： 人
// var person2 = new person1();
// 类： 系统自带（数组Array） 自己创建


// 对象：属性的基本操作- 增加 删除 修改 查看 遍历
// 查 获取属性的值 . [] 
// person1.name
// person1[sex]

// 有空格的特殊字符字段获取
// person1["first name"];

// 修改
// person1.name="daqiang";
// 增加 修改属性的时候，如果对象里面没有这条属性 自动加上
// person1.aihao="eat";

// 删除
// delete person1.name;

// 遍历
// for(var pN in person1)
// {

//     console.log("person1的属性名："+pN+"值"+person1[pN]);
// }
// 用的形式创建对象

// 人的类：class
// var person1 = new PersonClass();
// person1.name="xiaohua";
// var person2 = new PersonClass();

// // 为了区分函数和类 类
// function PersonClass() {
//     this.name="xiaoming";
//     this.sex="male";
//     this.age="18";
//     this.slogan=function(){
//         for(var i=0; i<10;i++){
//             console.log("my name is xiaoming"+i);
//         }
//     };
// }
// console.log(person1);

// console.log(person2);

// // 构造函数方式
// var person1 = new PersonClass("xiaomi","male","18");
// console.log(person1);

// 命名空间： 多个人
// var cc={};
// cc.agee=100;


// 对象 类 自定义类
// var obj1={};
// var obj2 = new Object();//空对象


// 时间相关
// var time1 = new Date();//获取当前时间 本地电脑时间
// var t=0;
// for (var i=0;i<10000000;i++)
// {
//     t++;
// }
// var time2 = new Date();
// var n = time2.getTime() - time1.getTime();
// console.log(n);
// Math -> 数学类
// 随机数
// Math.random();//0-1 之间的小数
// for(var i=0; i<10;i++){
//     console.log(Math.random());
//     Math.floor();//向下取整
//     console.log("1-10-"+Math.floor(Math.random()*10));

// }

// JS的核心语法： 编程-》逻辑
// 业务-》交互
// web编程 浏览器 方法
// 页面：img 文字 DOM
// 底层：浏览器-》BOM

// 浏览器 加载页面： 简单的操作系统

// 1.输入一个网址 URL-www.baidu.com
// 2.把网址转换为 IP地址 - 》服务器 IP 10.10.10.10
//   域名: www.baidu.com ->
//   DNS服务器-》浏览器把www.baiud.com  发送给DNS服务器8.8.8.8
//   -》返回给 防雾灯IP地址 10.10.10.10

//   3.浏览器 收到ip地址 10.10.10.10-》缓存在本地

//   4.浏览器就像http://www.baidu.com 请求
//    http、https是 浏览器-》服务器 的方式

//    5.服务器收到了一个请求 打开http://www.baidu.com:80（端口默认是80可以不写）
//     端口  服务器-》开一个端口提供服务

//    6.服务器把请求的内容处理 返回给浏览器 页面的内容

//    7.浏览器收到文件 内容 -》 解析

//    8.看到页面

// 浏览器 多线程 
// 1.js引擎
// 2.UI渲染
// 3.事件
// 4.发起请求的线程
// 5.定时器的线程

// 处理js的时候 -》单线程 -》编程方便
// 采用队列的方式处理
// 同步任务
// 异步任务

// js 时间线
// 第一阶段： 载入阶段 默认：同步 loading
// 1.获取页面内容 -》解析
// 2.生成 DOM树
//       head
//       meta
// 3.同步：js 从服务器下载到浏览器
//       js 解释器 脚本解析 执行
// 4.DOM树  html
//         body
// 5.解析完成
// 6.渲染-》文件在下载 图片
// 7. 载入阶段结束
// 第二阶段： 事件阶段 异步 onload

// 获取节点
// var n = document.getElementById("div1");
// console.log(n);
// n = document.getElementById("div2");
// console.log(n);

// 延迟加载
// 异步加载

// DOM BOM
// window 对象-》 全局对象 全局的方法
// 
// 浏览器的导航栏的信息
// window.location 对象
// 属性：url 的各个部分
// location.href;
// location.toString/

// 刷新页面，打开新的页面
// var bcf =  confirm("confirm 弹窗");
// if(bcf)
// {
//     location.replace("http:www.baidu.com");

// }else{
//     location.reload();
  
// }
// 浏览器的历史 前进 后退
// 后退： history.back();
// 前进： history.forward();
// //快速前进或者后退
// history.go(1);
// history.go(-2);

// 浏览器的信息： 版本 厂家
// navigator;

// 获取浏览器的分辨率
// screen;

// 计时器
// 循环执行：
// setInterval(函数名,时间);
// // 停掉：

// clearInterval(sil);
// // 一次执行：
// var sil = setTimeout(函数名,时间);
// // 停掉：
// clearTimeout(sil);

// var num=0;
// function add() {
//     console.log("num = " + ++num);
//     if(num>10){
//         end();
//     }
// }

// var sil = setInterval(add,1000);
// function end(){
//     clearTimeout(sil);
// }

// setTimeout(end,5000);

// DOM -> 文档对象模型
// DOM树：是一种数据结构 像树 -》DOM树

// 数据结构
// 线性：单链表 循环链表 队列 栈 数组
// 树性：二叉树 平衡树 红黑树
// 网状：有向图 无向图 -》寻路算法 A*算法
//              document
//              html标签
//  head标签                body标签
//  meta   title script    div 
//         DOM 文本

// DOM树
// document 节点： 只有一个
// 标签节点 元素节点
// 文本节点

// 找到标签节点的方法
// 3种常用方法
// 1.通过ID来查找
// 2.通过标签名字来查找
// 3.通过class来查找

// id ->唯一性
// var div1=document.getElementById("div1");//返回节点
// //js时间线

// var ps=document.getElementsByTagName("p");//返回数组
// var p1 = ps[0];

// var div2 = document.getElementsByClassName("p");//返回数组

// 创建节点 添加到DOM树里面 删除节点

// var div1 = document.getElementById("div1");

// //创建一个p标签
// var p = document.createElement("p");
// // 创建一个文本节点
// var ptxt = document.createTextNode("p1");
// p.appendChild(ptxt);
// // 添加节点
// div1.appendChild(p);

// // 删除节点

// div1.removeChild(p);

// // 自己把自己删掉
// var div2 = document.getElementById("div2");
// div2.parentNode.removeChild(div2);

// 对节点的属性 文字内容
// html 定义好的属性 . 对象的点 获取修改
// var img1 = document.getElementById("img1");

// // class js 关键字 类
// img1.className="box1";

// img1.style.width="100px";
// img1.style.height="100px";
// img1.style.backgroundColor="red";

// // /、获取属性

// img1.getAttribute("dat");

// //set
// // img1.setAttribute("属性","值");
// img1.setAttribute("dat1","13");
// //删除
// img1.removeAttribute("dat1");

// var p1 = document.getElementById("p1");
// // 标签可以生效
// // p1.innerHTML="这是innerHTML <br><a href='http://www.baidu.com'>this is a</a>";
// //纯文本
// p1.textContent="这是innerHTML <br><a href='http://www.baidu.com'>this is a</a>";

// js 事件
// 什么是事件
// js-》交互  人可以操作页面
// js-》事件驱动的方式
// 用户->html 元素-》产生一个事件-》事件主动的调用 设定的的方法 函数
// 事件源：产生事件的地方
// 事件的类型：点击 键盘
// 事件的对象：记录好 事件的信息
// 事件的处理程序：函数

// 注册:把以后会发生的事情，先提前报备一下

// 事件的类型+函数 -》元素

// 两种方式来实现注册
// 1.html的属性
// 属性名：on+事件的名字 onclick
// 属性值：方法
//    直接在html设定
//    通过js的元素对象来设定

// var num=0;
// function add(){
//     console.log("点击："+ ++num);
// }
// var num2=0;
// function add2(){
//     console.log("点击2："+ ++num2);
// }

// var div1 = document.getElementById("div1");
// div1.onclick=add;
// //清空点击事件
// div1.onclick=null;

// // 2.通过调用系统提供的方法 
// // div1.addEventListener(事件类型（名称）click,方法函数add,事件的处理方式（冒泡和捕获）（bool值默认false 冒泡）);
// div1.addEventListener("click",add,false);
// div1.addEventListener("click",add2,false);

// // 删除
// div1.removeEventListener("click",add2,false);

// ie8用这个  attachEvent()  detachEvent()

// 事件函数：发生的时候-》操作 function
// var div1 = document.getElementById("div1");
// div1.addEventListener("click",add);

// // 事件对象 event: 提供了事件的详细信息
// // 具体发生事件的元素 鼠标的位置，点击的状态 键盘的按键
// function add(event){
//     // ie8之前
//     // window.event;
//     var e = event || window.event;//兼容ie8
//     console.log(event);
//     //取消默认操作
//     event.preventDefault();
//     // IE8 用 event.returnValue=false;

// }

// var input1 = document.getElementById("input1");
// input1.addEventListener("keydown",add);

// var a1 = document.getElementById("a1");
// a1.addEventListener("click",add);

// 事件的传播:
// 多个标签，互相嵌套 ， 点击页面的时候 有点击事件
// 是不是只有被点中的标签才会产生点击事件？

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
div1.addEventListener("click",div1Click);
div2.addEventListener("click",div2Click);


function div1Click() {
    console.log("div1Click");
}
function div2Click() {
    console.log("div2Click");
}

// 事件的传播
// 在默认的情况下，点击页面的一个标签/节点,那么处在传播路径上的
// 标签都会监听到对应的事件

//传播路径
var head1 = document.getElementsByTagName("head")[0];
head1.addEventListener("click",head1Click);

var body1 = document.getElementsByTagName("body")[0];
body1.addEventListener("click",body1Click);

function  head1Click(){
    console.log("head1Click");
}
function  body1Click(){
    console.log("body1Click");
}

// 事件流：对应标签接收到事件的顺序
// 回声： 人 -》大山-》人
// 两大阶段：
// 从起始点-》目标位置-》捕获阶段
// 从目标位置-》起始点-》冒泡阶段

// 事件代理
var ul1 = document.getElementsByTagName("ul")[0];
ul1.addEventListener("click",ulClick);

function ulClick(event) {
    console.log(event.target);
}



