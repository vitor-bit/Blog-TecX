const localStorageContadorRe = localStorage.getItem("contadorRe")
const localStorageDataGet = localStorage.getItem("data")

const redirecionarPagInicial = () => {
    window.location.href = '/Blog/Html/pagina-inicial.html'
}

const redirecionarSobreMim = () => {
    window.location.href = '/Blog/Html/sobre-mim.html'
}

const retornarData = () => {
    let date = new Date()
    let dia = date.getDate()
    let mes = 1 + date.getMonth()
    let ano = date.getFullYear()
    mes < 10 ? mes = "0" + mes : mes
    dia < 10 ? dia = "0" + dia : dia
    date = dia + "/" + mes + "/" + ano 
    localStorage.setItem("data", date) 
    return localStorageDataGet
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorageContadorRe === null) {
        document.getElementById("visualizacoes").innerHTML = `${0}`
    } else {
        document.getElementById("visualizacoes").innerHTML = `${localStorageContadorRe}`
    }
    document.getElementById("data").innerHTML = `${retornarData()}`
})

