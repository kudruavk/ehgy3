let knop=document.createElement("div")
knop.innerHTML="nazhmi"
let block=document.createElement("div")
let body=document.querySelector("body")
body.append(knop)
body.append(block)
knop.classList=("knop")
block.classList=("kvad")

let cveta=["red","orange","blue","green"]
knop.addEventListener("click", function(){
    let ran=Math.floor(Math.random()*3)
    block.style.backgroundColor=cveta[ran]
})