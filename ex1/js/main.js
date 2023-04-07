const input = document.getElementById('add-item-btn')




alertCusnom = function(){
    let contaires = document.getElementById('container')
    const divClass = document.createElement('div')
    divClass.className = 'okno'
    divClass.innerText = `Уведомление`
    contaires.append(divClass)
    const button1 = document.createElement('button')
    button1.type = 'button'
    button1.innerText = `Закрыть`
    divClass.append(button1)
    function removeButton(){
        divClass.remove()
    }
    button1.addEventListener('click', removeButton)
    setTimeout(function(){divClass.remove()}, 5000)
}

customAlert = function(){
    let contaires = document.getElementById('container')
    const divClass = document.createElement('div')
    divClass.innerText = `Element`
    contaires.append(divClass)
}

input.addEventListener('click', customAlert)
input.addEventListener('click', alertCusnom)
