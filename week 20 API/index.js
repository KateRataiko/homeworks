document.addEventListener("DOMContentLoaded",
function (event) {
fetch("https://api.nasa.gov/planetary/apod?api_key=WNByaWSiRrIxbM74VOkYog032WZ5MYLWFiIaf05v")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.explanation);
    document.querySelector('.title').textContent = data.title;
    document.querySelector('.explanation').textContent = data.explanation;
    document.getElementById("url").src
    = data.url;
  
   
  
    // data.explanation
//     .innerText = data.explanation;
});


});


