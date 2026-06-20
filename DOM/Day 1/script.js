// console.log(document)

//Selection of an Element

const h1=document.querySelector('h1'); // Only Select first tag
// console.log(h1)  // Isse kabhi kabhi tag and some time Object milta hai
// SO Isse Bachane ke liye instead of log use dir
// console.dir(h1)  //dir se always Object Milega
// (dir- Directory )
 

const para=document.querySelectorAll('p') // For Selecting All tag
console.log(para) // It Will return nodeList

const p=document.getElementsByTagName('p')
console.log(p) // return HTMLCollection

// NodeList live nahi chalta HtmlCollection Live Chalta hai

// selecting element by id
// use document.getElementById('ID')


// selecting element by Clas
// use document.getElementsByClassName('ID')

// querySelector -: its a Universal Selector


// Changes Perform on HTML 

h1.innerText="Full Stack Developer"
h1.style.backgroundColor="royalblue"
h1.style.padding="30px"


// section of Body
const body=document.body // this is the simple way to selecting a body
console.log(body)

// For Changes
// innerHTML
// innerText 
// TextContent
