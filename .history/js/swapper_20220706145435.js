
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


//设置tabcontral的点击切换
 var matchSection = document.querySelector('.match-setction')
 var tabitemSubnav = matchSection.querySelector('.item-subnav')

 var tabactiveitem = tabitemSubnav.querySelector('.active')
 //这里拿到大的块进行事件委托处理
 tabitemSubnav.onmousemove = function(event) {
    var  target = event.target
    if (target.classList.contains('item')){
        //取消其他active的方法
        //1.使用for循环遍历item然后取消
        // 2.使用querySelector（'.active'）来进行取消
        // 3.推荐使用的 使用一个变量记录着active的变化 然后来取消

        // 这里进入item 取消其他item的active
        tabactiveitem.classList.remove('active')

        //着里进入那个item 给那个item添加activ
        target.classList.add('active')

        //这里将最新的点击对象赋值给tabactiveitem 方便下次取消item的active
        tabactiveitem = target
    }

 }

