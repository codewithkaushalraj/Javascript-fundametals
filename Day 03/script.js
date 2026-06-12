// Loops
// for
// while
// Do while
// for(let i=0;i<5;i++)
//     console.log(i);

// let a=10;
// while(a<20){
    //     console.log("I Love JS");
    //     a++;    
    // }
    
    // Ask a user any number  and print its table 
    
    // let n=Number(prompt("Enter a number"))

    // let i=1;
    // while(i<=10){
    //     console.log(`${n} X ${i} = ${n*i}`);
    //     i++;
    // }

    // take a password from user and check if this true then inside then program will execute in next step otherwise these repetetion will continuously happen 

    // let password="";
    // do{
    //     password = prompt("Enter a Password : ");
    // }while(password !="12345");

    console.log("Password Granted ...");
    console.log("Now You can access the content whatever you want ..");
    console.log("Welcome ...");
    
    
    // Strings
 let name="Kaushal"
 console.log(`Your Name is : ${name}`);
console.log(name.length)    
console.log(name.toUpperCase());
console.log(name.toLowerCase())
console.log(name.includes('K'));
console.log(name.includes('A'));
console.log(name.slice(2,7));

let str="Kaushal raj";
let s=str.split('a')

console.log(s);
console.log(str.split(''));
console.log(str.repeat(5));
console.log(str.startsWith('kau'));
console.log(str.endsWith('raj'));
console.log(str.lastIndexOf('a'));

for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5) break;    
}
for(let i=11;i<=20;i++){
    if(i>15) continue;  
    console.log(i); 
} 



    