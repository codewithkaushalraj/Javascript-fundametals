let par=document.querySelector('main')
par.addEventListener('click',(event)=>{
    console.log(event.target)
})

setInterval(()=>{
    console.log("i am setInterval")
},1000)
setTimeout(()=>{
    console.log("i am Timeout..")
},10000)