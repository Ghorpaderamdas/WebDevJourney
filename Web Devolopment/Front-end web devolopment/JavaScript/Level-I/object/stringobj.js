// console.log('Good Morning');

// let lastName = 'Dwarka';

// let firstName = new String('Love');

// let message = 'This is my first Message';

// let words = message.split('');

// console.log(words);


//Escape sequence


// console.log('Good Morning');

// let lastName = 'Dwarka';

// let firstName = new String('Love');

// let message = ('This is \n my "first"\n Massage')

//let words = message.split('');

//console.log(words);


// Templete Literal

//const person = "Mike";
//const age = 28;

//function myTag(strings, personExp, ageExp) {
  //const str0 = strings[0]; // "That "
  //const str1 = strings[1]; // " is a "
  //const str2 = strings[2]; // "."

  //const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  //return `${str0}${personExp}${str1}${ageStr}${str2}`;
//}

//const output = myTag`That ${person} is a ${age}.`;

//console.log(output);
// That Mike is a youngster.



// other ex
//let price = 10;
//let VAT = 0.25;
//let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;


// Date & Time

let date = new Date();


let date2 = new Date('June 20 2000 12:00');

let date3 = new Date(2000,10, 20, 8);

date3.setFullYear(1947);

console.log(date3);