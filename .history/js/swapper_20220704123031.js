
//相应组件

var items = document.querySelector('.swapper').querySelectorAll('.item')
var points = document.querySelectorAll('.adbtn-list')
var all = document.querySelector('.swapper')

var index = 0;
var time = 0;

//封装清除active的函数
 var clearActive = function() {
    for (i = 0; i < items.length; i++ ) {
        items[i].className = 'item'
    }
    for (j = 0; j < points.length; j++ ) {
       points[j].className = 'adbtn-list'
    }
 }

 //改变active 
 var goIndex = function() {
    clearActive()
    items[index].className = 'item active'
    points[index].className = 'adbtn-list active'
 }
 var goRight = function() {
    if(index < 4){
        index++
    } else {
        index = 0
    }
 }

 for(var i = 0; i < points.length; i++){
    points[i].addEventListener('click',function(){
        var newindex = this.getAttribute('data-index')
        index = newindex
        goIndex()
        time = 0;
    })
 }

 //设置定时器
 var timer = 0;

 function play() {
    timer = setInterval(function() {
        time ++;
		if(time == 20 ){
		goRight();
		time = 0;
	    }
    },100)

 }

 //鼠标移入移出自动播放
 all.onmousemove = function() {
    clearInterval(timer)
} 

all.onmouseleave = function() {
    play()
} 
