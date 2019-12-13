// JavaScript Document
var countNode=document.querySelector(".Js-count");
var otherDate=new Date('2020/7/24');
/*var otherDate=new Date('2022/9/10');*/
function countDown(){
	var myDate=new Date();
	var year=myDate.getFullYear();
	var month=myDate.getMonth();
	month=month+1;
	var date=myDate.getDate();
	var hour=myDate.getHours();
	var minute=myDate.getMinutes();
	var second=myDate.getSeconds();
	var mouthDown=otherDate.getMonth()+1;
	var yearDown=otherDate.getFullYear();
	var dayDown=otherDate.getDate();
	console.log(yearDown);
	/*var olimpicYear=2020;
	var olimpicYear=2020;*/
	/*var mouthotherDate-myDate*/
	/*console.log();*/
//	var yearDown=2020-year;
//	
//	var mouthDown=
	var secondDown=60-second;
	var minuteDown=59-minute;
	var hourDown=23-hour;
	if(date<=otherDate.getDate())
		dayDown=otherDate.getDate()-date;
	else
		{
			mouthDown=mouthDown-1;
			dayDown=otherDate.getDate()+30-date;
		}
	if(month<=mouthDown)
		mouthDown=mouthDown-month;
	else
		{
			yearDown=yearDown-1;
			mouthDown=mouthDown+12-month;
		}
	yearDown=yearDown-year;
	if(otherDate.getMonth()+1>=month)
		{
			for(var i=otherDate.getMonth();i>=month;i--)
				{
				if(i==1||i==3||i==5||i==8||i==7||i==10||i==12)
					dayDown=dayDown+1;
				}
		}
	else
		{
			for(var j=otherDate.getMonth();j>0;j--)
				{
				if(j==1||j==3||j==5||j==8||j==7||j==10||j==12)
					dayDown=dayDown+1;
				}
			for(var m=month;m<=12;m++)
				{
				if(m==1||m==3||m==5||m==8||m==7||m==10||m==12)
					dayDown=dayDown+1;
				}
		}
	if(yearDown>0)
		{
			for(var n=otherDate.getFullYear()-1;n>=year;n--)
				if(n%4==0&&n%100!=0)
					dayDown=dayDown+1;
		}
	console.log(yearDown);
	countNode.innerHTML="距离2020年奥运会还有"+(yearDown*365+mouthDown*30+dayDown-1)+"天"+" "+hourDown+"小时"+minuteDown+"分"+secondDown+"秒";
	/*countNode.innerHTML="距离2022年亚运会还有"+(yearDown*365+mouthDown*30+dayDown-1)+"天"+" "+hourDown+"小时"+minuteDown+"分"+secondDown+"秒";*/
}
countDown();
setInterval(countDown,1000);






