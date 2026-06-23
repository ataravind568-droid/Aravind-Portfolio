function sendMessage(){

let input=document.getElementById("userInput");

let msg=input.value;

document.getElementById("chat-messages").innerHTML+=
"<p><b>You:</b> "+msg+"</p>";

document.getElementById("chat-messages").innerHTML+=
"<p><b>Aravind AI:</b> Thanks for your question. AI integration is coming soon!</p>";

input.value="";
}
