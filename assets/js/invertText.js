var content = document.querySelector('#conteudo')

function reverse(){
    let invert = document.querySelector('#reverse')
    let childContent = document.createElement('h5')
    var o = [];
    for (var i = invert.value.length - 1; i >= 0; i--) {
        o += invert.value[i];
    }
    childContent.innerHTML = `${o}`
    if(childContent.textContent.length == 0){
        alert("O campo não pode ficar vazio")
    }
    content.appendChild(childContent)
    invert.value = ''
}

let btnReverse = document.querySelector('#btn__invert')

btnReverse.addEventListener('click', () => {
    reverse()
    if(content.childElementCount > 1) {
        content.removeChild(content.childNodes[0])
    }
})