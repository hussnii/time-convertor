const input=document.getElementById("input");
const mintohr=document.getElementById("mintohr");
const mintosec=document.getElementById("mintosec");
const sectohr=document.getElementById("sectohr");
const sectomin=document.getElementById("sectomin");
const hrtosec=document.getElementById("hrtosec");
const hrtomin=document.getElementById("hrtomin");
let text=document.getElementById("text");
let output=document.getElementById("output");


function convertor(){
  let value=document.getElementById("input").value;
  value=Number(value);
if(input.value.trim() === ""){
  text.textContent="please enter the number you did not enter any thing yet";
console.log(text.textContent);}
else if( isNaN(value)){
  text.textContent="please Enter the valid number";
console.log(text.textContent);}
else if(mintohr.checked){
   text.textContent=(value/60)  + " hr";
  console.log(text.textContent)
}
else if(mintosec.checked){
   text.textContent=(value*60)  + " sec";
  console.log(text.textContent)
}
else if(sectohr.checked){
   text.textContent=(value/3600)+ " hr";
  console.log(text.textContent )
}else if(sectomin.checked){
   text.textContent=(value/60)+ " min";
  console.log(text.textContent )
}else if(hrtosec.checked){
   text.textContent=(value*3600) +" sec ";
  console.log(text.textContent)
}else if(hrtomin.checked){
   text.textContent=(value*60) +" min";
  console.log(text.textContent) }
else {
    text.textContent = "Please select a conversion type.";
    console.log(text.textContent);
  }
}
function reset(){
  input.value = "";
  text.textContent = "";
  output.textContent = "";
  console.log("Input reset");
}
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
button1.addEventListener("mouseover",
function(){
output.textContent="you are going to click the number please make sure before clicked it";
console.log(output.textcontent);
});
button2.addEventListener("mouseover",
function(){
output.textContent="you are going to cancel the value please make sure before clicked it";
console.log(output.textcontent);
});
button2.addEventListener("mouseout",
function(){
output.textContent="Thank you for using this time unit convertor";
console.log(output.textcontent);
});
button1.addEventListener("mouseout",
function(){
output.textContent="";
console.log(output.textcontent);
});