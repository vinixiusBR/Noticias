const BotaoAbrir = document.querySelector(".header-mobile > button")

const botaoFechar = document.querySelector(".header-mobile nav button")
const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

BotaoAbrir.addEventListener('click,abrirMenu')
botaoFechar.addEventListener('click, fecharMenu')

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add ("abrir")
}
function fecharMenu(){
    bory.classList.remove("escurecer")
    nav.classList.remove ("abrir")
}

