function slider(selector){
    console.log(selector);
    // 保存全局变量
    var container;
    var wrapper;
    var slides;
    var index=0;
    var buttons;
    var defaluts = {
        speed : 1000,
        delay : 2000,
    }
    var flag = false;
    var timer;
    // 初始化轮播图
    function init(){
        container = document.querySelector(selector)
        wrapper = container.querySelector(".slider-wrapper");
        slides = container.querySelectorAll(".slider-slide");
        buttons = container.querySelectorAll(".slider-btn");
        // 应该在开头和结尾添加图片
        clone();
        // 设置宽度
        setwidth();
        // 移动wrappe
        moveWrappe();
        // 自动播放
        autoplay();
        // 响应试
        resize();
        buttons[0].addEventListener('click',function(){
            buttonClick('left');
        });
        buttons[1].addEventListener('click',function(){
            buttonClick('right')

        });
        // 检测是否切出当前页面
        visibilityChange();
    }
    // 检测是否切出当前页面
    function visibilityChange(){
        window.addEventListener("visibilitychange",function(){
            if(document.hidden){
                clearTimeout(timer);
            }else{
                clearTimeout(timer);
                autoplay();
            }
        });
    }

    function buttonClick(direction){
        if(!flag)
        {
            moveSlide(direction);
            clearTimeout(timer);
            autoplay();
        }
    }
    // 响应试-页面放大缩小 tu p
    function resize(){
        window.addEventListener("resize",function(){
            setwidth();
            wrapper.style.transitionDuration='0ms';
            moveWrappe();
        });
    }
    // 自动播放
    function autoplay(){
        timer = setTimeout(function(){
            // 滑动
            moveSlide('right');
            autoplay();

        },defaluts.delay + defaluts.speed);
    }
    // 播放滑动slider
    function moveSlide(direction){
        direction == 'right' ? index++ : index--;
        wrapper.style.transitionDuration = defaluts.speed + 'ms';
        flag=true;
        setTimeout(function(){
            flag=false;
        },defaluts.speed);
        if(index<0 || index >= slides.length){
            setTimeout(function(){
                if(index < 0){
                    index=slides.length - 1;
                }
                if(index >= slides.length){
                    index=0;
                }
                wrapper.style.transitionDuration = '1ms';
                moveWrappe();

            },defaluts.speed);
        }
        moveWrappe();
    }
    // 复制图片
    function clone(){
    // 只克隆当前 不克隆子节点是false /true
    var firstElement = wrapper.firstElementChild.cloneNode(true);
    var lastElement = wrapper.lastElementChild.cloneNode(true);
   
    wrapper.appendChild(firstElement);
    wrapper.insertBefore(lastElement,slides[0]);
    }
    // 设置宽度
    function setwidth(){
        var wrapperWidth = 0;
        var sliders = container.querySelectorAll(".slider-slide");
        for(var i =0;i<sliders.length;i++){
            sliders[i].style.width = container.offsetWidth +'px';
            wrapperWidth += sliders[i].offsetWidth;
        }
        wrapper.style.width = wrapperWidth + 'px';

    }
    // 移动wrappe
    function moveWrappe(){
        var px = 0;
        var sliders = container.querySelectorAll('.slider-slide');
        for(var i=0;i <= index;i++){
            px += sliders[i].offsetWidth;
        }
        wrapper.style.transform = 'translate3d(-'+px+'px,0,0)';
    }
    init()

}

