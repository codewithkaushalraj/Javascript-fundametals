// Asynchroneous Javascript

// console.log('start')

// setTimeout(()=>{   // in simple word settime out is used for giving a delay
//     console.log('TimeOut')
// },4000)
// console.log('end')

// setTimeout(() => {
//     console.log('1')
// }, 6000);
// setTimeout(() => {
//     console.log('2')
// }, 3000);
// setTimeout(() => {
//     console.log('3')
// }, 8000);

// let data=fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));
//   console.log(data)


let timer=setInterval(()=>{
    console.log("Interval");
    
},1000)

// for stoping the setInterval :
setTimeout(()=>{

    clearInterval(timer)
},8000)


