function hover(ob,abtn){
	var oBox=document.getElementById(ob);
	var aBtn=oBox.getElementsByTagName(abtn);
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].onmouseover=function(){
			this.style.cssText="background:url(images/nav_new_hover.jpg) center";	
			
		}	
		aBtn[i].onmouseout=function(){
			this.style.background="";	
		}	
	}
}
function auto(box,btn,wrap){
	var oWrap=document.getElementById(wrap);
	var oBox=document.getElementById(box);
	var oBtn=document.getElementById(btn);
	var aDiv=oBox.getElementsByTagName('a');
	var aBtn=oBtn.getElementsByTagName('li');
	var num=0;
	var timer=null;
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			aDiv[i].style.display='none';	
		}	
		aBtn[num].className='on';
		aDiv[num].style.display='block';
	}
	for(var i=0;i<aBtn.length;i++){
		(function(a){
			aBtn[i].onmouseover=function(){
				num=a;
				tab();
			}
		})(i)	
	}
	function clock(){
		num++;
		if(num==aBtn.length){
			num=0;	
		}	
		tab();
	}
	timer=setInterval(clock,1000);
	oWrap.onmouseover=function(){
		clearInterval(timer);	
	}
	oWrap.onmouseout=function(){
		timer=setInterval(clock,1000);	
	}
}
function table(btn1,div1,div2){
	var oBox=document.getElementById(div1);
	var oBtn=document.getElementById(btn1);
	var aDiv=oBox.getElementsByTagName(div2);
	var aBtn=oBtn.getElementsByTagName('li');
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			aDiv[i].style.display='none';	
		}	
		aBtn[num].className='active';
		aDiv[num].style.display='block';
	}
	for(var i=0;i<aBtn.length;i++){
		(function(a){
			aBtn[i].onmouseover=function(){
				num=a;
				tab();
			}
		})(i)	
	}
}
function hiden(btn3){
	var oBtn=document.getElementById(btn3);		
	var aBtn=oBtn.getElementsByTagName('li');
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].getElementsByTagName('div')[0].style.display='block';
				aBtn[i].getElementsByTagName('h2')[0].style.display='none';
			}
			var oDiv=this.getElementsByTagName('div')[0];	
			var oH2=this.getElementsByTagName('h2')[0];
			oDiv.style.display='none';
			oH2.style.display='block';
		}
	}
	
}
function button(btn1,btn2,pic){
	var aBtn1=document.getElementById(btn1);
	var aBtn2=document.getElementById(btn2);
	var oBox=document.getElementById(pic);
	var aImg=oBox.getElementsByTagName('img');
	num=0;
	function tab1(){
		for(var i=0;i<aImg.length;i++){
			aImg[i].style.display='none';	
		}	
		aImg[num].style.display='block';
	}
	aBtn1.onclick=function(){
		num--;	
		if(num==-1){
			num=aImg.length-1;	
		}
		tab1();
	}	
	aBtn2.onclick=function(){
		num++;
		if(num==aImg.length){
			num=0;	
		}	
		tab1();
	}
}
function clik(clik1,clik){
	var oBtn=document.getElementById(clik1);
	var oDiv=document.getElementById(clik);
	oBtn.onclick=function(){
		if(oDiv.style.display=='block'){
			oDiv.style.display='none';	
		}else{
			oDiv.style.display='block';	
		}	
	}	
}