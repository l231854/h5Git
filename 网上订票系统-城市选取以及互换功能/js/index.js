var oChange = document.getElementsByClassName("change")[0];
// 把类数组转换为数组-因为类数组没有数组的一些方法
  oSpan =Array.prototype.slice.call(document.getElementsByTagName("span"));
var oCard = document.getElementsByClassName("card")[0];
var oCancle = document.getElementsByClassName("cancle")[0];
var oUl = document.getElementsByTagName("ul")[0];
var oAcative;
var onOff = false;
    deg = 0;
oChange.onclick=function(){
    console.log("oChange");
    onOff = !onOff;
    // forEach用来循环数组的 function(遍历的每个对象,索引值)
    oSpan.forEach(function(ele,index) {
        ele.className =onOff?"after":"before";
        // if(onOff){
        //     ele.className = "after";
        // }
        // else{
        //     ele.className = "before";
        // }
    });
    deg+=180;
    oChange.style.transform="rotate(" + deg +"deg)";
}

oSpan.forEach(function(ele,index){
    ele.onclick=function(){
        console.log("oSpan");
        oCard.style.left="0";
        ele.classList.add("active");
        oAcative = document.getElementsByClassName("active")[0];
        console.log(oAcative);
    };
    
})

oCancle.onclick = function(){
    oCard.style.left="100%"; 
    oAcative.classList.remove("active");
}

oUl.addEventListener("click",function(e){
    var clickLi = e.target;
    console.log(clickLi);
    //nodeName target的标签 都是大写字母
    if(clickLi.nodeName == "LI"){
        console.log(clickLi.innerText);
        oCard.style.left="100%"; 
        oAcative.innerText=clickLi.innerText;
        oAcative.classList.remove("active");
    }
});