// JavaScript Document
var hourNode=document.querySelector(".Js-hours");
var minuteNode=document.querySelector(".Js-minutes");
var secondNode=document.querySelector(".Js-seconds");
function clock(){
	var myDate=new Date();
	var hour=myDate.getHours();
	var minute=myDate.getMinutes();
	var second=myDate.getSeconds();
	console.log(hour);
//	hourNode
//	if(hourNode)
		hourNode.style.transform="rotate("+((360/12/60/60*second)+(360/12/60*minute)+(360/12*hour))+"deg)";
//	if(minuteNode)
		minuteNode.style.transform="rotate("+((360/60/60*second)+(360/60*minute))+"deg)";
//	if(secondNode)
		secondNode.style.transform="rotate("+(360/60*second)+"deg)";
}

clock();
setInterval(clock,1000);