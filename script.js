function myfun() 
{
var desiredwr=document.getElementById('dwr').value;
var currentwr=document.getElementById('cwr').value;
var matches=document.getElementById('ma').value;

var calc=Math.round(matches*(desiredwr-currentwr)/(100-desiredwr))

document.getElementById('result').innerHTML=calc
}