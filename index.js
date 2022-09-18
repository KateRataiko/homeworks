function check()
 {
    let text = document.getElementById ('name');
    document.getElementById('errorMessage') 
    .innerHTML= "";

 if(text.value == "")
    {
    document.getElementById('errorMessage') 
    .innerHTML+= "Напишите ваше имя<br>";}


    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");


    document.getElementById('errorMessage')
    .innerHTML

    if(email.value == '')
    {
        document.getElementById('errorMessage')
        .innerHTML+= "Ваш email не заполнен <br>"; 
    }

    if(password.value == '')
    {
         document.getElementById('errorMessage')
        .innerHTML += "Ваш password не заполнен <br>"; 
    }

    if(password.value.length<=5)
    {
         document.getElementById('errorMessage')
        .innerHTML += "Ваш password слишком короткий <br>"; 
    }

    let number = document.getElementById ('telephone');

 if(number.value == "")

    {
 document.getElementById('errorMessage') 
 .innerHTML+= "Напишите ваш телефон<br>";}
}















// function check () {
//     let result = document.getElementById ("test").value;
//     if(result=='') {
//     alert ('Ваше поле не заполнено')
//     }
// }

// function compare(a,b){
//     if(a>b) {
//         console.log(a);
//         return a;
//     }
//     else {
//         return b;
//     }
// }

// function compare3(a,b){
//     if(a>b && a>c) {
//         console.log(a);
//         return a;
//     }
//     else if(b>a && b>c){
//         return b;
//     }
//     else{
//         return c;
//     } 
// }

// function cheakAge(age){
//     if(age>=18)
//     alert('все окей');
//     else
//     alert("вход запрещен");

// }

// function cheakAge(age){
//     (age>=18) ?  alert('все окей') : alert("вход запрещен");
// }

// function weekDayName(number){
//     let name = '';
//    switch(number)
//     {
//         case 1: name = 'Понедельник'; break;
//         case 2: name = 'Вторник'; break;
//         case 3: name = 'Среда'; break;
//         case 4: name = 'Четверг'; break;
//         case 5: name = 'Пятница'; break;
//         case 6: name = 'Суббота'; break;
//         case 7: name = 'Воскресенье'; break;

//         default: name = 'Такого дня недели нет';
// }
//     return name;