function submitComplaint(e){

e.preventDefault();

let id = Math.floor(Math.random()*10000);

alert("Complaint Submitted Successfully. Your ID is: " + id);

}

function trackComplaint(){

let id=document.getElementById("cid").value;

document.getElementById("status").innerHTML=

"<h4>Status : Pending</h4>";

}