var screendisplay=document.getElementById("screen");
console.log(screendisplay);
var btn=document.querySelectorAll("button");
console.log(btn);

for(item of btn){
    item.addEventListener("click", function name(e){
        buttontext=e.target.innerText;
        console.log(buttontext);
        // screendisplay.value=screendispaly.value+button;
        if(buttontext == "="){
            screendisplay.value=eval(screendisplay.value);
        }
        else if(buttontext=="C"){
            screendisplay.value="";
        }
        else if(buttontext=="Del"){
            screendisplay.value=screendisplay.value.slice(0,-1);
        }
        else{
            screendisplay.value=screendisplay.value+buttontext;
        }
    })
}