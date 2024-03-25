// console.log( 1 + false );
// console.log( 1 + undefined );

// console.log( Number( false ) );

// console.log( Number( undefined ) );
// console.log( Number( {} ) );
// console.log( Number( [] ) );
// console.log( ("abc" + {}) );
// console.log( typeof("abc" + {}) );
// console.log( typeof(1 + []) );
// console.log( 1 + null);

// console.log( true + Number([23,23]) );
// console.log( undefined + undefined );

// console.log(  Boolean(-100) );
// console.log(  Boolean([]) );
// console.log(  Boolean({}) );

// let str = "abc"
// let str1 = 'abc'

// let str4 = str +" "+ str1

// let str2 = `abc`

// // let str4D =

// console.log( str4 );

// let num =5;
// let x = 1;

// console.log( num +
// "*" + 
// x + 
// "=" 
// +(num*x) 
// );

// console.log( `${num}
// *
// ${x}
// =
// ${num*x}`  );

// console.log( 2**3  );

// let a = 2;

// a**=3 // a = a**3

// console.log( 1 !== "1"  );

// let num = 17

// console.log(  num>=18 || num<=30  ); // Short Circuit Evaluation


// console.log( !true );

let arr = [1,2,3,4]
let obj = {id:1, fName:"xyz"}
let fName = "Kesavan"
// for(i=0; i<arr.length; i++ ){
//     console.log( arr[i] );
// }

// for( let x of fName ){
//     console.log( x );
// }
// for( let x of arr ){
//     console.log( x );
// }


// for(let key in arr){
//     console.log( arr[key] );
// }
// for(let key in fName){
//     console.log( fName[key] );
// }
// for(let key in obj){
//     console.log( key );
// }
// let arr1;

// console.log( arr1 );

// function funName(a=1,b=1){ // declaration
//     console.log( "xyz"+a+b );
// }
// funName(); // function call or function invoke


// var a = 10;//  declaration and initialize

// var a;
// a=10;

// var a = 20; // Redeclare or re-define

// a=30; // Re-initialize or re-assign

// console.log( a );

// let b;
// b = 50;

// b = 40;

// console.log( b );

// const c=34;


let b = 30;
var a = 40;
const c = 50;

function name(params) {
    let b = 150; //block scope
    const c = 100;
    if(true){
        var a = 10; // function scope
        console.log( b );
        console.log( c );
    }
    console.log( a );
}
name()

console.log( a,b,c );

// console.log( "30" + (10+20 )); 