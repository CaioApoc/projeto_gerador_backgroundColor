// Quando clicar no botao gerar uma cor no background do body
// e o numero da cor na div resultado

let corBack = document.getElementById("fundo") 
let resultado = document.querySelector(".resultado")

function mudarCor(){

    let red = randomFrom0To255()
    let green = randomFrom0To255()
    let blue = randomFrom0To255()

    const color = `RGB(${red}, ${green}, ${blue})`

    corBack.style.backgroundColor = color
    resultado.style.color = color
    resultado.innerHTML = color
}

function randomFrom0To255() {
    return Math.floor(Math.random() * 255) + 1
}
