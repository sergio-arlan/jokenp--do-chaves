const resultado = document.getElementById('result')

const imagem = document.querySelector('#image')

const contador = document.querySelector('#contador')

let yourNumber = 0
let chavesNumber = 0

const playYour = (humanChoice) => {

    playTheGame(humanChoice, playchaves())
}

const playchaves = () => {
    const choice = ['stone', 'paper', 'scissors']
    const radomnumber = Math.floor(Math.random() * 3)
    return choice[radomnumber]
}

const playTheGame = (human, chaves) => {

    if (human === chaves) {
        resultado.innerHTML = "Deu Empate!"
        imagem.src = "./assets/chaves-empate.png"
        imagem.style = "width:250px; height:250px;"

    } else if (human === 'paper' && chaves === 'stone' ||
        human === 'scissors' && chaves === 'paper' ||
        human === 'stone' && chaves === 'scissors') {

        resultado.innerHTML = "Você Ganhou!"
        imagem.src = "./assets/chaves-errou.png"
        imagem.style = "width:250px; height:250px;"

        yourNumber++

    }
    else {
        chavesNumber++
        resultado.innerHTML = "O chaves Ganhou!"
        imagem.src = "./assets/chaves-acerto.png"
        imagem.style = "width:250px; height:250px;"
    }

    contador.innerHTML = yourNumber + ":" + chavesNumber

    if (yourNumber >= 5) {
        winner.classList.remove('none')
        winner.classList.add('center')
    }

    if (chavesNumber >= 5) {
        loser.classList.remove('none')
        loser.classList.add('center')
    }

    setTimeout(() =>{
        playYour.disabled = false
        clear();
    },1000)
}

function clear(){
    imagem.src = ""
    resultado.innerHTML = ""
    resultado.innerHTML = "jogue novamente"
imagem.src = "./assets/chaves-empate.png"
}

function newGame() {
    contador.innerHTML = "0:0"

    yourNumber = 0
    chavesNumber = 0

    playTheGame()

    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')

}
