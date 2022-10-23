class Cat{
    constructor(catName, FIO, 
        // breed, feed,  sex
        ) {
        this.catName = catName;
        this.FIO = FIO;
        // this.breed = breed;
        // this.feed = feed;
        // this.sex = sex;
    }
}

// function getFeed() {
//     let All=document.forms['feedForm'];
//     for (let i=0; i<All.elements.length; i++){
//         if (All.filter1[i].checked){
//             feed.push(All.filter1);
//         }
//      }   
// }

function getSex(){
const allSex = document.querySelectorAll('input[name="sex"]')
 for(const s of allSex){
    if(s.checked){
        return s
    }
 }
}

document.querySelector('button').onclick = work;
function work() {


    let catName = document.getElementById('catname').value;
  
    let FIO = document.getElementById('FIO').value;
// let breed =  document.getElementById('breed').value;
// let feed = [];
// feed = getFeed();
// let sex = getSex();
    console.log(catName);
    console.log(FIO);
    // console.log(breed);
    // console.log(feed);
    // console.log(sex);
    
    
    let cat1 = new Cat (catName, FIO
        // , breed, feed, sex
        );

    console.log(cat1);
}










