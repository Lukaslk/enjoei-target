const burguerMenu = document.querySelector('.mobile__menu')

burguerMenu.addEventListener('click', () => {
    const navegacao = document.querySelector('.bar__menu')
    navegacao.classList.toggle('active')
})