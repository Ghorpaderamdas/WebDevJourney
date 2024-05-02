
//function addEventListener(){
  //  console.log('I have clicked on the document');
//}

//document.addEventListener('click',eventFunction);
    
//document.removeEventListener('click',eventFunction);

//const content = document.querySelector('#wrapper');

//content.addEventListener('click', function(babbar){
  //  console.log(babbar);
//})

//let links = document.querySelectorAll('a');
//let thirdLink = Links[2];

//thirdLink.addEventListener('click', function(event) {
  //  event.preventDefault();
    //console.log('very happy,very good');
//});
//
//let myDiv = document.createElement('div');

//for(let i=1; i<=100; i++){
//    let newElement = document.createElement('p');
  //  newElement.textContent = 'This is para'+i;

    //newElement.addEventListener('click',function(event){
      //  console.log('I have clicked on para');
  //  });
    //myDiv.appendChild(newElement);
//}
//document.appendChild(myDiv);

let element = document.querySelector('#wrappar');

element = document.addEventListener('click',function(event){
    if (event.target.nodeName === 'SPAN'){
    console.log('span pr click kia hai' + event.target.textContent);
    }
});
