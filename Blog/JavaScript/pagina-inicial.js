const localStorageContadorJa = localStorage.getItem("contadorJa")
const somaContadorJa = Number(localStorageContadorJa) + 1

const localStorageContadorAn = localStorage.getItem("contadorAn")
const somaContadorAn = Number(localStorageContadorAn) + 1

const localStorageContadorJs = localStorage.getItem("contadorJs")
const somaContadorJs = Number(localStorageContadorJs) + 1

const localStorageContadorRe = localStorage.getItem("contadorRe")
const somaContadorRe = Number(localStorageContadorRe) + 1

const localStorageContadorSc = localStorage.getItem("contadorSc")
const somaContadorSc = Number(localStorageContadorSc) + 1

const localStorageContadorPy = localStorage.getItem("contadorPy")
const somaContadorPy = Number(localStorageContadorPy) + 1

const localStorageContadorKa = localStorage.getItem("contadorKa")
const somaContadorKa = Number(localStorageContadorKa) + 1

const localStorageDataGet = localStorage.getItem("data")

const filtrarCategorias = (id) => {
    if (id === "todas") {
        window.location.href = '/Blog/Html/pagina-inicial.html'
    } else if (id === "linguagens") {
        window.location.href = '/Blog/Html/categoria-linguagens.html'
    } else if (id === "frameworks") {
        window.location.href = '/Blog/Html/categoria-frameworks.html'
    } else if (id = "metodologias") {
        window.location.href = '/Blog/Html/categoria-metodologias.html'
    }
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

const redirecionarSobreMim = () => {
    window.location.href = '/Blog/Html/sobre-mim.html'
}

const redirecionarCards = (id) => {
    if (id === "java") {
        localStorage.setItem("contadorJa", somaContadorJa)
        window.location.href = '/Blog/Html/post-java.html'
    } else if (id === "angular") {
        localStorage.setItem("contadorAn", somaContadorAn)
        window.location.href = '/Blog/Html/post-angular.html'
    } else if (id === "java-script") {
        localStorage.setItem("contadorJs", somaContadorJs)
        window.location.href = '/Blog/Html/post-js.html'
    } else if (id === "react") {
        localStorage.setItem("contadorRe", somaContadorRe)
        window.location.href = '/Blog/Html/post-react.html'
    } else if (id === "scrum") {
        localStorage.setItem("contadorSc", somaContadorSc)
        window.location.href = '/Blog/Html/post-scrum.html'
    } else if (id === "python") {
        localStorage.setItem("contadorPy", somaContadorPy)
        window.location.href = '/Blog/Html/post-python.html'
    } else if (id === "kanban") {
        localStorage.setItem("contadorKa", somaContadorKa)
        window.location.href = '/Blog/Html/post-kanban.html'
    }
}

let url = window.location.pathname


if (url === '/Blog/Html/categoria-linguagens.html') {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("data-ja").innerHTML = `${retornarData()}`
        document.getElementById("data-js").innerHTML = `${retornarData()}`
        document.getElementById("data-py").innerHTML = `${retornarData()}`
        if (localStorageContadorJa === null) {
            document.getElementById("visualizacoes-ja").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-ja").innerHTML = `${localStorageContadorJa}`
        }
        if (localStorageContadorJs === null) {
            document.getElementById("visualizacoes-js").innerHTML = `${0}`

        } else {
            document.getElementById("visualizacoes-js").innerHTML = `${localStorageContadorJs}`
        }
        if (localStorageContadorPy === null) {
            document.getElementById("visualizacoes-py").innerHTML = `${0}`

        } else {
            document.getElementById("visualizacoes-py").innerHTML = `${localStorageContadorPy}`
        }
    })

} else if (url === '/Blog/Html/categoria-frameworks.html') {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("data-an").innerHTML = `${retornarData()}`
        document.getElementById("data-re").innerHTML = `${retornarData()}`
        if (localStorageContadorAn === null) {
            document.getElementById("visualizacoes-an").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-an").innerHTML = `${localStorageContadorAn}`
        }
        if (localStorageContadorRe === null) {
            document.getElementById("visualizacoes-re").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-re").innerHTML = `${localStorageContadorRe}`
        }
    })
} else if (url === '/Blog/Html/categoria-metodologias.html') {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("data-sc").innerHTML = `${retornarData()}`
        document.getElementById("data-ka").innerHTML = `${retornarData()}`
        if (localStorageContadorSc === null) {
            document.getElementById("visualizacoes-sc").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-sc").innerHTML = `${localStorageContadorSc}`
        }
        if (localStorageContadorKa === null) {
            document.getElementById("visualizacoes-ka").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-ka").innerHTML = `${localStorageContadorKa}`
        }
    })
} else {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("data-ja").innerHTML = `${retornarData()}`
        document.getElementById("data-an").innerHTML = `${retornarData()}`
        document.getElementById("data-js").innerHTML = `${retornarData()}`
        document.getElementById("data-re").innerHTML = `${retornarData()}`
        document.getElementById("data-sc").innerHTML = `${retornarData()}`
        document.getElementById("data-py").innerHTML = `${retornarData()}`
        document.getElementById("data-ka").innerHTML = `${retornarData()}`
        if (localStorageContadorJa === null) {
            document.getElementById("visualizacoes-ja").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-ja").innerHTML = `${localStorageContadorJa}`
        }
        if (localStorageContadorJs === null) {
            document.getElementById("visualizacoes-js").innerHTML = `${0}`

        } else {
            document.getElementById("visualizacoes-js").innerHTML = `${localStorageContadorJs}`
        }
        if (localStorageContadorPy === null) {
            document.getElementById("visualizacoes-py").innerHTML = `${0}`

        } else {
            document.getElementById("visualizacoes-py").innerHTML = `${localStorageContadorPy}`
        }
        if (localStorageContadorAn === null) {
            document.getElementById("visualizacoes-an").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-an").innerHTML = `${localStorageContadorAn}`
        }
        if (localStorageContadorRe === null) {
            document.getElementById("visualizacoes-re").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-re").innerHTML = `${localStorageContadorRe}`
        }
        if (localStorageContadorSc === null) {
            document.getElementById("visualizacoes-sc").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-sc").innerHTML = `${localStorageContadorSc}`
        }
        if (localStorageContadorKa === null) {
            document.getElementById("visualizacoes-ka").innerHTML = `${0}`
        } else {
            document.getElementById("visualizacoes-ka").innerHTML = `${localStorageContadorKa}`
        }

    })
}



