window.onload = function () {
    var next = document.getElementsByClassName("next-pic")[0]; //下一张
    var pre = document.getElementsByClassName("pre-pic")[0]; //上一张
    var img = document.getElementsByClassName("carousel-img")[0];
    var index = 0;
    var timer; //计时器

    var line = document.querySelectorAll(".carousel-list li");
    var li = document.querySelectorAll(".carousel-img li");
    var li_class_name = [];
    for (var i = 0; i < li.length; i++) {
        li_class_name.push(li[i].className);
    }

    function nextPic(){
        li_class_name.unshift(li_class_name[5]);
        li_class_name.pop();
        for (var i = 0, len = li.length; i < len; i++) {//把类名重新设置上去
            li[i].setAttribute("class", li_class_name[i]);
        }
        index++;
        if (index > 5) {
            index = 0;
        }
        lineColor();
    }

    function prePic(){
        li_class_name.push(li_class_name[0]);//向数组的最后一个位置插入一个值
        li_class_name.shift();//把数组的第一个元素删除
        for (var i = 0, len = li.length; i < len; i++) {
            li[i].setAttribute("class", li_class_name[i]);
        }
        index--;
        if (index < 0) {
            index = 5;
        }
        lineColor();
    }

    next.onclick = nextPic;
    pre.onclick = prePic;

    function lineColor() {
        for (var item of line) {
            item.style.backgroundColor = "#fff";
        }
        line[index].style.backgroundColor = "#fe6c00";
    }
    lineColor();

    timer = setInterval(nextPic,2000);
    img.onmouseover = function(){
        clearInterval(timer);
    };

    img.onmouseout = function(){
        timer = setInterval(nextPic,2000);
    };
    var clickList = document.getElementsByClassName("carousel-list")[0];
    clickList.onmouseover = function(){
        clearInterval(timer);
    };
    clickList.onmouseout = function () {
        timer = setInterval(nextPic,2000);
    };

    var button = document.getElementsByClassName("button-wrapper")[0];
    button.onmouseover = function () {
        clearInterval(timer);
    };

    button.onmouseout = function () {
        timer = setInterval(nextPic,2000);
    };

    function changeColor1(){
        for(var j=0;j<index;j++){
            index++;
            prePic();
        }
        index=0;
        lineColor();
    }
    function changeColor2(){
        if(index>1) {
            index = index - 1;
            for (var k = 0; k < index; k++) {
                prePic();
                index++;
            }
        }
        else{
            index=1-index;
            for (var r = 0; r < index; r++) {
                nextPic();
                index--;
            }
        }
        index=1;
        lineColor();
    }
    function changeColor3(){
        if(index>2) {
            index = index - 2;
            for (var l = 0; l < index; l++) {
                prePic();
                index++;
            }
        }
        else{
            index=2-index;
            for (var r = 0; r < index; r++) {
                nextPic();
                index--;
            }
        }
        index=2;
        lineColor();
    }
    function changeColor4(){
        if(index>3) {
            index = index - 3;
            for (var p = 0; p < index; p++) {
                prePic();
                index++;
            }
        }
        else{
            index=3-index;
            for (var r = 0; r < index; r++) {
                nextPic();
                index--;
            }
        }
        index=3;
        lineColor();
    }
    function changeColor5(){
        if(index>4) {
            index = index - 4;
            for (var q = 0; q < index; q++) {
                prePic();
                index++;
            }
        }
        else{
            index=4-index;
            for (var r = 0; r < index; r++) {
                nextPic();
                index--;
            }
        }
        index=4;
        lineColor();
    }
    function changeColor6(){
        index=5-index;
        for(var w=0;w<index;w++){
            index--;
            nextPic();
        }
        index=5;
        lineColor();
    }
    line[0].onclick=changeColor1;
    line[1].onclick=changeColor2;
    line[2].onclick=changeColor3;
    line[3].onclick=changeColor4;
    line[4].onclick=changeColor5;
    line[5].onclick=changeColor6;

    /**
     * select 事件
     */
    var select = document.querySelector(".select-fee select");
    var fee = document.getElementById("fee");
    select.onchange = function () {
        fee.innerText = this.value;
    };
    //鼠标悬停事件

}