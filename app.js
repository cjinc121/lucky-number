var inpdob=document.querySelector("#dob");
var inplucky=document.querySelector("#lucky");
var check=document.querySelector("#btn");
var message=document.querySelector(".msg");

check.addEventListener("click",()=>{
  var s=inpdob.value;
  var t=inplucky.value;
  var sum=0;

  if(s && t){
    for(var i=0;i<10;i++)
    {
      if(s[i]!='-')
      sum+=parseInt(s[i]);
     
    }
    if(sum%t==0)
    message.innerText=`${t} is a lucky number!! 🥳 🥳 🥳 `;
    else
    message.innerText=`${t} is not that lucky 😕`;
  }
 else
 message.innerText="Please Enter Both The Fields";
})