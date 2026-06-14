// ----------------------: ARRAY :------------------------
// push : add element in end
// pop : Remove element in end
// unshift : add element in start
// shift : Remove element in start


// let arr=new Array() // to make empty array
// let arr=[]  // another Method
// let arr=[10,20,"robot",'rahul',30,true,"rohit",23,24,65,100,98]

// // for(val in arr){
// //     console.log(arr[val]);   
// // }

// console.log(arr[arr.length-1]);
// console.log(typeof(arr));
// arr.push(1000)
// console.log(arr);
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);

// //Add Element in starting
// arr.unshift(976)
// arr.unshift(76)
// arr.unshift(99)
// console.log(arr);

// //remove element from starting
// arr.shift()
// arr.shift()
// console.log(arr);



// let arr=[10,22,13,24,23,45,55,66,77,88];

// // arr.splice(startindex,deletecount,element that you want to add) 
// // splice(jis index se elemnt delete ho, kitne Element delete karne hai, new elements that you want to add)

// let arr2=arr.splice(2,3)
// console.log(arr);
// console.log(arr2);
// arr.splice(2,0,695,830,444,68)
// console.log(arr);

// arr.reverse();
// console.log("Reverse Array is : " ,arr);
// arr.sort((a,b)=> a-b)
// console.log("Sorted Array is : " ,arr);


// for(value of arr){
//     console.log(value+"hihi");
// }




// let arr3=[
//     [10,20,30,40],
//     [11,22,33,44],
//     [12,24,36,48],
//     [13,26,39,52]
// ]
// console.log(arr3);

// let evenNoArr=[];
// let oddNoArr=[];
// for(let i=1;i<=100;i++){
//     if(i%2==0) evenNoArr.push(i);
//     else oddNoArr.push(i)
// }
// console.log(evenNoArr);
// console.log(oddNoArr);


let arr=[10,20,30,40,50,60]
// Non mutating methods of array
 let arr2=arr.concat([11,22,33,44]) // this will not perform changes on original array
 let arr3=arr.slice(2,5)
 
 

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr.indexOf(50));
console.log(arr.join('-'));
console.log(typeof(arr.join('-')));
console.log(arr.join(""));

//copy of array by spread operator

let copyArr=[...arr]
console.log(copyArr)
arr.push("romeo")
console.log(arr)
console.log(copyArr)




