
function myfun() 
{
var time = document.getElementById('time').value;
var date = document.getElementById('date').value;
var datetime = `${date} ${time}`
var timeobj = new Date(datetime)
//var unixTimestamp = Math.floor(datetime.getTime() / 1000)
var type=document.getElementById('type').value;

document.getElementById('result').value=timeobj.getTime()
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied: "+copyText.value);
}
