// DRY -: don't repeat Yourself

// let place = {
//     placeName: "office",
//     behaviour: "professional",
//     sayHello: function () {
//         const insidePlace = {
//             placeName: "Meeting",
//             behaviour: "Roasting",
//             infrontOfFrined: function () {
//                 console.log(this);
//                 // console.log("InfrontOfFriend ",this.behaviour);
//             },
//             infrontOfClient: () => {
//                 console.log(this);
//                 // console.log("InfrontOfClient ",this.behaviour)
//             }
//         }
//         insidePlace.infrontOfFrined()
//         insidePlace.infrontOfClient()
//     }
// }
// place.sayHello();


//------------------Constructor Function---------------

// below function is the old method to create a constructor function 
// Function Constructor
function SongName() {
    this.name = "cry for me",
        this.album = "Hurry Up Tomarrow",
        this.singer = "Harry",
        this.duration = 3.5,
        this.isLiked = true
}

const person1 = new SongName();
const person2 = new SongName();
const person3 = new SongName();
console.log(person1);
// console.log(person2);
// console.log(person3);


// New Method to create a constructor function

class CreateBook {
    constructor(name, author, count) {
        this.bookName = name || "none" // this is the default name if You pass nothing then Harry Porter will come on that place
        this.authorName = author || "none"
        this.pages = count || 0
        this.getfrontPage = function () {
            console.log('Book Name', this.authorName)
            console.log('Author Name', this.bookName)
            console.log('No. of pages : ', this.pages)
        }
    }
}

let book = new CreateBook();
console.log(book)

let book1 = new CreateBook("When You Became Rich", "Kaushal Raj", 330);
let book2 = new CreateBook("Rich Dad Poor Dad", "Robert Kiyosaki", 450);
console.log(book2)
// let book3=new CreateBook();
// console.log(book3);

book2.getfrontPage()


class MakeStudents {
    constructor(fname, lname, contact, isVerified) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified
    }
}
let showProfile = function () {
    if (this.isVerified) {
        console.log(`Name :${this.fname} ${this.lname} Contact: ${this.contact}`);
    }
    else {
        console.log("User Not Verified")
    }
}
MakeStudents.prototype.showProfile=showProfile  //->|
// When You use constructor function then use protype and when you made a normal object then instead of write a prototype use __proto__


let s1 = new MakeStudents("Abhishek", "sharma", 90345, true)
let s2 = new MakeStudents("Rohit", "sharma", 98745, false)
let s3 = new MakeStudents("Sarthak", "sharma", 64986, true)
let s4 = new MakeStudents("Priya", "sharma", 96137, false)
let s5 = new MakeStudents("Sanskriti", "sharma", 963444, true)

s1.showProfile()
s2.showProfile()
s3.showProfile()
s4.showProfile()
s5.showProfile()

// Jab cheez Constructor ke bahar banaoge then bo saari cheeze prototype ke andar chali jayengi


// Classical Inheritence
// and same process You can do with the help of function then such type of inheritence is called functional inheritence
class User{
    constructor(fname,lname,contact){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
    }
    greetUser(){
        console.log(`Welcome ${this.fname} ${this.lname}`)
    }
}

class Admin extends User {
    constructor(fname,lname,contact){
        super(fname,lname,contact) // is line se above wali saari property iske andar aa jayengi
        // Jab child ka constructor chalate hai to parent se child ke constructor ko call karna padta hai and this will be happen with the help of super keyword
        this.accessPanel=true
    }
    addCourse(){
        console.log("New Course Added ..."); 
    }
    removeAllCourse(){
        console.log("Remove All Course Added ..."); 
    }
}
let u1 = new User("Priya", "sharma", 96137)
let u2 = new Admin("Sanskriti", "sharma", 963444)

u1.greetUser();
u2.greetUser();

console.log('---------------------');

console.log(u1);
console.log(u2);
u2.addCourse();
u2.removeAllCourse()

