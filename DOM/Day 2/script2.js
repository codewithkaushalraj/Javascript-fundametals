const button=document.querySelector('button')
const bulb=document.querySelector('.bulb')

let isOFF=true
// button.addEventListener('click',()=>{
//     if(isOFF){
//     bulb.style.backgroundColor="yellow"
//     bulb.style.boxShadow="0px 0px 50px rgb(255, 247, 0)"
//     button.innerText="OFF"
//     isOFF=false
//     }
//     else{
//          bulb.style.backgroundColor="transparent"
//     bulb.style.boxShadow="none"
//     button.innerText="ON"
//     isOFF=true
//     }

// })


// with the help of Class 
button.addEventListener('click',()=>{
    if(bulb.classList.toggle('lightUp')){
        button.innerText="OFF"
    }
    else button.innerText="ON"
})