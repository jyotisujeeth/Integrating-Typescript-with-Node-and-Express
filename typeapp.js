"use strict";
alert("welcome");
const num1Elemement = document.getElementById("num1");
const num2Elemement = document.getElementById("num2");
const buttonElement = document.querySelector("button"); // 
const numResult = []; //genric type
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Elemement.value;
    const num2 = num2Elemement.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(stringResult);
    console.log(result);
    numResult.push(result);
    textResult.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(textResult, numResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
// const num1Elemement= document.getElementById("num1") as HTMLInputElement;
// const num2Elemement= document.getElementById("num2") as HTMLInputElement;
// const buttonElement = document.querySelector("button")!;// 
// function add (num1: number | string, num2: number | string ) {
//     if(typeof num1=== "number" && typeof num2=== "number") {
//         return num1 +num2;
//     }else if (typeof num1 === "string" && typeof num2 === "string") {
//         return num1+ " " + num2;
//     }
//     return +num1 + +num2;
// }
// buttonElement.addEventListener('click', () => {
//     const num1= num1Elemement.value;
//     const num2= num2Elemement.value;
//     const result = add(+num1, +num2);
//     const stringResult = add(num1, num2);
//     console.log(stringResult);
//     console.log(result);
// });
// const num1Elemement= document.getElementById("num1") as HTMLInputElement;
// const num2Elemement= document.getElementById("num2") as HTMLInputElement;
// const buttonElement = document.querySelector("button")!;// 
// const  numResult: number[] = [];
// const textResult: string[] = [];
// function add (num1: number | string, num2: number | string ) {
//     if(typeof num1=== "number" && typeof num2=== "number") {
//         return num1 +num2;
//     }else if (typeof num1 === "string" && typeof num2 === "string") {
//         return num1+ " " + num2;
//     }
//     return +num1 + +num2;
// }
// function printResult(resultObj: {val:number; timestamp:Date }) {
// console.log(resultObj.val)
// }
// buttonElement.addEventListener('click', () => {
//     const num1= num1Elemement.value;
//     const num2= num2Elemement.value;
//     const result = add(+num1, +num2);
//     const stringResult = add(num1, num2);
//     console.log(stringResult);
//     console.log(result);
//     numResult.push(result as number);
//     textResult.push(stringResult as string);
//     printResult({ val: result as number, timestamp: new Date() });
//     console.log(textResult, numResult)
// });
// const num1Elemement= document.getElementById("num1") as HTMLInputElement;
// const num2Elemement= document.getElementById("num2") as HTMLInputElement;
// const buttonElement = document.querySelector("button")!;// 
// const  numResult: number[] = [];
// const textResult: string[] = [];
// type NumOrString = number | string;
// type result = { val:number; timestamp:Date}
// interface resultObj {
//     val:number; 
//     timestamp: Date;
// }
// function add (num1: NumOrString , num2: NumOrString  ) {
//     if(typeof num1=== "number" && typeof num2=== "number") {
//         return num1 +num2;
//     }else if (typeof num1 === "string" && typeof num2 === "string") {
//         return num1+ " " + num2;
//     }
//     return +num1 + +num2;
// }
// function printResult(resultObj: result) {
// console.log(resultObj.val)
// }
// buttonElement.addEventListener('click', () => {
//     const num1= num1Elemement.value;
//     const num2= num2Elemement.value;
//     const result = add(+num1, +num2);
//     const stringResult = add(num1, num2);
//     console.log(stringResult);
//     console.log(result);
//     numResult.push(result as number);
//     textResult.push(stringResult as string);
//     printResult({ val: result as number, timestamp: new Date() });
//     console.log(textResult, numResult)
// });
// const  myPromise = new Promise<string>((resolve, reject) => {
//     setTimeout (() => {
//         resolve('it worked!');
//     },1000);
//     });
//     myPromise.then((result) => {
//         console.log(result.split('w'));
//     });
