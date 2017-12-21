/**
 * Created by BAIXUE on 2016/9/13.
 */
//var Focus=document.querySelector(".focus"),
//    lb=Focus.querySelector(".lb"),
//    li=lb.querySelector("li"),
//    LBtn=Focus.querySelector(".LBtn"),
//    RBtn=Focus.querySelector(".RBtn"),
//    dot=Focus.querySelector(".dot"),
//    dotLi=dot.querySelectorAll("li");

//
//RBtn.onclick=function(){
//    alert(1);
//};




var Focus=document.querySelector("focus"),
    lb=document.querySelector(".lb"),
    li=document.querySelector("li"),
   //btn=document.querySelector(".btn"),
    RBtn=document.querySelector(".RBtn"),
    LBtn=document.querySelector(".LBtn"),
    dot=document.querySelector(".dot"),
    dotLi=document.querySelectorAll(".dotLi");



RBtn.onclick=function(){
    var curML=  parseInt(getComputedStyle(lb).marginLeft);
    lb.style.marginLeft=curML-600+"px";
};
LBtn.onclick=function(){
    var curML=  parseInt(getComputedStyle(lb).marginLeft);
    lb.style.marginLeft=curML+600+"px";
};


//var Focus=document.querySelector(".focus"),
//    lb=document.querySelector(".lb"),
//    li=document.querySelector("li"),
//    RBtn=document.querySelector(".RBtn"),
//    LBtn=document.querySelector(".LBtn"),
//    dot=document.querySelector(".dot"),
//    dotLi=document.querySelectorAll(".dotLi")




function animation(everyMove){
    moveNum=Math.abs(600/everyMove);
    aniTime=setInterval(function(){
        if(lastNum>=moveNum){
            clearInterval(aniTime);
            lastNum=0;
            flag=true;
            return;
        }
        var curML=parseInt(getComputedStyle(lb).marginLeft);
        lb.style.marginLeft=curML+everyMove+"px";
        lastNum++;
    },20);
    //console.log(moveNum);
}
