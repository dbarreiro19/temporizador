let res = document.querySelector(".res")
let title_app = document.querySelector("#title-app")

function count() {

    let data_atual = new Date()
    data_atual = data_atual.getTime()

    let data_final = new Date("2025-04-17")
    data_final = data_final.getTime()
    
    let diferenca_ms = data_final - data_atual

    let dias = Math.round(diferenca_ms / 86400000)

    let horas = Math.round(diferenca_ms / 3600000)

    let minutos = Math.round(diferenca_ms / 60000)
    
    let segundos = Math.round(diferenca_ms / 1000)

    res.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

    if (diferenca_ms <= 0) {        
        title_app.innerHTML = "FIM!"
        window.clearInterval(count_app)
    }

}

let count_app = window.setInterval(count, 1000)

count()