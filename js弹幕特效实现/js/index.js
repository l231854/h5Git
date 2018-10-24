var oBtn = document.getElementsByClassName("btn")[0];
var oInput = document.getElementsByClassName("input")[0];
var oMain = document.getElementsByClassName("main")[0];
var oMainW = oMain.offsetWidth;
oBtn.onclick = send;//这个地方不能加（）这个代表执行


oInput.onkeydown = function(e){
    // 键盘输入enter
    if(e.keyCode == 13){
        send();
    }
}
function send(){
    console.log("发送"); 
  //   正则表达式/在这里面写/ ^以什么开始 \s-空格 $是tab键 -(/^\s+$/)只包含空格和tab键
    if(oInput.value.length <=0 || (/^\s+$/).test(oInput.value)){
        alert("内容不能为空！");
        return;
    }
    createSpan(oInput.value);
    oInput.value="";
  }
// 用来创建弹幕元素
function createSpan(text){
    var oSpan = document.createElement("span");
    oSpan.innerText=text;
    //timing color top font-size left 
    console.log(oMainW);
    oSpan.style.left = oMainW+"px";
    oMain.appendChild(oSpan);
    spanStyle(oSpan);
}

function spanStyle(dom) {

    dom.style.top=random(0,150)+"px";
    dom.style.color = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
    dom.style.fontSize=random(15,30)+'px';

    var domW = dom.offsetWidth;
    console.log("domW="+domW);
    var speed = [0,1,2][random(0,2)];
    dom.timer = setInterval(function(){
        switch (speed) {
            case 0:
            dom.style.left=dom.offsetLeft - 2 + 'px';
            break;
            case 1:
            dom.style.left=dom.offsetLeft - 4 + 'px';
            break;
            case 2:
            dom.style.left=dom.offsetLeft - 6 + 'px';
            break;
        }
        console.log("speed="+speed);
        console.log("dom.offsetLeft="+dom.offsetLeft);
        console.log("dom.style.left="+dom.style.left);

        if(dom.offsetLeft <=-domW){
            clearInterval(dom.timer);
            oMain.removeChild(dom);
        }
        console.log("domW="+domW);

    },20);
    
}

// 随机取整数
function random(start,end) {
    return Math.floor(Math.random()*(end+1-start)+start);
}