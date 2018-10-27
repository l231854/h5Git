// 这个函数是渲染评分组件的
function reater(options){
    // 参数
    // Element: dom 当前想把什么变成评分组件
    // max:Number 当前有多少颗星星
    // starSize:NUmber 星星的大小
    // showTip:boolean 是否显示tip
    // step : Number 0-1小数 0.3
    // rating : 默认是几颗星星
    // option 是一个对象


    if(Object.prototype.toString.call(options) !=="[object Object]"){
        throw new Error("需要一个对象作为参数")
    }
    // 判断是否是dom节点
    if(typeof options.element === "undefined" || options.element == null) {
        throw new Error("需要一个dom节点")

    }
    if(typeof options.showTip === "undefined"){
        options.showTip=true;
    }
    else{
        options.showTip=false;
    }
    if(typeof options.step !== "undefined"){
        if(options.step > 1 || options.step <= 0){
            throw new Error("step需要0-1的数")
        }
    }
    
    if(typeof options.marginLeft === "undefined"){
        options.marginLeft=0;
    }
    if(typeof options.marginTop === "undefined"){
        options.marginTop=0;
    }
   
    

    // 获取参数
    var elem = options.element;
    var num = options.max || 5;
    var starSize = options.starSize || 48;
    var step = options.step;
    var showTip = options.showTip;
    var marginLeft=options.marginLeft;
    var marginTop=options.marginTop;

    // 定义一些组件中使用的变量
    var currentStar; 
    var clickCurrentStar=0;

    elem.style.width = num*starSize + 'px';
    // 创建一个dom元素
    // var dom = document.createElement("div");

    elem.classList.add("star-rating");
    elem.style.backgroundSize=starSize + 'px';
    elem.style.height= starSize + 'px';
    elem.style.marginLeft=marginLeft + 'px';
    elem.style.marginTop=marginTop + 'px';
    var div = document.createElement("div");
    div.classList.add("star-value");
    // 默认是0颗星星
    div.style.width='0%';
    if(!options.rating){
        div.style.width='0%';
    }
    else{
        clickCurrentStar=options.rating;
        div.style.width=options.rating/num*100+"%";
 
    }
    div.style.backgroundSize=starSize + 'px';
    div.style.height= starSize + 'px';
    // div.style.marginLeft=marginLeft + 'px';
    // div.style.marginTop=marginTop + 'px';
    div.style.backgroundColor='#ccc';
    elem.appendChild(div);

    
    // mousemove 事件
    function onStarIn(e){
        var x = e.offsetX;
        var width = elem.offsetWidth;
        var persont = x/width;

        if(step === 1){
        // Math.ceil 向上取整
        currentStar = Math.ceil(persont * num);
        }else{
            for(var i =0;;i+=step){
                if(i >= persont*num){
                    currentStar = i;
                    break;
                }
            }
            //精确几位
            currentStar = currentStar.toPrecision(2);
        }
        if(currentStar > num){
            currentStar=num;
        }
       
        console.log(currentStar);
        // 渲染宽度
        div.style.width=currentStar/num*100+"%";
        if(showTip){
        //    给当前自定义属性
        elem.setAttribute("data-title",currentStar + "/" + num)
        }
   
    }
    function onStarOut(e){
        div.style.width=clickCurrentStar/num*100+"%";
    }
    // click点击事件
    function onStartClick(){
        console.log("onStartClick");
        clickCurrentStar=currentStar;
    }

    // 绑定事件
    elem.addEventListener("mousemove",onStarIn);
    elem.addEventListener("mouseleave",onStarOut);
    elem.addEventListener("click",onStartClick);

}
// reater([1,2,3])
// console.log
reater({
    element:document.getElementById("rater"),
    max:5,
    starSize:48,
    // showTip:false,
    step:0.1,
    rating:5,
    marginLeft:20,
    marginTop:20,
})