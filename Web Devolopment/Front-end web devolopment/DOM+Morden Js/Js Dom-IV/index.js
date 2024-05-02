 
 
 //setTimeout(function() {
 //   console.log('third');
// },3000)
// function sync() {
 //    console.log('first');
//}
//sync();

//console.log('second');


//let meraPromise1 = new Promise(function(resolve,reject) {
//    setTimeout(function() {
  //         console.log('I am inside Promise');
    //},5000);
    //resolve(2233);
    //reject(new Error('Bhahisab Error aaya hai'))
    
//});

//let meraPromise2 = new Promise(function(resolve,reject) {
  //  setTimeout(function() {
    //       console.log('I am inside Promise');
    //},3000);
    //resolve(2233);
    //reject(new Error('Bhahisab Error aaya hai'))
    
//});

//console.log('Pehla');



//let waadaa1 = new Promise(function(resolve,reject){
  //  setTimeout(() => {
    //    console.log('setTimeout1 started');
    //}, 2000);
    //resolve(true);
//})

//let output = waadaa1.then(()=>{
  //  let waadaa2 = new Promise(function(resolve,reject){
    //    setTimeout(()=>{
   //         console.log('setTimeout1 started');
   // }, 3000);
     //   resolve("waada 2 resolveed");
   // })
   // return waadaa2;
//})

//output.then((value) => console.log(value));


// async function abcd() {
//     return "kya hua tera"
// }


// async function utility() {


//     let delhiMeusam = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Delhi is very hot");
//         }, 1000);
//     });

//     let hydMeusam = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Hydrabad is very cool");
//     },51000);
//     });

//     let dm = delhiMeusam
//     let hm = hydMeusam

//     return[dM,hM];
// }

// let obj = {
//     heading:"head"
// };
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(content);
// }
// utility();


// async function helper() {
//     let option = {
//         method: 'POST',
//         body:JSON.stringify({
//             title:'foo',
//             body:'body',
//             userId:1,
//         }),
//         header: {
//             'content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', option);
//     let response = content.json();
//     return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();
//let ->block scoped
let name = "AsianTiger"
function init(){
    //let name ="Mozilla"; // name is local veriable created by init
    function displayName(){
       // let name ="Lover";
        //displayName() is the inner function , that forms the closure
        console.log(name); //use veriable declare in the parent function
    }
    displayName();
}
init();