
//轮播图的操作
//获取到swipper对象

var swapperEl = document.querySelector('.swapper')
var adbtnEl = document.querySelector('.adbtn')

adbtnEl.onmouseover = function(event) {
    var itemEl = event.target
    itemEl.classList.add('active')
}














//设置lefttabcontral的点击切换
 var matchSectionleft = document.querySelector('.match-left')
 var tabitemSubnavleft = matchSectionleft.querySelector('.item-subnav')
 tabcontral(tabitemSubnavleft)

//设置右边tabcontral的鼠标进入切换
var matchSectionright = document.querySelector('.match-right')
var tabitemSubnavright = matchSectionright.querySelector('.item-subnav')
tabcontral(tabitemSubnavright)

 
 //这里拿到大的块进行事件委托处理
 //这里将切换分装成一个函数 全部都能调用
 function tabcontral(object) {
    var tabactiveitem = object.querySelector('.active')
    object.onmousemove = function(event) {
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
 }


