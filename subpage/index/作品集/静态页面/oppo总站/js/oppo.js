// JavaScript Document
window.onload=function(){
	var obtn=document.getElementsByTagName('input');
	var odiv=document.getElementsByTagName('h5');
	var oBtn=document.getElementById('btn');
	var aBtn=oBtn.getElementsByTagName('li');
	var oBtn1=document.getElementById('btn1');
	var oWrap=document.getElementById('wrap');
	var oBtn2=document.getElementById('btn2');
	var oBox=document.getElementById('box');
	var num=0;
	var timer=null;
	for(var i=0 ;i<obtn.length;i++){
		obtn[i].index=i;
		obtn[i].onclick=function(){
			for(var j=0;j<obtn.length;j++){
				obtn[j].className='';
				odiv[j].className='';
				}
			this.className='click';
			odiv[this.index].className='block';
			}
		}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';	
		}	
		aBtn[num].className='on';
		oBox.src='images/'+(num+1)+'.jpg';
	}
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			num=this.index;
			tab();
		}	
	}
	oBtn1.onclick=function(){
		num--;
		if(num==-1){
			num=aBtn.length-1;	
		}	
		tab();
	}
	function clock(){
		num++;
		if(num==aBtn.length){
			num=0;	
		}	
		tab();
	}
	oBtn2.onclick=function(){
		clock();	
	}
	timer=setInterval(clock,1000);
	oWrap.onmouseover=function(){
		clearInterval(timer);	
	}
	oWrap.onmouseout=function(){
		timer=setInterval(clock,1000);	
	}
}