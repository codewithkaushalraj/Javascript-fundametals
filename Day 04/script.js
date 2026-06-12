 // function

 // normal function OR Function Decleration
 function greet(name="Sir/Madam"){
    console.log("Good Evening ",name);
 }
 greet("raju")
 greet('rani');
 greet()

//  function Expression  OR first class function
 let add=function(a=0,b=0){  // we can set default paremeter
    console.log(a+b);   
 }
 let sub=function(a=0,b=0){
    console.log(a-b);   
 }
//  Arrow Function
 let mul=(a=0,b=0)=>{
    console.log(a*b);  
 }
 let div=(a=0,b=0)=>{
    console.log(a/b);  
 }
 add(15,5)
 sub(15,5)
 mul(15,5)
 div(15,5)
 add()
 mul()

 // One liner function
 let sq=a => a*a
 console.log(sq(5));
 console.log(sq(15));
 console.log(sq(23));
 

 //IIFE : Immediately Invoked function expression

 (function(){
    console.log("This is IIFE"); 
 })(); 
 // IIFE WITH the help of callback
 (()=>console.log("This is IIFE") )();


 // Pure function
 
 let square=(num)=> num*num;
 console.log(square(5));
 console.log(square(8));


 //Impure function
 let total=0;
 function adder(num){
   total+=num;
   return total
 }

 console.log(adder(25));
 console.log(adder(25));
 console.log(adder(25));
 console.log(adder(25));

 // Callback function : When one function you will pass another function as a argument then such type of function is called callback function

//  function main(cb){
//     cb(); 
//    console.log("This is main function"); 
//  }
//  function hero(){
//    console.log("Mai hu hero tera ...");
//  }
//  main(hero)

//--------------------------------------------------

function mainroad(len,cb){
   console.log("This is a main road");
   console.log("Length of road is : ",len);
   cb(len/10);
}

function foothpath(a){
   console.log("This is footpath");  
   console.log("Length of footpath is : ",a);  
}
mainroad(80,foothpath)

function Parent(){
   console.log("I am Parent....");
   function child(){
      console.log("I am your children");
   }
   return child;
   
}

Parent()()


function dada(){
   console.log("I am Your Dada ji..........");
   function papa(){
      console.log("I am your papa ji..........");
      function child(){
         console.log("Its me ..........."); 
      }
      return child
   }
   return papa
}

console.log(dada()()());


 
 
 