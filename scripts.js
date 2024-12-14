let res = document.querySelector(".res")
let title_app = document.querySelector("#title-app")

function formatar_tempo(tempo) {

    if (tempo >= 0 && tempo <= 9) {
        var tempo_formatado = tempo.toString()
        tempo_formatado = "0" + tempo_formatado
    } else {
        var tempo_formatado  = tempo.toString()
    }    
    return tempo_formatado

}

function count() {

    let data_atual = new Date()
    data_atual = data_atual.getTime()
    
    let data_final = new Date("2025-04-16 18:48:00")
    data_final = data_final.getTime()
    
    let ms_restante = new Date(data_final - data_atual)

    let dias = Math.round(ms_restante / 84600000)
    let horas = ms_restante.getUTCHours()
    let minutos = ms_restante.getUTCMinutes()
    let segundos = ms_restante.getUTCSeconds()

    res.innerHTML = `${dias} dias ${formatar_tempo(horas)}h ${formatar_tempo(minutos)}m ${formatar_tempo(segundos)}s`

    if (ms_restante <= 0) {        
        title_app.innerHTML = "GAMEOVER!"
        window.clearInterval(count_app)
    }

}

let count_app = window.setInterval(count, 1000)
count()