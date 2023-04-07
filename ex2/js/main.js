

let getData = function(){
    let row = document.getElementById('row_container')
    
    fetch(url='https://rickandmortyapi.com/api/character', data={
        method: 'GET',
    })
    .then((response) => {
        console.log(response.status)
        console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data)
        result = data.results
        for(i of result){
        const divClass = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('p')
        const linkDetail = document.createElement('a')
        linkDetail.append(image)
        divClass.append(linkDetail)
        divClass.append(name)
        row.append(divClass)
        linkDetail.href = `character.html?id=${i.id}`
        divClass.className = "card mb-3"
        divClass.style = "max-width: 340px; background-color: silver;"
        row.style = 'background-color: black;'
        image.src = i.image
        name.innerHTML = i.name}
    })
}
getData()

