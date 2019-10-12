// let x = 4;
// let y = 5;

// if(x === 4){
//     console.log("x = ", x)
// }

// if(x === 4 && y === 5){
// console.log("This is correct");
// }else{
//     console.log("This is not correct")
// }


///write a function that takes a string and switches the first letter of the string with the last
//letter of a string.. ex: jonathan output => nonathaj

// let string= 'jonathan';
// const changingStr= (string)=>{
//     let newString= string.split("")
//     let first = string[0]
//     let last = string[string.length-1]
//     // console.log(newString)
//     newString[0] = last;
//     newString[newString.length-1]= first
//     // console.log( newString.join(''))
//     return newString.join('')
// }

// console.log(changingStr(string));

let r = "r"
let p = "p"
let s = "s"
let arr = [r,r,r,s,s,s,p,p]

function randomAnswer(ArrayArgument){
 let option = Math.floor(Math.random() * ArrayArgument.length) // we created 
 console.log(option)
//  return arr[option];
}
randomAnswer(arr)
// console.log(randomAnswer(arr));