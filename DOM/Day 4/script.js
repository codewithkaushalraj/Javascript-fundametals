// Event Deligation
// const btn=document.querySelector('button')
// const div=document.querySelector('div')
// const main=document.querySelector('main')
// const body=document.body;




// btn.addEventListener('click',(event)=>{
//     console.log('button Cliked.........')
// })
// body.addEventListener('click',(event)=>{
//     console.log('body Clicked .........')
// })
// div.addEventListener('click',(event)=>{
//     console.log('div clicked ..............')
// })
// main.addEventListener('click',(event)=>{
//     console.log('main Clicked .............')
// })


// Submit Events...

const form = document.querySelector('form')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let inp3 = document.querySelector('.inp3')
let users=document.querySelector(".users")

// https://picsum.photos/id/1074/600/400
// https://picsum.photos/id/1084/600/400
// https://picsum.photos/id/1080/600/400
// https://picsum.photos/id/1069/600/400


let userData=[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "image": "https://picsum.photos/id/1005/600/400",
    "dob": "1998-04-15"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "image": "https://picsum.photos/id/1011/600/400",
    "dob": "1999-09-03"
  },
  {
    "id": 3,
    "name": "Rohan Gupta",
    "email": "rohan.gupta@example.com",
    "image": "https://picsum.photos/id/1012/600/400",
    "dob": "2000-01-27"
  },
  {
    "id": 4,
    "name": "Sneha Patel",
    "email": "sneha.patel@example.com",
    "image": "https://picsum.photos/id/1027/600/400",
    "dob": "1997-12-19"
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "email": "vikram.singh@example.com",
    "image": "https://picsum.photos/id/1025/600/400",
    "dob": "1995-07-08"
  },
  {
    "id": 6,
    "name": "Ananya Rao",
    "email": "ananya.rao@example.com",
    "image": "https://picsum.photos/id/1021/600/400",
    "dob": "2001-05-21"
  },
  {
    "id": 7,
    "name": "Karan Mehta",
    "email": "karan.mehta@example.com",
    "image": "https://picsum.photos/id/1035/600/400",
    "dob": "1996-11-11"
  },
  {
    "id": 8,
    "name": "Ishita Kapoor",
    "email": "ishita.kapoor@example.com",
    "image": "https://picsum.photos/id/1062/600/400",
    "dob": "2002-02-14"
  }
]

let ui=()=>{
  users.innerHTML=""
    userData.forEach((elem,index)=>{
    users.innerHTML+=`<div class="card">
            <img src=${elem.image} alt="image">
            <div class="text">
                <h3>Name : ${elem.name}</h3>
                <p>Email : ${elem.email}</p>
            </div>
            <div class="btn">
            <button>Edit</button>
            <button onClick="deleteCard(${index})">Delete</button>
        </div>
        </div>`
})
}
ui()

// Delete the Card
let deleteCard=(index)=>{
  userData.splice(index,1);
  // console.log(userData)
  ui();

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log("form Event")
    // console.log(event.target)

    // let name=event.target[0].value
    // let email=event.target[1].value  

    let name = inp1.value
    let email = inp2.value
    let image=inp3.value;
    // console.log(name)
    // console.log(email)

    if(name.trim()=="" || email.trim()=="" || image.trim()==""){
        alert("Please Fill All the Field")
        return;
    }

    userData.push({name,email,image})
    console.log(userData)
    ui();
    
    // DRY :- Don't repeat Yourself
    // users.innerHTML+=`<div class="card">
    //         <img src=${imageUrl} alt="image">
    //         <div class="text">
    //             <h3>Name : ${name}</h3>
    //             <p>Email : ${email}</p>
    //         </div>
    //     </div>`


    // inp1.value=""
    // inp2.value=""
    //      OR
    form.reset()
})