const abrirMenu = () => {
    let categorias = document.getElementById("categorias")
    let buttonCategorias = document.getElementById("button-categorias")
    let todas = document.getElementById("todas")
    let linguagens = document.getElementById("linguagens")
    let frameworks = document.getElementById("frameworks")
    let metodologias = document.getElementById("metodologias")

    if (window.innerWidth < 481) {
        if (categorias.style.listStyle === "none") {
            categorias.style.removeProperty("transition")
            categorias.style.removeProperty("display")
            categorias.style.removeProperty("flex-direction")
            categorias.style.removeProperty("justify-content")
            categorias.style.removeProperty("align-items")
            categorias.style.removeProperty("position")
            categorias.style.removeProperty("list-style")
            categorias.style.removeProperty("margin-top")
            categorias.style.removeProperty("background-color")
            categorias.style.removeProperty("border-radius")
            categorias.style.removeProperty("color")
            categorias.style.removeProperty("font-family")
            todas.remove()
            linguagens.remove()
            frameworks.remove()
            metodologias.remove()
            buttonCategorias.style.removeProperty("border-radius")
            buttonCategorias.style.removeProperty("border-radius")
            buttonCategorias.style.removeProperty("padding")
            buttonCategorias.style.removeProperty("transition")
        } else {
            categorias.innerHTML = `
            <li id="todas" onclick="filtrarCategorias('todas')" >Todas</li>
            <li id="linguagens" onclick="filtrarCategorias('linguagens')">Linguagens</li>
            <li id="frameworks" onclick="filtrarCategorias('frameworks')">Frameworks</li>
            <li id="metodologias" onclick="filtrarCategorias('metodologias')">Metodologias</li>
        `
            categorias.style.display = "flex"
            categorias.style.justifyContent = "center"
            categorias.style.alignItems = "center"
            categorias.style.flexDirection = "column"
            categorias.style.position = "absolute"
            categorias.style.marginTop = "1rem"
            categorias.style.backgroundColor = "transparent"
            categorias.style.backdropFilter = "blur(0.5rem)"
            categorias.style.borderRadius = "0.2rem"
            categorias.style.listStyle = "none"
            categorias.style.transition = "0.5s"
            buttonCategorias.style.borderRadius = "0.3rem"
            buttonCategorias.style.padding = "0.3rem"
            buttonCategorias.style.transition = "0.2s"
        }
    } else {
        if (categorias.style.listStyle === "none") {
            categorias.style.removeProperty("transition")
            categorias.style.removeProperty("display")
            categorias.style.removeProperty("position")
            categorias.style.removeProperty("list-style")
            categorias.style.removeProperty("margin-top")
            categorias.style.removeProperty("background-color")
            categorias.style.removeProperty("border-radius")
            categorias.style.removeProperty("color")
            categorias.style.removeProperty("font-family")
            todas.remove()
            linguagens.remove()
            frameworks.remove()
            metodologias.remove()
            buttonCategorias.style.removeProperty("border-radius")
            buttonCategorias.style.removeProperty("border-radius")
            buttonCategorias.style.removeProperty("padding")
            buttonCategorias.style.removeProperty("transition")
        } else {
            categorias.innerHTML = `
            <li id="todas" onclick="filtrarCategorias('todas')" >Todas</li>
            <li id="linguagens" onclick="filtrarCategorias('linguagens')">Linguagens</li>
            <li id="frameworks" onclick="filtrarCategorias('frameworks')">Frameworks</li>
            <li id="metodologias" onclick="filtrarCategorias('metodologias')">Metodologias</li>
        `
            categorias.style.display = "flex"
            categorias.style.position = "absolute"
            categorias.style.marginTop = "1rem"
            categorias.style.backgroundColor = "transparent"
            categorias.style.backdropFilter = "blur(0.5rem)"
            categorias.style.borderRadius = "0.2rem"
            categorias.style.listStyle = "none"
            categorias.style.transition = "0.5s"
            buttonCategorias.style.borderRadius = "0.3rem"
            buttonCategorias.style.padding = "0.3rem"
            buttonCategorias.style.transition = "0.2s"
        }
    }
}
