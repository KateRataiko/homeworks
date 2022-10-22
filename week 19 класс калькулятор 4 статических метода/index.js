   //это с вызовом статических методов без создания экземпляра

  //переменная, в которой хранится выбранное математическое действие
 let op;

 // функция расчёта
 function func() {
   
     // переменная для результата
     let result;
     // получаем первое и второе число
     let num1 = Number(document.getElementById("num1").value);
     let num2 = Number(document.getElementById("num2").value);
     console.log(num1);
     console.log(num2);
     
     // смотрим, что было в переменной с действием, и действуем исходя из этого
     switch (op) {
         case '+':
            result = Calculator.slozenie(num1, num2);
             break;
         case '-':
             result = Calculator.vizitanie(num1, num2);
             break;
         case '*':
             result = Calculator.umnozenie(num1, num2);
             break;
         case '/':
            if (num2 == 0)
            alert('На ноль делить нельзя');
            else
             result = Calculator.delenie(num1, num2);
             break;
     }
     console.log(result);
     // отправляем результат на страницу
document.getElementById("result").innerHTML = result;
 }
     class Calculator  {
        constructor() {}
          static slozenie(num1, num2) {
                console.log ("Сумма " + num1 + " + " + num2 + " = " + (num1 + num2));
               return (num1 + num2)
            }
            static vizitanie(num1, num2) {
                console.log("Сумма " + num1 + " - " + num2 + " = " + (num1 - num2));
            }
            static umnozenie(num1, num2) {
console.log("Сумма " + num1 + " * " + num2 + " = " + (num1 * num2));
            }
            static delenie(num1, num2) {
                 console.log("Сумма " + num1 + " / " + num2 + " = " + (num1 / num2));
             }
      }

            
    
    
    
    //это с созданием объекта класса (calculator1 = new Calculator();)

//  // переменная, в которой хранится выбранное математическое действие
//  let op;
//  let calculator1;
//  // функция расчёта
//  function func() {
//     calculator1 = new Calculator();
//      // переменная для результата
//      let result;
//      // получаем первое и второе число
//      let num1 = Number(document.getElementById("num1").value);
//      let num2 = Number(document.getElementById("num2").value);
//      console.log(num1);
//      console.log(num2);
     
//      // смотрим, что было в переменной с действием, и действуем исходя из этого
//      switch (op) {
//          case '+':
//             result = calculator1.slozenie(num1, num2);
//              break;
//          case '-':
//              result = calculator1.vizitanie(num1, num2);
//              break;
//          case '*':
//              result = calculator1.umnozenie(num1, num2);
//              break;
//          case '/':
//             if (num2 == 0)
//             alert('На ноль делить нельзя');
//             else
//              result = calculator1.delenie(num1, num2);
//              break;
//      }
//      console.log(result);
//      // отправляем результат на страницу
// document.getElementById("result").innerHTML = result;
//  }
//      class Calculator  {
//         constructor() {}
//             slozenie(num1, num2) {
//                 console.log ("Сумма " + num1 + " + " + num2 + " = " + (num1 + num2));
//                return (num1 + num2)
//             }
//             vizitanie(num1, num2) {
//                 console.log("Сумма " + num1 + " - " + num2 + " = " + (num1 - num2));
//             }
//             umnozenie(num1, num2) {
//                 console.log("Сумма " + num1 + " * " + num2 + " = " + (num1 * num2));
//             }
//             delenie(num1, num2) {
//                 console.log("Сумма " + num1 + " / " + num2 + " = " + (num1 / num2));
//             }
//      }

 











     
 