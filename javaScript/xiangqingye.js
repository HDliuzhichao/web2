//放大镜
var img1 = document.getElementById("fd");
var img2 = document.getElementById("img2");
var slider = document.getElementById("sliderss");
var Bimg = document.getElementById("Bimg");
var xz=document.getElementsByClassName("xz");
var ddd=document.getElementsByClassName("ddd");
img1.onmouseover=function(){
	slider.style.display='block';
	img2.style.display='block';
 }
img1.onmouseout=function(){
	slider.style.display='none';
	img2.style.display='none';
 }
  
img1.onmousemove=function(ev){//ev是事件对象
	var ev=ev||event;
		  
	var oL=ev.screenX-xz[0].offsetLeft-slider.offsetWidth/2;// offsetWidth 是对象的可见宽度，包滚动条等边线，会随窗口的显示大小改变
	var oT=ev.screenY-ddd[0].offsetTop-slider.offsetHeight/2;
		  
	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight;
		  
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
		
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
}
	var img2 = document.getElementById("img2");
	var sp0=document.getElementById("sp0");
	var sp1=document.getElementById("sp1");
	var fd=document.getElementsByClassName("fd");
	var img11=document.getElementById("img11");
	var mmll=document.getElementById("mmll");
	var num=3;
sp0.onclick=function(){
	img11.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg";
	sp0.style.borderColor="red";
			
	if(num===1){
		sp1.style.borderColor="white";
	}
	num=0;
}
sp1.onclick=function(){
	img11.src="img/pp1.jpeg";
	Bimg.src="img/pp1.jpeg";
	sp1.style.borderColor="red";
	if(num===0){
	    sp0.style.borderColor="white";
	}
	num=1;
}
var spanl=document.getElementById("spanl");
var spanr=document.getElementById("spanr");

spanl.onclick=function(){		
	img11.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg";
	sp0.style.borderColor="#fe6c00";
	sp1.style.borderColor="white";			
	num=0;
}
spanr.onclick=function(){	
	img11.src="img/pp1.jpeg";
	Bimg.src="img/pp1.jpeg";
	sp1.style.borderColor="#fe6c00";
	sp0.style.borderColor="white";	
	num=1;
}

var l = document.getElementById("photo1");
var photo1 = document.getElementById("photo2");
var photo2 = document.getElementById("photo3");
var r = document.getElementById("photo4");

photo1.onmouseover = function(){
	var bigphoto = document.getElementById("bigtu");
	bigphoto.src = "img/pp0.jpeg"
	var parent = photo1.parentNode;
	parent.style.border = "1px solid #ffb557";
}
photo1.onmouseout = function(){
	var parent = photo1.parentNode;
	parent.style.border = "1px solid #fff";
}
photo2.onmouseover = function(){
	var bigphoto = document.getElementById("bigtu");
	bigphoto.src = "img/pp1.jpeg"
	var parent = photo2.parentNode;
	parent.style.border = "1px solid #ffb557";
}
photo2.onmouseout = function(){
	var parent = photo2.parentNode;
	parent.style.border = "1px solid #fff";
}