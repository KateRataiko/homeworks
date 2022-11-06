function onSearch(){
    let gifTheme = document.querySelector('#giff').value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=YGjengcWq29EFZ3tz1QB9eLwr31MTzxX&limit=5&q=' + gifTheme)
        .then(response => response.json())
        .then( json => {
        const respDiv = document.querySelector('.resp')
        respDiv.innerHTML = ''
        json.data.forEach(element => {
            respDiv.innerHTML += '<img class="pict" src = ${element.images.original.url}>' 
        });
    })





    }


