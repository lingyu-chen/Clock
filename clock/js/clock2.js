// JavaScript Document
var bgNode=document.querySelector(".Js-bg");
var html='<i class="point"></i>';
html=html+'<i style="transform: rotate('+i+'deg)" class="scale2"></i>';
var j=1;
for(var i=6;i<=360;i=i+6)
{
	if(j<5)
	{
		html+='<i style="transform: rotate('+i+'deg)" class="scale"></i>';
		j++;
	}
	else
	{
		html+='<i style="transform: rotate('+i+'deg)" class="scale2"></i>';
		j=1;
	}
}
bgNode.innerHTML=html;