var d = new Date()
document.getElementById('tdate').valueAsDate = d;
var t = pad(d.getHours(), 2) + ':' + pad(d.getMinutes(), 2);
document.getElementById('time').value = t;

function myfun() 
{
var time = document.getElementById('time').value;
var date = document.getElementById('tdate').value;
var datetime = `${date} ${time}`
var timeobj = new Date(datetime)
var unixTimestamp = Math.floor(timeobj.getTime() / 1000)
var type=document.getElementById('type').value;
  
let timestamp = `<t:${unixTimestamp}:${type}>`
if(!time || !date) timestamp = "Please specify Date and Time!"
document.getElementById('result').value=timestamp
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied: "+copyText.value);
}
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}