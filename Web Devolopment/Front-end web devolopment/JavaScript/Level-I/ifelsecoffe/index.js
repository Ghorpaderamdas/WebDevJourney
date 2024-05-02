// if else example no 1 lets coffe
 
    let age = 20
    if (age > 18 ) {
        console.log('You can go for coffee with me.'); 
        
    } else if(age < 18) {
        console.log('Its time to go home.'); 
        
    }
// if else example no 2 lets mark

     let mark = 90
    if (mark > 80) {
        console.log('Grade A');
    }
     else if (mark > 60) {
        console.log('Grade B')
    }
     else if (mark > 40) {
        console.log('Grade C')
    } 
    else if (mark >35){
        console.log('Grade D')
    }
    else if (mark >35){
        console.log('NA')
    }
    
//switch statement example
let num = 1;

switch(num){
    case 1: console.log('Grade A');
    break;
    case 2: console.log('Grade B');
    break;
    case 3: console.log('Grade C');
    break;
    default: console.log('Grade D')
}
    
// Example of for loops

    
    for (let i = 0; i < 5; i++) {
        console.log('Ghorpade'+i); 
    
    }

    //Example of do while loop
    
    let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

    
    
    