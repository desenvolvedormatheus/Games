//header
function abrir_pesquisa() {
    pesquisa = document.querySelector('.pesquisa')
    pesquisa.style.top = '4.5rem'
    pesquisa.style.width = '14rem'
    entrada = document.querySelector('.pesquisa input')
    entrada.focus()
}
function fechar_pesquisa() {
    pesquisa = document.querySelector('.pesquisa')
    pesquisa.style.top = '-6rem'
    pesquisa.style.width = '1rem'
}
//sessao 1