async function sendMessage(){

let input=document.getElementById("userInput");

let question=input.value;

let response=await fetch("/api/chat.js",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
question
})
});

let data=await response.json();

document.getElementById("chat-messages").innerHTML +=
"<p><b>You:</b> "+question+"</p>";

document.getElementById("chat-messages").innerHTML +=
"<p><b>Aravind AI:</b> "+data.answer+"</p>";

input.value="";
}
