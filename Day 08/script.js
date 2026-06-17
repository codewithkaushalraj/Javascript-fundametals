// var user="Kaushal"
// var age= 30;

// function greet(){

//     console.log("Hello Sir/ Ma'am ..."); 
//     function Sayhi(){
//         console.log("Hiiiii............");

//     } 
//     Sayhi()
// }

// greet()


//Lexical Scope
// Lexical Environment
// Closure

function parent() {
    var pname = "ABC"
    function child() {
        var cname = "XYZ"
        console.log('Parent : ', pname);
        console.log('Child : ', cname);
        function grandchild() {
            var gcname = "PQR"
            console.log('Parent : ', pname);
            console.log('Child : ', cname);
            console.log('Grand-Child : ', gcname);
        }
    }
    return child
}

/*
...............
...............
...............
...............
 */


// var out = parent();
// // console.log(out);

// out()

parent()()();

