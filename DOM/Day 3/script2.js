// insertBefore
const main=document.querySelector('main')
const box=document.querySelectorAll('.box')
// console.log(box[0])
// console.log(box[1])
// console.log(box[2])

// main.insertBefore(box[2],box[0])  //(kisko karna hai,kisse karna hai)


const box1=document.createElement('div')
const box2=document.createElement('div')
const box3=document.createElement('div')
box1.innerText='1'
box2.innerText='2'
box3.innerText='3'
box1.classList.add('box')
box2.classList.add('box')
box3.classList.add('box')
main.append(box1,box2)
// main.prepend(box3) // it means sabse pahale insert/place karo
// main.before(box3)

// box2.before(box3)
// box1.after(box3)

// box1.replaceWith(box3)
main.replaceChild(box3,box2)