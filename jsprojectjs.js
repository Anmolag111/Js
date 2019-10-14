var button=document.querySelector("button");
var body=document.querySelector("body");
var isBlue=false;
button.addEventListener("click",function()
{
	if(isBlue)
	{body.style.background="white";}
else
{body.style.background="blue";}
isBlue=!isBlue;
});
//*
/*var button=document.querySelector("button");
button.addEventListener("click",function()
{document.body.classList.toggle("blue");
	});
	/*var button=document.querySelector("button");    
var body=document.querySelector("body");
button.addEventListener("click",function()
{document.body.classList.toggle("blue");
	});*/