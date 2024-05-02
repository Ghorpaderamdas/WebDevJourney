             // object create
// console.log('fortuner');
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('Drawing Reactangle');
//     }

// };

            //Factory Function

// function createReactangle() {
//     return rectangle = {
//         length: len,
//         breadth: bre,
    
//         draw: function() {
//             console.log('Drawing Reactangle');
//         }
    
//     };

    
// }

// let rectangleobj1 = createReactangle(5,4);
// let rectangle2 = createReactangle(2,3);
// let rectangle3 = createReactangle(7,9);
            // camalecase
//camalecase -> number of student
               // constructor function

 // constructor function -> pascal Notation -> first letter of every word is Capital ->NumberOfStudent
 //constructor function -> prop/methode ->intialise/Define
//  function Reactangle(len,bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }
//  }
   
//  //object creation using constructor function
//  let rectangleObject = new Reactangle(4,5);

//  rectangleObject.color = 'yellow';
//  console.log(rectangleObject);

//  delete rectangleObject.color;
//  console.log(rectangleObject);

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('Drawing Reactangle');
//     }

// };

// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('Drawing Reactangle');
//     }

// };

                    // Types in JS
          // primittve or value type and Reference or Objects type
    //  let a = 10;
    //  let b = a;
     
     
    //  a++;
    //  console.log(a);
    //  console.log(b);
     

    //  let a = { value: 10};
    //  let b = a;
     
     
    //  a.value++;


    //  console.log(a.value);
    //  console.log(b.value);
     
// Note:- 1) Primitive are copied by their value
//        2) references are copied by their address/references
//    other example
    // let a = 10;
     
    // function inc(a) {
    //     a++
   // }

   // inc(a);

   //console.log(a);

//    let a = {value:10};

//    function inc(a) {
//       a.value++;
//    }

//    inc(a);

//    console.log(a.value);

 // iterating through Objects
 // 1) for-of
 // 2) for-in

let rectangle = {
    length:2,
    breadth:4,
 };

//for-in loop
// for(let key in rectangle) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle,[key]);
// }

//for-of loop
//for (let key of Object. keys[rectangle] {
//  console.log(key);
//}

// if('color' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent')
// }


                 //Object Clone

// let src = {
//     a:10,
//     b:20,
//     c:30,
// };

// let dest = {};
   
// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);
    
    //Objec #2
let src = {
    a:10,
    b:20,
    c:30,
};

let src2 = { value: 25};

let dest = Object.assign({}, src,src2);

console.log(dest);

src.a++;

console.log(dest);


// String Object

