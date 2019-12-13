// JavaScript Document
var yearNode=document.querySelector(".Js-year");
var dayNode=document.querySelector(".Js-day");
var secondfNode=document.querySelector(".Js-second");
var hourMinuteNode=document.querySelector(".Js-hourMinute");
function clock(){
	var myDate=new Date();
	var year=myDate.getFullYear();
	var month=myDate.getMonth();
	month=month+1;
	var date=myDate.getDate();//几日
	var week=myDate.getDay();
	var week_cn="日一二三四五六";
	var hour=myDate.getHours();
	var minute=myDate.getMinutes();
	var second=myDate.getSeconds();
	hourMinuteNode.innerHTML=`${hour}:${minute<10?"0"+minute:minute}`;//模板字符串
	secondfNode.innerHTML=`${second<10?"0"+second:second}`;
	dayNode.innerHTML="星期"+week_cn.charAt(week);
	yearNode.innerHTML=year+"年"+month+"月"+date+"日";
}
clock();
setInterval(clock,1000);