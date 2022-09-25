document.querySelector('button').onclick = cost;

function cost(){
let priceModel = 0;
let kpp = 0;
let color = 0;
let complect = 0;

console.log(document.getElementById("model")
.value);
switch (document.getElementById("model")
            .value) {
            case 'logan':
                priceModel = 21600;

                document.getElementById("carImage")
                .src = "assets/logan.jpg";
                 break;
            case 'daster':
                priceModel = 32200;
                document.getElementById("carImage")
                .src = "assets/Duster.jpg";
                break;
            case 'kaptur':
                priceModel = 37080;
                document.getElementById("carImage")
                .src = "assets/Kaptur.jpg";
                break;
            case 'arkana':
                priceModel = 35200;
                document.getElementById("carImage")
                .src = "assets/arkana.jpg";
                break;
            case 'koleos':
                priceModel = 60000;
                document.getElementById("carImage")
                .src = "assets/kol.jpg";
                break;
        }

        console.log(priceModel);

        console.log(document.getElementById("kpp")
        .value);
        switch (document.getElementById("kpp")
            .value) {
            case 'mehanic':
                kpp = 1;
              break;

            case 'avtomat':
                kpp = 1.05;
              break;
        }
        console.log(kpp);


        switch (document.getElementById("color")
            .value) {
            case 'black':
                color = 1.03;
              break;

            case 'white':
                color = 1.02;
              break;

              case 'blue':
                color = 1.01;
              break;

            case 'red':
                color = 1;
              break;
        }
        console.log(color);


        switch (document.getElementById("complectation")
        .value) {

        case 'basic':
            complect = 1;
          break;

        case 'midle':
            complect = 1.05;
          break;

        case 'max':
            complect = 1.1;
         break;

        case 'sale':
            complect = 0.9;
           break;
    }
    console.log(complect);

    let price = priceModel * kpp * color * complect;
    console.log(price);
    document.querySelector ('.price').innerHTML = price.toFixed(2);

    function show() {
        if (document.getElementById("model").value
            == "logan")
            document.getElementById("carImage")
        .src = "assets/logan.jpg";
    }
    function show() {
        if (document.getElementById("model").value
            == "daster")
            document.getElementById("carImage")
            .src = "assets/Duster.jpg";
    }
    function show() {
        if (document.getElementById("model").value
            == "kaptur")
            document.getElementById("carImage")
            .src = "assets/Kaptur.jpg";
    }
    function show() {
        if (document.getElementById("model").value
            == "arkana")
            document.getElementById("carImage")
            .src = "assets/arkana.jpg";
    }
    function show() {
        if (document.getElementById("model").value
            ==  'koleos')
            document.getElementById("carImage")
            .src = "assets/kol.jpg";
    }


}