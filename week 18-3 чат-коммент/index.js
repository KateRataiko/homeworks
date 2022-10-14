document.addEventListener("DOMContentLoaded", 
function (event){
    let name = localStorage.getItem('name');
    if (name != null) {
       document.getElementById("author").value = name;
    }
});

function sendMessage(author, comment) {
    document.getElementById("chat").innerHTML += `<span class='author'>${author}: </span> <span> ${comment}</span> <br>`;
}

function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;

if(localStorage.getItem('name')==null)
{
localStorage.setItem('name', author);
}

    sendMessage(author, comment);
}




// document.querySelector('button').onclick = filterSpam;

// function filterSpam(){
// let text = document.querySelector('input').value

// console.log(text);

// let spam1 = 'viagra';
// let spam2 = 'xxx';

//  console.log(text.includes(spam1));

// if((text.includes(spam1)) && (text.includes(spam2))){
//   text = text.replace(/viagra/g, "***");
//   text = text.replace(/xxx/g, "***");
//   console.log(text);
// }else if(text.includes(spam1)){
//   text = text.replace(/viagra/g, "***");
//    console.log(text);
   
// }else if(text.includes(spam2)){
//     text = text.replace(/xxx/g, "***");
//     console.log(text);
// }else  

// console.log(text);

// }

