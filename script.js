let a  = document.querySelector("#bulb")

let b = document.querySelector("button")

let flag=0
b.addEventListener("click",function(){
    if (flag==0){
        a.style.backgroundColor="yellow"
        b.innerHTML="Oh you clicked"
        flag=1
    }
    else{
        a.style.backgroundColor="yellowgreen"
        b.innerHTML="Click Me!"  
        flag=0
    }
})

function makeBubble(){
let clutter="";

for(let i=1;i<=120;i++){
    let random=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${random}</div>`;
}

document.querySelector("#mainplayarea").innerHTML=clutter;
}


makeBubble();