/* Curtain */

const btn = document.getElementById("openBtn")
const curtainPanel = document.getElementById("curtainPanel")

btn.onclick = () => {

curtainPanel.classList.add("open")

setTimeout(()=>{

document.querySelectorAll(".panel")[1].classList.remove("hidden")

},2000)

}



/* Flower burst */

function flowerBurst(){

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})

}



/* Music */

const music = document.getElementById("music")

document.getElementById("musicBtn").onclick=()=>{

if(music.paused){
music.play()
}else{
music.pause()
}

}



/* Countdown */

const weddingDate = new Date("Nov 1, 2028 00:00:00").getTime()

setInterval(()=>{

const now = new Date().getTime()

const distance = weddingDate - now

const days = Math.floor(distance/(1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)

document.getElementById("days").innerText = days
document.getElementById("hours").innerText = hours
document.getElementById("minutes").innerText = minutes
document.getElementById("seconds").innerText = seconds

},1000)



/* Scratch Coins */

const coins = document.querySelectorAll(".coin")

coins.forEach(canvas=>{

const ctx = canvas.getContext("2d")

ctx.fillStyle="#c9a227"
ctx.fillRect(0,0,120,120)

canvas.addEventListener("mousemove",scratch)

})

function scratch(e){

let rect = this.getBoundingClientRect()

let x = e.clientX - rect.left
let y = e.clientY - rect.top

let ctx = this.getContext("2d")

ctx.globalCompositeOperation="destination-out"

ctx.beginPath()
ctx.arc(x,y,15,0,Math.PI*2)
ctx.fill()

}



/* Swipe transitions */

let startY = 0

window.addEventListener("touchstart",(e)=>{

startY = e.touches[0].clientY

})

window.addEventListener("touchend",(e)=>{

let endY = e.changedTouches[0].clientY

if(startY-endY>50){
window.scrollBy({top:window.innerHeight,behavior:"smooth"})
}

if(endY-startY>50){
window.scrollBy({top:-window.innerHeight,behavior:"smooth"})
}

})
