console.log(this); // Window object

function greet() {
    console.log(this);   // this will also give window object
}
greet()


let obj={
    fname:"kaushal",
    lname:"raj",
    age:20,
    sayHi:function(){
        console.log(this);  // object   
    },
    sayBye:()=>{
        console.log(this);  // Window Object  
        // Aaisa isliye hota hai because yaha pr hota hai lexical Context
        // Iska Lexical Context Kuch Bhi nahi hota hai jabki about function ka lexical context hai object but function expression ka lexical context kuch hai hi nahi
    }
}
obj.sayHi();
obj.sayBye()

let obj2={
    fname:"gopesh",
    lname:"singh",
    age:20,
    changeName:function(){
        this.fname="GopiBahu"
    },
}

obj2.changeName();
console.log(obj2)

let obj3={
    fname:"gopesh",
    lname:"singh",
    age:20,
    sayBye:()=>{
        console.log(this);
        let sayHi=()=>{
            console.log(this)
        }
        sayHi();
    },

}
obj3.sayBye();

let obj4={
    fname:"abc",
    lname:"xyz",
    sayHi:function(){
        let temp=function(){
            console.log("----------------------------");
            
            console.log(this);   
        }
        temp()
    }  
}
obj4.sayHi()


let obj5={
    fname:"abc",
    age:30,
    company:function(){
       const companyDetails= {
        name:"Sheryians",
        isGood:true,
        sayHi:function(){
            console.log(this);
        }  
    }
    companyDetails.sayHi()
    }
}
obj5.company()

var stu1={
    fname:"kaushal",
    lname:"raj",
    math:70,
    computer:78,
    english:80,
    getIntro:function(){
        console.log(this.fname+" "+this.lname); 
    }
}
function sayHi(){
    console.log("Hiii "+this.fname+" "+this.lname)
}
var stu2={
    fname:"sarthak",
    lname:"sharma",
    math:90,
    computer:68,
    english:69,
}
var stu3={
    fname:"sudhansh",
    lname:"rajput",
    math:77,
    computer:85,
    english:89,
    hometown:function(name,state){
        console.log(`${this.fname} ${this.lname} HomeTown is : ${name} (${state})`);
        
    }
}
let stu4={
    fname:"sanskriti",
    lname:"Sharma",
}
let stu5={
    fname:"Priyanshi",
    lname:"Sharma",
}
let tellResult=function(){
    console.log(`${this.fname} ${this.lname} You got : ${((this.math+this.computer+this.english)/3).toFixed(2)}% marks`)
}
stu1.getIntro.call(stu2);
sayHi.call(stu2)
sayHi.call(stu3)

tellResult.call(stu1)

stu3.hometown("bhopal","MP")

stu3.hometown.call(stu1,"Bareilly","Uttar-Pradesh") // In this way you can pass the arguments
stu3.hometown.call(stu1,"Jhanshi","Uttar-Pradesh")

// If you want to use apply then in apply instead of directly pass the value you can gave the value in the form or array
stu3.hometown.apply(stu1,["Jhanshi","Uttar-Pradesh"])
stu3.hometown.apply(stu2,["Jhanshi","Uttar-Pradesh"])

var out1=stu3.hometown.bind(stu4,"Pilibhit","Uttar-Pradesh")
var out2=stu3.hometown.bind(stu5,"Pilibhit","Uttar-Pradesh")
out1();
out2();


console.log("------------------------------------------------------------------");
console.log("------------------------------------------------------------------");
let arr=[10,20,30,40]

let object={
    name:"Kaushal",
    age:20,
}
function xyz(){
    console.log("hii")
}
console.log(arr.__proto__ == Array.prototype)
console.log(object.__proto__ == Object.prototype)
console.log(xyz.__proto__ == Function.prototype)


console.log(arr.__proto__.__proto__ ==Object.prototype)
console.log(object.__proto__.__proto__ ==Object.prototype) // because left hand side should be null
console.log(xyz.__proto__.__proto__ ==Object.prototype)
console.log(object.__proto__.__proto__)



console.log("------------------------------------------------------------------");
// reference Error
// let a=10
// console.log(a);
// console.log(b);  // this will give reference error

// const c=50
// c=30 // this will give type error

// lot x=30 // this will give syntax error

// console.log(this)

// function abc() {
//     console.log(this);   // this will also give window object
// }
// abc()

