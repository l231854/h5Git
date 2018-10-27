var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var oMain = document.getElementsByClassName("main")[0];
var oList = document.getElementsByClassName("list")[0];
var oLi = oList.getElementsByTagName("li");

var timer;
var oLilength = oLi.length;
var index = 0;
var flag = true;
var container = document.getElementsByClassName("container")[0];
function moveImg(dis) {
    flag = false;
    //每次轮播需要的时间
    var time = 400;
    //每一小次移动的时间
    var eachTime = 20;
    var eachDis = dis/(time/eachTime);//每一小次滑动的距离
    var newLeft =oMain.offsetLeft + dis;
    function eachMove(){
        if((dis > 0 && oMain.offsetLeft < newLeft)||(dis < 0 && oMain.offsetLeft > newLeft)){
            oMain.style.left = oMain.offsetLeft + eachDis + 'px';
        }
        else{
            
            clearInterval(timer);
            oMain.style.left=newLeft + 'px';
            if(newLeft == -(520*6)){
                oMain.style.left = -520 + 'px';
            }else if(newLeft == 0){
                oMain.style.left = -2600 + 'px';
            }
            flag = true;
        }
        

    }
        timer = setInterval(eachMove,eachTime);

}

oPrev.onclick = function () {
    if(flag){
    moveImg(520);
    if(index==0){
        index=4;
    }else{
        index--;
    }
    oLiStyle();
}
}

oNext.onclick = function (){
    if(flag){
    moveImg(-520);
    if(index==4){
        index=0;
    }else{
        index++;
    }
    oLiStyle();
}

}
function oLiStyle(){
    var currentLi = oList.getElementsByClassName("active")[0];
    // 找到当前的小圆点变成不选中
    currentLi.className='';
    oLi[index].className = 'active';

}

for(var i=0;i<oLilength;i++){

    // 立即执行函数- 闭包 不用闭包 点击小圆点的index不对
    (function(j){
        // 给每个小圆点添加点击事件 
        oLi[j].onclick = function(){
            var offset = (j-index)*-520;
            index = j;
            console.log(j);
            oLiStyle();

            moveImg(offset);
        }
    })(i);
    
}
timer2 = setInterval(oNext.onclick,2000);
// 鼠标放上去 不定时滑动
container.onmouseover = function (){
    clearInterval(timer2);
}
//鼠标离开定时器启动
container.onmouseout = function (){
    timer2 = setInterval(oNext.onclick,2000);
}

