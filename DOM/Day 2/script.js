
const body=document.body;
// const main=document.querySelector('main')


// console.log(body.childNodes)
// console.log(body.children)
// console.log(main.childNodes)
// console.log(main.children)

console.log(body.innerHTML) // give complete the inner body tag
console.log(body.textContent)   // give the content where it is placed
console.log(body.innerText)  // give all the content that is present inside a body
body.style.backgroundColor="royalblue"

const h1=document.querySelector('h1')
// console.log(h1)


h1.innerText="<i>Full Stack Web Developer </i>"
// h1.textContent="<i>Full Stack Web Developer </i>"
h1.innerHTML="<i>Full Stack Web Developer </i>"

h1.style.color="pink"
h1.style.fontSize="50px"


const first=document.querySelector("#first")
console.log(first)


//Check is MY first has some class

console.log(first.classList.contains('heading')) // inside this you add the same class that you give in html if match then return true otherwise it will return false

// I have to change my ClassName
// first.classList.replace("heading","newHeading")

// toggle class
// first.classList.toggle('heading')

// Add a class
first.classList.add("myhead")

