
let getData = function(){
    let urlParams = new URLSearchParams(window.location.search);
    let param = urlParams.get('id');

    fetch(url=`https://rickandmortyapi.com/api/character/${param}`, data={
        method: 'GET',
    })
    .then((response) => {
        console.log(response.status)
        console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data)
        const divClass = document.getElementById('detail')
        const locationDiv = document.getElementById('location')
        const image = document.createElement('img')
        const name = document.createElement('h1')
        const status = document.createElement('h1')
        const species = document.createElement('h1')
        const type = document.createElement('h1')
        const gender = document.createElement('h1')
        const cerated = document.createElement('h1')
        
        divClass.append(image, name, status, species, type, gender, cerated)
        image.src = data.image
        name.innerHTML = data.name
        status.innerHTML = data.status
        species.innerHTML = data.species
        type.innerHTML = data.type
        gender.innerHTML = data.gender
        cerated.innerHTML = data.created
        for(i of data.episode){ 
            const location = document.createElement('h3')
            location.innerHTML = i
            locationDiv.append(location)
        }
            
    })
}
getData()