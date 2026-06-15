//Object : it is also a referenced datatype
// Create
let obj = {
    name: "kaushal",
    age: 18,
    city: "Banglore",
    Batch: "Go-Classes",
    isMarried: false
}
//Read
console.log(obj);
console.log(obj.city);

// Update
obj.city = "Les-Vegas"
console.log(obj);

//Delete
delete obj.isMarried
console.log(obj);

// Add
obj.salary = "4CR/Year"
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// make object by taken value from user
// let userName=prompt("Enter name")
// let age=Number(prompt("Enter age"));
// let course=prompt("Enter Course")
// let Department=prompt("Enter Department")

// let obj2={userName,age,course,Department}
// console.log(obj2);

obj = {
    name: "Virat Kohi",
    age: 40,
    Team: "India",
    Last5MatchScore: [67, 45, 107, 25, 58],
    Spouse: {
        name: "Anushka Sharma",
        profession: "Acting",
        age: 34,
        son: {
            name: "prince",
            college: "ABCD",
            skills: [1, 2, 3, 4],
            cources: {
                DS: 399,
                DBMS: 999,
                OS: 1499,
                COA: 3999
            }
        }
    }
}
console.log(obj.Spouse);

// Funcations inside object
obj2 = {
    name: "chitti",
    age: "1 year",
    RAM: "20MB",
    Strage: "1TB",
    skills: ['fighting', 'dancing', 'speaking'],
    sayHi: () => {
        console.log("Hello I am Chitti Robot");

    }
}
obj2.sayHi();


let maths = {
    add: (a, b) => a + b,
    mul: (a, b) => a * b,
    sq: num => num * num,
    cube: num => num * num * num
}
console.log(maths.add(5, 8));
console.log(maths.mul(5, 8));
console.log(maths.sq(8));
console.log(maths.cube(8));

// Object.freeze(maths)
Object.seal(maths)

maths['Created by : '] = "Kaushal "
console.log(maths);

// Destructuring in Object
obj = {
    name: "Virat Kohi",
    age: 40,
    Team: "India",
    Last5MatchScore: [67, 45, 107, 25, 58],
    Spouse: {
        name: "Anushka Sharma",
        profession: "Acting",
        age: 34,
    }
}

let {name,Team,...remainingElem}=obj

// console.log(name);
// console.log(Team);
// console.log(remainingElem);


// Copying the Object

let copyObj={...obj}  // it will create a shallow copy

// For Made a Deep copy use 

obj2=structuredClone(obj)
// console.log(obj2);
obj2.Spouse.age=30;
console.log(obj);
console.log(obj2);

// Second Method of  Creating a Deep copy

let str=JSON.stringify(obj)
copyObj=JSON.parse(str);
console.log(copyObj);






