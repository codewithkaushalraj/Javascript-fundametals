const body=document.body;

// Attributes and property
// setattribute,getAttribute,removeAttribute,hasAttribute
// with data -*name // It is help to make a custom Attribute


// const h3=document.querySelector("#id1")
// console.log(h3)

// console.log(h3.getAttribute('id'))
// console.log(h3.getAttribute('class'))

// // SetAttribute
// h3.setAttribute('width','30px')

// //remove Attribute
// h3.removeAttribute('width')

// // has Attribute
// console.log(h3.hasAttribute('class'))


// const userCard=document.querySelector('#user_card')
// console.log(userCard.getAttribute('data-user-id'))
// userCard.dataset.userId="678"


// input.value vs input.getAttribute('value')

const inp=document.querySelector('input')
const btn=document.querySelector('button')

btn.addEventListener('click',(event)=>{
    console.log(inp.getAttribute('value'))
    console.log(inp.value)
})



// Creating Inserting and removing element from DOM

// Insertion
// AppendChild --Old
// Append -- New

// Old API
// AppendChild,InsertBefore,removeChild

// New API
// prepend ,before, after, replaceWith

const main=document.querySelector('main')
const footer=document.createElement('footer')
footer.innerText="Hii I am Footer"
const span=document.createElement('span')
span.innerHTML=" I am Span Element"

main.append(span)
body.appendChild(footer)

body.removeChild(footer)

// Remaining protion in script2.js file