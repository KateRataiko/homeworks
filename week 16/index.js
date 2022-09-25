
 document.querySelector('button').onclick = addFunc;

let numbers =[];

function addFunc(){
let num = Number(document.querySelector('input').value);

numbers.push(num);
console.log(num);
console.log(numbers);
document.querySelector('input').value="";
}

function sumInpute() {
    numbers.sort((a, b) => a - b)
    var summary = 0;

for(let i = 0; i < numbers.length; i++){
    summary += numbers[i]
}
console.log(summary);
console.log(numbers);
document.querySelector ('.summa').innerHTML = summary;
document.querySelector ('.out').innerHTML = numbers;
}




       








// let names = ["Маша","Саша","Женя"];

// for(let i=0;i<names.length;i++){
//     console.log(i);
//     console.log(names[i]);
// }