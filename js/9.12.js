/**
 * Created by BAIXUE on 2016/9/12.
 */
    //���������
    //1,�����Ұ�ť���¼�����
    //2�����Ұ�ť����Ч��
    //3�����л�Ч��
    //4������Ч��




    //���Ԫ��
var Focus=document.querySelector(".focus"),
    lb=Focus.querySelector(".lb"),
    li=lb.querySelectorAll("li"),
    LBtn=Focus.querySelector(".LBtn"),
    RBtn=Focus.querySelector(".RBtn"),
    dot=Focus.querySelector(".dot"),
    dotLi=dot.querySelectorAll("li");

var //everyMove=30,//ÿ���ƶ�����
   //moveNum,//�ƶ�����
    aniTime,//����ʱ��
    lastNum= 0,//������ʱ���ۼ���
    //moveWidth=600;//�ƶ���
     flag=true,
     imgNum= 0,//ͼƬ���ȼ�����
     lbw=parseInt(getComputedStyle(lb).width),//�ֲ��ܿ�
     dotNum= 0,//���㰴ť��ʱ��
    autoTime;


//console.log(getComputedStyle(lb).width);   //���

//�Ұ�ť�¼�
RBtn.onclick=function(){
    if(flag){
        flag=false;
        if(imgNum>=li.length-1){
            lb.style.marginLeft=0+"px";//�ֲ���ʼ��λ��
            imgNum=0;//����ͼƬ��������ʼ��
        }
        animation(600,-30);//ִ�ж���
        imgNum++;
        if(dotNum>=dotLi.length-1){//���ƽ��㰴ť�������
            dotNum=-1;
        }
        noBg();
        dotLi[dotNum+1].style.backgroundColor="#3cf";
        dotNum++;
    }
};
//��ť�¼�
LBtn.onclick=function(){
    if(flag){
        flag=false;
        if(imgNum<=0){
           lb.style.marginLeft=-lbw+600+"px";//�ֲ���ʼ��λ��
            imgNum=li.length-1;//����ͼƬ��������ʼ��
        }
        animation(600,30);//ִ�ж���
        imgNum--;
        if(dotNum<=0){//���ƽ��㰴ť�������
            dotNum=dotLi.length;
        }
        noBg();//�������н��㰴ť����ɫΪ��ɫ
        dotNum--;
        dotLi[dotNum].style.backgroundColor="#3cf";
    }
};
//���㰴ť�¼�
for(var i=0;i<dotLi.length;i++){//ÿ���ǵ㰴ť����¼�
    dotLi[i].index=i;
    dotLi[i].onclick=function(){
      noBg();
        this.style.backgroundColor="#3cf";
        if(imgNum>=li.length-1){
            lb.style.marginLeft=0+"px";//�ֲ���ʼ��λ��
            imgNum=0;//����ͼƬ��������ʼ��
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
//��������Ч��
function animation(moveWidth,everyMove){
   var moveNum=Math.abs(moveWidth/everyMove);
    aniTime=setInterval(function(){
        if(lastNum>=moveNum){
             clearInterval(aniTime);//ֹͣ��ʱ��
            lastNum=0;//���³�ʼ����ʱ��������
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

//�ֲ��Զ�����

function autoPlay(){
    autoTime=setInterval(function(){
        RBtn.onclick();

    },1000);
}
autoPlay();
//�����ͣ


Focus.onmouseover=function(){
    clearInterval(autoTime);
};
Focus.onmouseout=function(){
    autoPlay();
}
