
localStorage.setItem('Name',"kaushal")
localStorage.setItem('age','30')
localStorage.setItem('song','tera mera khatam')
console.log(localStorage.getItem('song'))
// console.log('helloooooo')

let arr=[
    {name:'adf',
        age:30,
        address:'new Delhi',
        pincode:12344
    },
    {name:'def',
        age:32,
        address:'meerut',
        pincode:12344
    },
    {name:'ramu',
        age:28,
        address:'noida',
        pincode:12345
    },
    {name:'golu',
        age:35,
        address:'bhopal',
        pincode:31414
    },
]

localStorage.setItem('Details',JSON.stringify(arr))

let lsd=localStorage.getItem('Details')
console.log(lsd)

let data=JSON.parse(lsd)
console.log(data)

// localStorage.removeItem('age')