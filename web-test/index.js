
// function randomFunc() {
//     var obj1 = {name : 'Vivian', age : 45}
//     var myName = 'rajiv'
//     var myAge = 23
//     return function() {
//         console.log(obj1.name + "is"+ " awesome "+myName)
//     }
// }
// var initialiseClosure = randomFunc();
// initialiseClosure();


// function outer() {
//     let count = 0;
//     function getCount() {
//         count++;
//     }
//     function inner() {
//         getCount()
//         console.log(count)
//     }
//     return inner;
// } 

// let counter1 = outer();
// counter1();
// counter1();

// let counter2 = outer();
// counter2()
// counter2()

// counter1();
// counter2()

// function x() {
//     var i = 100;
//     for(var idx = 1; idx < 6; idx++) {
//         function close(idx){
//             setTimeout(() =>{
//                 console.log(idx)
//             }, 1000*idx);
//         }
//         close(idx)
//     }
// }
// x()

// function outer1() {
//     let val = 10;
//     function inner(){
//         console.log('inner', val)
//     }
//     inner()
// }

// outer1()

// function add() {
//     let val = 0;
//     function subtract() {
//         console.log('the subtract', val);
//     }
//     subtract()
// }

// add()

// function createIncrement() {
//     let count = 0;
//     function increment() { 
//       count++;
//     }
//     let message = `Count is ${count}`;
//     function log() {
//       console.log(message);
//     }
    
//     return [increment, log];
//   }
//   const [increment, log] = createIncrement();
//   increment(); 
//   increment(); 
//   increment(); 
//   log(); // What is logged?

// x = 9;
// console.log('the name is', myfunc);
// function caller(){
//     myfunc(1,2)
// }
// caller()
// let funCall = myfunc;
// console.log('the func is', alert)
// console.log(x)
// var x = 0;
// function myfunc() {
//     var name = 0;
//     let x = 1;
//     let y = x + 9;
    
//     this.getFunc = () => {
//         console.log('inside the myfunc prop')
//     }
//     console.log('the name is ', name)
//     return x+y;
// }

// let outerVal = 90;
// const result = (function immediate(number) {
//     console.log('the outer val is',outerVal)
//     const message = `number is: ${number}`;
//     return message;
//   })(100);
//   console.log('the res is',outerVal)


//   setTimeout(function delayedReload() {
//     location.reload();
//   }, 1000);

// const count = 0;
// if(true){
//     const count = 10;
//     console.log('the count is',count)
// }

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }

//   /**
//    * if this count variable is not available then => count refer to the global 
//    * but if present in local then it will not look outside
//    */
//   let count = 10; 
//   console.log(count); // What is logged?
// })();

// for(let i = 1; i < 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000*i);
// }

// for(var i = 1; i < 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000*i);
// }

// function go(n) {
//     // n here is defined!
//     console.log(n); // { a: [1, 2, 3] }
  
//     for (let n of n.a) { // ReferenceError
//       console.log(n);
//     }
//     for (let x of n.a) { 
//       console.log(n);
//     }
//   }
  
//   go({a: [1, 2, 3]});

/**
 * 1. write async code using callback
 * 2. convert it into promise
 * 3. convert it into async await
 */

// function printStr(str){
//     setTimeout(() => {
//         console.log('the str is', str) 
//     }, Math.random()*1000); 
// }

// printStr('a');
// printStr('b');
// printStr('c');

// solution using callback

// function printStr(str, cb){
//     setTimeout(() => {
//         console.log('the str is', str) 
//         cb()
//     }, Math.random()*1000); 
// }

// printStr('a', () => {
//     printStr('b', () => {
//         printStr('c', () => {
//             printStr('d', () => {

//             })
//         })
//     })
// })

// solution using promises

// function printStr(str){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('the str is', str) 
//             resolve()
//         }, Math.random()*1000);
//     })   
// }

// // printStr('a').then(() => { return printStr('b')}).then(() => {return printStr('c')})

// // solution using async await
// async function callPrintStr(){
//     await printStr('a');
//     await printStr('b');fdffd
//     await printStr('c')
// }
// callPrintStr()

// Polyfill
// 1. Filter polyfill
// Array.prototype.myFilter = function(callbackFn) {
//     var arr = [];     
//     for (var i = 0; i < this.length; i++) {
//         if (callbackFn(this[i], i, this)) {
//         arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// let arr = [1, 2, 3,4, 5, 6, 7, 8];
// let even = arr.myFilter((ele) => ele%2 === 0)

// // [2, 4, 6, 8, 10, 12, 14, 16] => all are even => add all = 72ans
// const val = arr.map((ele) => ele*2).filter((ele) => ele%2 === 0).reduce((prev, curr) => prev+curr,0)
// console.log('the val is', val)

// let obj = {}
// console.log(obj.a);
// a = 0
// console.log(obj[a]);

// if(obj[a]) console.log('hello world')
// else console.log('hello world 1')

// const users = [
//     {firstName: "akshay", lastName: "saini", age: 26},
//     {firstName: "akshay", lastName: "saini", age: 75},
//     {firstName: "akshay", lastName: "saini", age: 50},
//     {firstName: "akshay", lastName: "saini", age: 26},
//     {firstName: "Roshini", lastName: "saini", age: 26},
//     {firstName: "Deepika", lastName: "saini", age: 26},
// ]

