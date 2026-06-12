console.log("Hello Kaushal");
console.warn("This is warning")
console.error("This is error")

console.table(["kaushal","modhi","sonu","golu","monu"])

// alert("this is Alert");

let x=100;
let y=30;
// Operators
console.log("Arithmatic Operator")
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

console.log("Assignment operator");
let a=10;
console.log(a);
a+=5
console.log(a);
a-=5
console.log(a);
a*=5
console.log(a);
a/=5
console.log(a);
console.log("Comparision operator");
console.log(x>y);
console.log(x>=y);
console.log(x<y);
console.log(x<=y);
console.log(x==y);
console.log(x!=y);

console.log("Increment Decrement operators");
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

console.log("Logical Operators");

//   logical && 
//   logical || 

let math=Number(prompt("Enter Math marks : "))
let physics=Number(prompt("Enter physics marks : "))
let chemistry=Number(prompt("Enter chemistry marks : "))

let avg=(math+physics+chemistry);
console.log("Avg Marks : ",avg);

if(avg>=85) console.log("Grade A+");
else if(avg>=75) console.log("Grade A");
else if(avg>=70) console.log("Grade B+");
else if(avg>=65) console.log("Grade B");
else if(avg>=55) console.log("Grade C");
else if(avg>=45) console.log("Grade D");
else if(avg>=33) console.log("Grade E");
else console.log("Fail...");


// ternery operator

10>5? console.log("TRUE"):console.log("FALSE");
;


