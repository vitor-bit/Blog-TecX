const redirecionarPagInicial = () => {
    window.location.href = '/Blog/Html/pagina-inicial.html'
}

const redirecionarLink = (id) => {
    
    if(id === "linkedin"){
        window.location.href = 'https://www.linkedin.com/in/vitor-bitencourt-falasca-4511ab266/'
    }else if (id === "git-hub") {
        window.location.href = 'https://github.com/vitor-bit'
    }else{
        window.location.href = 'https://www.instagram.com/vitor_f.b/'
    }    
}

const abrirMenu = () => {
    let categorias = document.getElementById("categorias")
    let buttonPostagens = document.getElementById("button-postagens")
    let java = document.getElementById("java")
    let angular = document.getElementById("angular")
    let javaScript = document.getElementById("java-script")
    let react = document.getElementById("react")
    let scrum = document.getElementById("scrum")
    let python = document.getElementById("python")
    let kanban = document.getElementById("kanban")

    if (window.innerWidth < 768) {
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
            java.remove()
            angular.remove()
            javaScript.remove()
            react.remove()
            scrum.remove()
            python.remove()
            kanban.remove()
            buttonPostagens.style.removeProperty("border-radius")
            buttonPostagens.style.removeProperty("padding")
            buttonPostagens.style.removeProperty("transition")
        } else {
            categorias.innerHTML = `
            <li id="java" onclick="filtrarPostagens('java')" >Java</li>
            <li id="angular" onclick="filtrarPostagens('angular')">Angular</li>
            <li id="java-script" onclick="filtrarPostagens('java-script')">Java Script</li>
            <li id="react" onclick="filtrarPostagens('react')">React</li>
            <li id="scrum" onclick="filtrarPostagens('scrum')">Scrum</li>
            <li id="python" onclick="filtrarPostagens('python')">Python</li>
            <li id="kanban" onclick="filtrarPostagens('kanban')">Kanban</li>
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
            buttonPostagens.style.borderRadius = "0.3rem"
            buttonPostagens.style.padding = "0.3rem"
            buttonPostagens.style.transition = "0.2s"
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
            java.remove()
            angular.remove()
            javaScript.remove()
            react.remove()
            scrum.remove()
            python.remove()
            kanban.remove()
            buttonPostagens.style.removeProperty("border-radius")
            buttonPostagens.style.removeProperty("padding")
            buttonPostagens.style.removeProperty("transition")
        } else {
            categorias.innerHTML = `
            <li id="java" onclick="filtrarPostagens('java')" >Java</li>
            <li id="angular" onclick="filtrarPostagens('angular')">Angular</li>
            <li id="java-script" onclick="filtrarPostagens('java-script')">Java Script</li>
            <li id="react" onclick="filtrarPostagens('react')">React</li>
            <li id="scrum" onclick="filtrarPostagens('scrum')">Scrum</li>
            <li id="python" onclick="filtrarPostagens('python')">Python</li>
            <li id="kanban" onclick="filtrarPostagens('kanban')">Kanban</li>
        `
            categorias.style.display = "flex"
            categorias.style.position = "absolute"
            categorias.style.marginTop = "1rem"
            categorias.style.backgroundColor = "transparent"
            categorias.style.backdropFilter = "blur(0.5rem)"
            categorias.style.borderRadius = "0.2rem"
            categorias.style.listStyle = "none"
            categorias.style.transition = "0.5s"
            buttonPostagens.style.borderRadius = "0.3rem"
            buttonPostagens.style.padding = "0.3rem"
            buttonPostagens.style.transition = "0.2s"
        }
    }
}

const filtrarPostagens = (id) => {
    if (id === "java") {
        window.location.href = '/Blog/Html/post-java.html'
    } else if (id === "angular") {
        window.location.href = '/Blog/Html/post-angular.html'
    } else if (id === "java-script") {
        window.location.href = '/Blog/Html/post-js.html'
    } else if (id === "react") {
        window.location.href = '/Blog/Html/post-react.html'
    }else if (id === "scrum") {
        window.location.href = '/Blog/Html/post-scrum.html'
    }else if (id === "python") {
        window.location.href = '/Blog/Html/post-python.html'
    }else if (id === "kanban") {
        window.location.href = '/Blog/Html/post-kanban.html'
    }
}
