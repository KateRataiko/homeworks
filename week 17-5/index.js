document.querySelector('button').onclick = generation;

function generation(){
let numGeneration = -10;
let arr = [];
for(let i = 0; i <= 9; i++) {
// let numRandomRound = Math.round(numGeneration + (Math.random() * 20));
// arr.push(numRandomRound);
arr.push( Math.round(numGeneration + (Math.random() * 20)));
// console.log(arr);
}
const min =Math.min.apply(null, arr);
const max =Math.max.apply(null, arr);

console.log(arr);
console.log(min);
console.log(max);

const sum = arr.reduce((summa, number) => summa + number, 0);
const average = sum / arr.length;
console.log(average);
console.log(sum);

const mult = arr.reduce((multip, number) => multip * number);
console.log(mult);

document.querySelector ('.reginir').innerHTML = arr ;
document.querySelector ('.minimalnoe').innerHTML =  min;
document.querySelector ('.maxsimalnoe').innerHTML = max;
document.querySelector ('.srednee').innerHTML = average;
document.querySelector ('.summazisel').innerHTML = sum ;
document.querySelector ('.proizvedenie').innerHTML = mult;
}




// *Сгенерировали: -9 1 8 -2 3 2 0 1 -5 7*
// *Минимальное: -9*
// *Максимальное: 8*
// *Среднее арифметическое: 0.6*
// *Сумма чисел: 6*
// *Произведение чисел: 0*