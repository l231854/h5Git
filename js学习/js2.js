// 引入js的两种方式
// 1.嵌入代码 可以有多个代码块

// 2.引入外部文件 下载-解析-执行  从上往下执行

//阻塞性加载
// 延迟加载-定义：表示脚本可以延迟到文档完全被解析和显示之后再执行
/* <script  defer="defer" src=""></script> */
// 1.并发
// 2.多个js，按定义顺序执行
// 3.在文档解析完，才执行
// 4.在DOMContentLoaded事件之前执行完
// 5.只支持外部引入方式（IE7以前的除外）
// 异步加载-定义：表示应该立即下载脚本，但是不妨碍页面中的其他操作
/* <script async="async" src=""></script> */
// 1.并发
// 2.多个js，不一定按顺序执行
// 3.加载完就执行， 在load事件之前
// 4.在load事件之前执行完
// 5.只支持外部引入方式

// console.log("start");
// // working(10*1000);
// console.log("end");
// //date 可以获取到系统时间

// function working(time){
//     var nowTime = Date.now();//毫秒
//     var exitTime = nowTime+time;
//     while(nowTime<exitTime){
//         //
//         nowTime = Date.now();
//     }
// }
// var div1 = document.getElementById("div1");
// console.log(div1);

// js6种基本类型：number string boolean null undefined object
// null == undefined =true;值是相同的
// null === undefined = false; 类型不一样

// js的获取数据类型
// 常用的4种方式
// 1.typeof(1)  注意null和function  无法判断对象的具体类型
// 2.Object.prototype.toString.call(1) 推荐代码使用
// 3.instanceof 仅能判断对象的具体类型
// 4.constructor 查看对象对应的构造函数  很方便造假