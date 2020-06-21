const video = document.querySelector('video')
const botao = document.querySelector('.vjs-big-play-button')

const tempoInicialAnime = "1:50"
const tempoInicialPrevia = "23:05"

const playVideo = () => {
    style = window.getComputedStyle(botao)
    display = style.getPropertyValue('display')

    if (display === "none") botao.click()
}

const videoBackTime = (time) => {
    const timeVideo = video.currentTime
    if (timeVideo - time < 0) video.currentTime = 0
    else video.currentTime -= time
}

const videoFowardTime = (time) => {
    const timeVideo = video.currentTime
    if (timeVideo + time > video.duration) video.currentTime = video.duration
    else video.currentTime += time
}

const videoPosition = (stingTime) => {
    var minuteAndSeconds = stingTime; // utilizar formato 'mm:ss'
    var arr = minuteAndSeconds.split(':');

    var seconds = (+arr[0]) * 60 + (+arr[1]);

    return seconds
}

const setTextButton = (element, texto) => {
    element.innerHTML = texto
}

const btnConfigInicio = document.createElement('button')
setTextButton(btnConfigInicio, `Configurar Inicio`)
btnConfigInicio.classList.add('btn-player')
btnConfigInicio.addEventListener('click', () => {
    const tempo = prompt("Informe o tempo no formato 'mm:ss'", localStorage.tempoInicial)
    if (tempo) {
        localStorage.tempoInicial = tempo
        setTextButton(btnInitAnime, `Ir para ${tempo}`)
    }
})

const btnInitAnime = document.createElement('button')
setTextButton(btnInitAnime, `Ir para ${localStorage.tempoInicial ?? "0:00"}`)
btnInitAnime.classList.add('btn-player')
btnInitAnime.addEventListener('click', () => {
    playVideo()
    video.currentTime = videoPosition(localStorage.tempoInicial)
    video.play()
})

const btnBack20sec = document.createElement('button')
btnBack20sec.innerHTML = '- 20s'
btnBack20sec.classList.add('btn-player')
btnBack20sec.addEventListener('click', () => {
    videoBackTime(20)
    video.play()
})

const btnBack10sec = document.createElement('button')
btnBack10sec.innerHTML = '- 10s'
btnBack10sec.classList.add('btn-player')
btnBack10sec.addEventListener('click', () => {
    videoBackTime(10)
    video.play()
})

const btnBack5sec = document.createElement('button')
btnBack5sec.innerHTML = '- 5s'
btnBack5sec.classList.add('btn-player')
btnBack5sec.addEventListener('click', () => {
    videoBackTime(5)
    video.play()
})

const btnFoward5sec = document.createElement('button')
btnFoward5sec.innerHTML = '+ 5s'
btnFoward5sec.classList.add('btn-player')
btnFoward5sec.addEventListener('click', () => {
    videoFowardTime(5)
    video.play()
})

const btnFoward10sec = document.createElement('button')
btnFoward10sec.innerHTML = '+ 10s'
btnFoward10sec.classList.add('btn-player')
btnFoward10sec.addEventListener('click', () => {
    videoFowardTime(10)
    video.play()
})

const btnFoward20sec = document.createElement('button')
btnFoward20sec.innerHTML = '+ 20s'
btnFoward20sec.classList.add('btn-player')
btnFoward20sec.addEventListener('click', () => {
    videoFowardTime(20)
    video.play()
})

const btnInitPrevia = document.createElement('button')
btnInitPrevia.innerHTML = `Ir para ${localStorage.tempoPrevia ?? "00:00"}`
btnInitPrevia.classList.add('btn-player')
btnInitPrevia.addEventListener('click', () => {
    video.currentTime = videoPosition(localStorage.tempoPrevia)
    video.play()
})

const btnConfigPrevia = document.createElement('button')
setTextButton(btnConfigPrevia, `Configurar Prévia`)
btnConfigPrevia.classList.add('btn-player')
btnConfigPrevia.addEventListener('click', () => {
    const tempo = prompt("Informe o tempo no formato 'mm:ss'", localStorage.tempoPrevia)
    if (tempo) {
        localStorage.tempoPrevia = tempo
        setTextButton(btnInitPrevia, `Ir para ${tempo ?? "0:00"}`)
    }
})

const player = document.createElement('div')
player.appendChild(btnConfigInicio)
player.appendChild(btnInitAnime)
player.appendChild(btnBack20sec)
player.appendChild(btnBack10sec)
player.appendChild(btnBack5sec)
player.appendChild(btnFoward5sec)
player.appendChild(btnFoward10sec)
player.appendChild(btnFoward20sec)
player.appendChild(btnInitPrevia)
player.appendChild(btnConfigPrevia)

player.classList.add('style-player')

const postVideo = document.querySelector('.post-video')
postVideo.appendChild(player)