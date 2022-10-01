document.querySelector('button').onclick = applyFIO;

function applyFIO() {
    let fio = document.querySelector('input').value.trim();

    let fioMASS = fio.split(" ");
    console.log(fioMASS);

let familiya = fioMASS[0].toLowerCase();
let name = fioMASS[1].toLowerCase();
let otchestvo = fioMASS[2].toLowerCase();

familiya = familiya.charAt(0).toUpperCase() + familiya.slice(1);
name = name.charAt(0).toUpperCase() + name.slice(1);
otchestvo = otchestvo.charAt(0).toUpperCase() + otchestvo.slice(1);
console.log(familiya);
console.log(name);
console.log(otchestvo);
}