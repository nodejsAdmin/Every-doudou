/**
 * Created by BAIXUE on 2016/9/12.
 */
    //需求分析：
    //1,有左右按钮的事件触发
    //2，左右按钮触发效果
    //3，有切换效果
    //4，过渡效果




    //获得元素
var Focus=document.querySelector(".focus"),
    lb=Focus.querySelector(".lb"),
    li=lb.querySelectorAll("li"),
    LBtn=Focus.querySelector(".LBtn"),
    RBtn=Focus.querySelector(".RBtn"),
    dot=Focus.querySelector(".dot"),
    dotLi=dot.querySelectorAll("li");

var //everyMove=30,//每次移动距离
   //moveNum,//移动次数
    aniTime,//动画时间
    lastNum= 0,//动画计时器累加数
    //moveWidth=600;//移动宽
     flag=true,
     imgNum= 0,//图片过度计数器
     lbw=parseInt(getComputedStyle(lb).width),//轮播总宽
     dotNum= 0,//焦点按钮计时器
    autoTime;


//console.log(getComputedStyle(lb).width);   //检查

//右按钮事件
RBtn.onclick=function(){
    if(flag){
        flag=false;
        if(imgNum>=li.length-1){
            lb.style.marginLeft=0+"px";//轮播初始化位置
            imgNum=0;//过度图片计数器初始化
        }
        animation(600,-30);//执行动画
        imgNum++;
        if(dotNum>=dotLi.length-1){//控制焦点按钮右面界限
            dotNum=-1;
        }
        noBg();
        dotLi[dotNum+1].style.backgroundColor="#3cf";
        dotNum++;
    }
};
//左按钮事件
LBtn.onclick=function(){
    if(flag){
        flag=false;
        if(imgNum<=0){
           lb.style.marginLeft=-lbw+600+"px";//轮播初始化位置
            imgNum=li.length-1;//过度图片计数器初始化
        }
        animation(600,30);//执行动画
        imgNum--;
        if(dotNum<=0){//控制焦点按钮右面界限
            dotNum=dotLi.length;
        }
        noBg();//设置所有焦点按钮背景色为白色
        dotNum--;
        dotLi[dotNum].style.backgroundColor="#3cf";
    }
};
//焦点按钮事件
for(var i=0;i<dotLi.length;i++){//每个角点按钮添加事件
    dotLi[i].index=i;
    dotLi[i].onclick=function(){
      noBg();
        this.style.backgroundColor="#3cf";
        if(imgNum>=li.length-1){
            lb.style.marginLeft=0+"px";//轮播初始化位置
            imgNum=0;//过度图片计数器初始化
        }
        if(this.index-dotNum>=0){
            var W=Math.abs((this.index-dotNum)*600);
            animation(W,-100);
        }else{
            var W=Math.abs((this.index-dotNum)*600);
            animation(W,100);
        }
        dotNum=this.index;
        imgNum=this.index;
    }
}
//动画过渡效果
function animation(moveWidth,everyMove){
   var moveNum=Math.abs(moveWidth/everyMove);
    aniTime=setInterval(function(){
        if(lastNum>=moveNum){
             clearInterval(aniTime);//停止定时器
            lastNum=0;//重新初始化定时器计数器
            flag=true;
            return;
        }
        var curML=parseInt(getComputedStyle(lb).marginLeft);
        lb.style.marginLeft=curML+everyMove+"px";
        lastNum++;
    },20)
}

function noBg(){
    for(var i=0;i<dotLi.length;i++){
        dotLi[i].style.backgroundColor="#fff";
    }
}

//轮播自动播放

function autoPlay(){
    autoTime=setInterval(function(){
        RBtn.onclick();

    },1000);
}
autoPlay();
//鼠标悬停


Focus.onmouseover=function(){
    clearInterval(autoTime);
};
Focus.onmouseout=function(){
    autoPlay();
}
