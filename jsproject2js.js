var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.getElementById("reset");
var p1display=document.getElementById("p1display");
var input=document.querySelector("input");
var p1score=0;
var ws=5;
var gameover=false;
var num=document.querySelector("#num");
p1.addEventListener("click",function()
{if(!gameover)
	{
		p1score++;
p1display.textContent=p1score;
if(p1score===ws)
	{
		p1display.classList.add("winner");
gameover=true;
}
}
});
var p2display=document.getElementById("p2display");
var p2score=0;
p2.addEventListener("click",function()
{
	if(!gameover)
	{p2score++;
p2display.textContent=p2score;
		if(p2score===ws)
	{
		p2display.classList.add("winner");
gameover=true;
}
}
});

reset.addEventListener("click",function()
{
p1score=0;
p2score=0;
p1display.textContent=p1score;
p2display.textContent=p2score;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
gameover=false;
});
function reset()
{



	
}
input.addEventListener("change",function(){
	
	ws=Number(input.value);
num.textContent=input.value;
});