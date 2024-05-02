//let Number = [1,2,3,5,7];

const { LazyResult } = require("postcss");

//console.loga(numbers);

//end -> push
//beginning -> unshift

//middle -> splice

//Searching
//console.log(number.indexOf(9));

//We want to check if a number exist in an array
//if(number.indexOf(4) != -1)
  //  console.log("persent");

    //console.log(numbers.includes(7));

    //console.log(numbers.indexOf(4,2));

   // let courses = [
        
        //{no:1, naam :'Love'},
      //  {no:2, naam :'Rahul'}
   // ];

    //console.log(courses);

    //console.log( courses.includes( {no:1, naam:'Love}) );

    //let course =courses.find(function(course) {
      //   return course.naam == 'Love';
     //})
    //let course = course.find(course => course.naam ==='kilvish');

     //function(course) {
       //  return course.naam === 'Love';
//}
 //console.log(course);

   
             //Removing Element

   //let numbers = [1,2,3,4,5,6,7];
   
   //end
   //numbers.pop();
   //beginning
   //numbers.shift();
   //middle
   //numbers.splice(2,1);

   //console.log(numbers);

             //Emptying an Array

// let numbers = [1,2,3,4,5,];
// let numbers2 = numbers;

//numbers = [];
//numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

            // Combining & Slicing Arrays

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2,6);
// console.log(sliced);

 // Spread Operator

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a',false,...second,'b',true];
// console.log(combined);

//How to create copy
//let another = [...combined];
             
             //Iterating an Array

//let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// }

//arr.forEach(function(number) {
//  console.log(number);
//});

// in array

//arr.forEach(number=> console.log(number));

                //Joining Arrays

// let message = 'This is my first message';
// let parts = message.split('');

// console.log(parts);

// let joined = parts.join('-');
// console.log(joined);

                //Sorting Arrays

// let numbers = [40,30,10,20,50];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

               //Filtering Arrays

// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(function(value)  {
//     return value >=0;
// });

// let filtered = numbers.filter(value => value >= 0);

//console.log(filtered);

              //Mapping Arrays

// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(function(value){
//     return 'student_no' + value;
// })

// console.log(items);

              //Mapping Arrays & Object

//let numbers = [1,2,-6,-9];
// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num) {
//     return {value:num};
// })
    // in arrow
// let filtered = numbers.filter(value => value => 0);

// let items = filtered.map(num => {value:num});

     // other methode

//      let items = numbers
//                 .filter(value => value >= 0)
//                 .map(num => {value:num});

// console.log(items);

                       // Reducing Arrays

// let person = {
//   fName:'love',
//   lName:'Lover',
//   get fullName() {
//     return '${person.fName} ${person.lName}';

//   },
//   set fullName(value) {
//     if (typeof value !== String) {
//       throw new Error("You have not sent a string");

//     }
//     let parts = value.split('');
//     this.fName = parts[0];
//     this.lName = parts[1];
//     } 
  
// };     

//                                All topic cover & practice Here


