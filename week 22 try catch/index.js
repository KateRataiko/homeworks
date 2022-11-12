json = `[{
    "Имя": " Тор",
    "Вселенная": " Marvel Comics",
    "Деятельность": " борец за справедливость, скандинавский бог",
    "Друзья": "Мстители",
    "Суперсилы": "все, что может бог, плюс молот Мьелнир",
    "imgSrc": "assets/thor.jpg"
},{
    "Имя": " Человек-паук",
    "Вселенная": " Marvel Comics",
    "Деятельность": " борец за справедливость, студент, фотограф",
    "Друзья": "Мстители, Фантастическая четверка, Люди Икс",
    "Суперсилы": " сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "imgSrc": "assets/spiderman.jpg"
},{
    "Имя": " Супермен",
    "Вселенная": " DC Comics",
    "Деятельность": " борец за справедливость",
    "Друзья": "собака Крипто",
    "Суперсилы": " непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "imgSrc": "assets/superman.jpg"
},{
    "Имя": " Железный человек",
    "Вселенная": " Marvel Comics",
    "Деятельность": " гений, миллиардер, плейбой, филантроп",
    "Друзья": "Мстители",
    "Суперсилы": " высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "imgSrc": "assets/aironman.jpg"
},{
    "Имя": " Капитан Америка",
    "Вселенная": " Marvel Comics",
    "Деятельность": " супер-солдат",
    "Друзья": "Мстители",
    "Суперсилы": " сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    "imgSrc": "assets/capitanamerica.jpg" 
},{
    "Имя": " Халк",
    "Вселенная": " Marvel Comics",
    "Деятельность": " супергерой, борец за справедливость, ученый-биохимик",
    "Друзья": "Мстители",
    "Суперсилы": "  сверхчеловеческая сила искорость, выносливость, полет",
    "imgSrc": "assets/hulk.jpg" 
},{
    "Имя": " Бэтмен",
    "Вселенная": " DC Comics",
    "Деятельность": " борец с преступностью, филантроп, миллиардер",
    "Друзья": "Робин, Бэтгерл",
    "Суперсилы": " интеллект, обширные познания, знания боевых искусств, ловкость",
    "imgSrc": "assets/superman.jpg" 
},{
    "Имя": " Дэдпул",
    "Вселенная": " Marvel Comics",
    "Деятельность": " антигерой, наемник",
    "Друзья": "частично Мстители, Человек-паук, Росомаха",
    "Суперсилы": " высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    "imgSrc": "assets/deadpull.jpg" 
}]`;

document.addEventListener("DOMContentLoaded", function
(event) {
    let heros = JSON.parse(json);
console.log(heros);
console.log(heros[0]);
console.log(heros.length);

    let herosContent = "";
   
 for(let hero of heros){
        herosContent += `<div class='hero'>
        <h2>Имя: ${hero.Имя}</h2>
        <div>Вселенная: ${hero.Вселенная} </div>
        <div>Деятельность: ${hero.Деятельность} </div>
        <div>Друзья: ${hero.Друзья} </div> 
        <div>Суперсилы: ${hero.Суперсилы} </div>
        <img src= ${hero.imgSrc}> </img>
        <div>
        <label for="reiting"> Рейтинг </label> <br />
        <input type="radio" name="reiting" onchange="setRate()" value="1" /> 1
        <input type="radio" name="reiting" onchange="setRate()" value="2"/> 2
        <input type="radio" name="reiting" onchange="setRate()" value="3"/> 3
        <input type="radio" name="reiting" onchange="setRate()" value="4"/> 4
        <input type="radio" name="reiting" onchange="setRate()" value="5"/> 5
        <input type="radio" name="reiting" onchange="setRate()" value="6"/> 6
        <input type="radio" name="reiting" onchange="setRate()" value="7"/> 7
        <input type="radio" name="reiting" onchange="setRate()" value="8"/> 8
        <input type="radio" name="reiting" onchange="setRate()" value="9"/> 9
        <input type="radio" name="reiting" onchange="setRate()" value="10"/> 10
        
    </div>
        <div>
            <input name="button" type="button" id="button" value="Принять данные" onclick="setRate()" />
        </div>
        </div>`;

      try { 
        
        function getRate() {
            let radio = document.getElementsByName('reiting');
            let user_input;
            for (i=0; i < radio.length; i++) {
                if (radio[i].checked) {
                    user_input = radio[i].value;
                }
                
            }
            if (user_input == null){
                throw new Error("Вы не выбрали оценку")
            }
            return user_input;
        }
    } catch(error){
        console.log("Что-то пошло не так. Подробности: " + error.message);
    }
        function setRate() {
            let rate = getRate();
            console.log(rate);
                localStorage.setItem(rate);
        }
       
 
 
 
document.getElementById("herosContainer").innerHTML = herosContent;
}
});

