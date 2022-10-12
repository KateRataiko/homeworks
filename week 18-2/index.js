let erros = [];
function checkValidity(input){
    let validity = input.validity;
    
    if (validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено'); }
    if (validity.patternMismatch) { errors.push(' Не верный формат заполнения'); }
    if (validity.rangeOverflow) { let max = getAttributeValue(input, 'max'); 
    errors.push(' Максимальное значчение не может быть более чем ' + max); }
    if (validity.rangeUnderflow) { let min = getAttributeValue (input, 'min'); errors.push('Максимальное значение не может быть болеечем' + min); }
    console.log()
}

function checkAll() {
    errors = []; 
    let inputs = document.querySelectorAll("input");

    for (let input of inputs){
        checkValidity(input);
    }

    document.getElementById('errorsInfo').innerHTML=
     errors.join('. <br>');

}



function ValidateEmail(emailField) {
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}

function check()
 {
    let text = document.getElementById ('first_name');
    document.getElementById('errorMessage') 
    .innerHTML= "";

 if(text.value == "")
    {
    document.getElementById('errorMessage') 
    .innerHTML+= "Напишите ваше имя<br>";}



    let number = document.getElementById ('phone');
    if(number.value == "")

    {
 document.getElementById('errorMessage') 
 .innerHTML+= "Напишите ваш телефон<br>";}
 let number1 = document.getElementById ('phonecopy');
 if(number1.value == "")
 {
 document.getElementById('errorMessage') 
 .innerHTML+= "Повторите ваш телефон<br>";}

 let numbercompare = document.getElementById ('phone, phonecopy');
 if(number1.value != number.value)
 {
 document.getElementById('errorMessage') 
 .innerHTML+= "Номера телефонов не совпадают<br>";}

 let checkbox = document.getElementById ('agreement');
 document.getElementById('errorMessage1') 
 .innerHTML= "";

 if(checkbox.checked == "")
 {
 document.getElementById('errorMessage1') 
 .innerHTML+= "Необходимо согласие на обработку данных<br>";}

let welcome = document.getElementById ('welcome'); 
 document.getElementById('welcome') 
 .innerHTML= "";
 if((checkbox.checked != "")&&(text.value != "")&&(number.value != "")&&(text1.value != "")&&(number1.value == number.value))
  {
 document.getElementById('welcome').innerHTML = (document.getElementById('name').value) + ","+" ваша информация отправлена!";}
  }