var tabs = document.getElementById("tabs").getElementsByTagName("li");

var lists = document.getElementById("lists").getElementsByTagName("ul");

for (var i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}

function showlist(){
    console.log("showlist");
    //先让所有的liclass都为空 让当前选中的为active
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]==this){
            tabs[i].className="active"; 
            lists[i].className="clearfix active";
        }else{
            tabs[i].className="";
            lists[i].className="clearfix";
        }
    }
}
var seckillNav = document.getElementById("seckillNav");
// 页面滚动事件
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop||window.pageYOffset||document.documentElement.scrollTop||0;
    if(scrollTop>=260){
        seckillNav.className= "seckill-nav seckill-navfixed";
    }else{
        seckillNav.className= "seckill-nav";

    }
    console.log(scrollTop);
} 


