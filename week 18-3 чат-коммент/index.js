document.addEventListener("DOMContentLoaded", 
function (event){
    let name = localStorage.getItem('name');
    if (name != null) {
       document.getElementById("author").value = name;
    }
});

let i = 1;

function sendMessage(author, comment, avatar) {
    document.getElementById("chat").innerHTML += `<span><img src=${avatar} width="150" height="150"</span><span class='author'>${author}: </span> <span> ${comment}</span> <br>`;
} 



function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;
    let avatar = document.getElementById("avatar").value;



console.log(avatar)
if(localStorage.getItem(author)==null)
{
localStorage.setItem('name ' + author , author);
}
if(localStorage.getItem(author + ' avatar')==null)
{
localStorage.setItem(author  + ' avatar', avatar);
}
localStorage.setItem('comment ' + author + ' ' + i++ , comment);


    sendMessage(author, comment, avatar);
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

