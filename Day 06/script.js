// ForEach :- used for iteration (does't return any value )
// map :- used for transform 
// filter :- used for filter the value
// reduce :- To accomodate whole array into single value

let arr=[10,20,30,40,50];
let sum=0

// For Each
arr.forEach((value,idx)=>{
    sum+=value
    console.log(value,idx); 
})
console.log("Sum of element of Array is : ",sum);

// Map
let sqArr=arr.map((val)=>{
    return val*val;
})
console.log(sqArr)
console.log(arr)

// filter

let arr2=[2,43,5,66,7,61,4,7,9,15,40,22,34,56,55,77,44];
let filterArr=arr2.filter((ele)=>{
    if(ele%2==0) return ele;
})
console.log(filterArr);


let arr3=['aman','arun','chintu','dev'];
arr3.forEach((elem)=>{
    console.log("Welcome "+elem); 
})

let output1=arr3.map((elem)=>{
    return elem.toUpperCase();
})
console.log(output1);

let output2=arr3.filter((elem)=>{
    return elem.includes('a');
})
console.log(output2);



// Reduce


let cartPrice=[1400,4000,1200,1000,400,600]

sum=cartPrice.reduce((acc,val)=>{
    return acc+val;
},0);
console.log(sum);

let arr4=['apple','mango','grapes','banana','guava','apple','mango','grapes','apple','mango','apple'];

let obj=arr4.reduce((acc,val)=>{
    acc[val]=(acc[val]|| 0)+1;
    return acc;
},{})
console.log(obj);

arr2=[2,43,5,66,7,61,4,7,9,15,40,22,34,56,55,77,44];

let max=arr2.reduce((acc,val)=>{
    if(val>acc) return val
    else return acc
},0)
console.log(max);

//Find 
//findIndex
// Some
//All


// Destructuring in Array

arr=[10,20,30,40,50,60];
let [first,second,,fourth,...restElem]=arr
console.log(first);
console.log(second);
console.log(fourth);
console.log(restElem);




