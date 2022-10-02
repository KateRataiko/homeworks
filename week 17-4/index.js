document.querySelector('button').onclick = filterSpam;

function filterSpam(){
let text = document.querySelector('input').value

console.log(text);

let spam1 = 'viagra';
let spam2 = 'xxx';

 console.log(text.includes(spam1));

if((text.includes(spam1)) && (text.includes(spam2))){
  text = text.replace(/viagra/g, "***");
  text = text.replace(/xxx/g, "***");
  console.log(text);
}else if(text.includes(spam1)){
  text = text.replace(/viagra/g, "***");
   console.log(text);
   
}else if(text.includes(spam2)){
    text = text.replace(/xxx/g, "***");
    console.log(text);
}else  

console.log(text);

}





