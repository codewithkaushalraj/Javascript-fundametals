// Promises

// async function dataLao(){
//     let response= await fetch('https://fakestoreapi.com/products')
//     // console.log(response.json())
//     let data =await response.json();
//     console.log(data);
    
// }
// dataLao()



// Create a Promise

// let p1=new Promise(function(resolve,reject){
//     console.log("promise Pending hai....")
//     let result=true
//     setTimeout(() => {
//         if(result) {
//             console.log("Value TRUE");
//             resolve()
//         }

//     else {
//         console.log("Value FALSE"); 
//         reject()
//     }               
//     },3000);
// });

// p1.then(function(){   // If above request is resolved/Executed then this will Executed Otherwise not 
//     console.log("Promise is Fullfilled .........");
    
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){  // This will Execute at the end
//     console.log('Promise END')
// })


//-----------------------------------------

// Order food from Zomato 

//  Order Consformed -> your food is preparing
// I am waiting since order prepared and come to me

// 1. order aa gaya > make a payment
// order nahi aaya -> Complaint karo


// function orderFood(){
//     let myOrder =new Promise(function(resolve,reject){
//         console.log('Order Coming ...........')
//         let orderStatus=true
//         setTimeout(() => {
//             if(orderStatus){
//                 console.log('Condition is true .........')
//                 resolve()
//             }
//             else{
//                 console.log('Condition is false .........')
//                 reject()
//             }
//         },3000);
//     })
//     .then(function(res,rej){
//         console.log("Delivery Boy Coming .............")
//         console.log("Now make a Payment")
//         let paymentStatus=true;
//         setTimeout(function(){
//             if(paymentStatus){
//             console.log("payment failed ......."); 
//             // res() 
//         }
//         else{
//             console.log("Payment Failed ..........")
//             // rej()
//         }
//         },3000)
//     })
//     .then(function(res,rej){
//     })
//     .then(function(){
//         setTimeout(function(){
//             console.log("Now Give Your Feedback ...........")
//         },4000)
//     })
//     .catch(function(){
//         console.log("Order Failed .......");        
//     })
// }
// orderFood()


try {
    let response=fetch('https://fakestoreapi.com/products')
.then(function(res){
    console.log("Data aa gaya")
    return res.json();
})
.then(function(data){
    console.log(data)
})
} catch (error) {
    console.error(error)
}