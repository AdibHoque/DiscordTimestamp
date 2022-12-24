
function myfun() 
{
var time = document.getElementById('time').value;
var date=document.getElementById('date').value;
var datetime = Date.now()
var timeobj = new Date(datetime)
var type=document.getElementById('type').value;

var v=`${time} ${date} ${type}`

document.getElementById('result').innerHTML=datetime
}