// const output = users.reduce(function(acc, curr){
//     // if(acc[curr.age]){
//     // if(curr.age in acc){
//     if(acc.hasOwnProperty(curr.age)){
//          acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         // acc = {...acc, [curr.age]: 1}
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})

// const output = users.reduce((acc, curr) => {
//     if(curr.age < 30) acc.push(curr.firstName)
//     return acc;
// }, [])

// console.log('output is',output)

// let str = 'Aayush'
// String.prototype.giveAyushPizza = () => {
//     return 'Just give Ayush pizza already!';
//     };

//     const str = 'Ayush';

//     console.log(str.giveAyushPizza())

// let num = new Number(1);
// Number.prototype.myFun = () => {
//     return 'this is my number'
// }

// num.a = 0;
// num.myFun = () => {
//     return 'this is my number'
// }
// console.log(num.myFun())

// function sum() {
//     console.log(arguments)
// }
// sum(1,2,3,4)

// function sum1(...arg) {
//     console.log(arg)
// }
// sum1(1,2,3,4)

// console.log('1' - - '1');
// console.log('1' +-  '1');

// const arrTest = [10, 20, 30, 40, 50][1, 3,1,2];
// console.log(arrTest);
// let myArr = [10, 20, 30, 40, 50]
// myArr.join = 1;
// console.log(myArr.toString())

// const arr = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr.filter(Boolean)); 

// const arr1 = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr1.filter(!Boolean));

// const parent = {
//     name: 'Rajiv',
//     age: 23,
//     hobby:'computer'
// }

// const child = Object.create(parent);
// child.age = 12
// child.name = 'Ryan'

// console.log('parent', parent);
// console.log('child', child);

// function Animal(name, energy){
//     this.name = name
//     this.energy = energy
//     this.sayHi = function(){
//         console.log(`${this.name} says hi`)
//     }
// }

// Animal.prototype.eat = function(){
//     console.log(`${this.name} eat mango`)
// }

// Animal.prototype.sleep = function(){
//     console.log(`${this.name} sleep today`);
// }

// let leo = new Animal('leo', 7);
// leo.eat();
// leo.sleep()

// var a = 'var a inn global scope'
// function func() {
//     // function scope
//     var a = 'var a in func scope'
//     console.log(a);
//     var b = 'var b in func scope'
// }
// func();
// console.log(a);

// var a = 'var a in global scope'
// if(1) {
//     // block scope
//     a = 'new value set for global var a in block scope'
//     let a = 'let a in block scope'
//     console.log(a)
// }

// let person = {
//     title: 'person obj',
//     say: function() {
//         console.log('this of outer say', this)
//         return () => {
//             console.log('this of inner say',this)
//             return this
//         }
//     },
//     myMethod: function() {
//         console.log('this of my method', this)
//         return function(){
//             console.log(this)
//             return this
//         }
//     },
//     arrowFn: () => {
//         console.log('this of outer say', this)
//         return () => {
//             console.log('this of inner say',this)
//             return this
//         }
//     }
// }

// let outer = person.say
// let inner = outer();
// inner()

// let say = person.say()
// let val = say() 
// console.log(val)

// person.myMethod()();
// let myMethod = person.myMethod()
// myMethod();

// let outer = person.arrowFn()()

// let list = ['Apple', 'Banana', 'Craneberry', 'Date', 'Elderberry']
// list.forEach(((ele, idx) => {
//     console.log('this of arrow fn', this)
// }), list)

// list.forEach(function(ele, idx){
//     console.log('this of normal fn', this)
// }, list)

// let person = {
//     name: 'rajiv',
//     getName: function(cb) {
//         console.log('this outside cb', this)
//         cb()
//     }
// }

// let person1 = {
//     name: 'rajiv',
//     getName: function(cb) {
//         console.log('this outside cb', this)
//         person.getName(() => {
//             console.log('this inside cb', this)
//         })
//     }
// }

// person.getName(() => {
//     console.log('this inside cb', this)
// })

// person1.getName()


// let person2 = {
//     name: 'rajiv'
// }

// function getName(){
//     console.log('the name is', this.name);
// }

// let getNameByArrowFn = () => {
//     console.log('the name is', this); 
// }
// getName.call(person2)
// getNameByArrowFn.call(this)
// arrow function does not bind any object to itself using any call, apply and bind,
// it just point to the outer object where it is defined


// function callMe() {
//     try{
//         let val = 2/0;
//         console.log('inside try block',val)
//         return 10;
//     }
//     catch(err) {
//         console.log('inside error block')
//         return 9;
//     }
//     finally{
//         console.log('inside finally block');
//         return 8;
//     }

//     return 7;
// }

// let val = callMe()
// console.log('the val is', val)

// console.log('one');
// callMe(function() {
//     console.log('innside cbb')
// })
// console.log('three');

// function callMe(cb) {
//     console.log('two')
//     cb();
// }

// let val = 10;
// if(2%2 == 0){
//     let val = 10;
//     val = 11;
//     console.log('the val is', val)
// }
// console.log('the val is', val)

// if(true) {
//     let x  = 2;
//     console.log(x); //2
// }
// console.log(x); // uncaught reference error

// if(true) {
//     var x  = 2;
//     console.log(x); // 2
// }
// console.log(x); //2

// var x = 2
// let x = 2 // let will through error

// function a() {
//     this.site = 'Ayush';
  
//     this.b = function b(){
//       console.log(this);
//     }
//   }
  

//   let site = 'Wikipedia';
//   let nobj = new a();
// console.log(nobj)