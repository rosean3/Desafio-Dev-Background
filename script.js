let backgrounds = ["background1", "background2", "background3"];

let body = window.document.querySelector("#corpo");
body.classList.add("background1");
const botao = window.document.querySelector("#botao");
botao.addEventListener('click', () => {
    if(body.classList.contains(backgrounds[0])){
        body.classList.remove(backgrounds[0]);
        body.classList.add(backgrounds[(1)]);
        document.querySelector("#texto-seguinte").innerHTML = "Background:  #F2F2F2"
    }
    else if(body.classList.contains(backgrounds[1])){
        body.classList.remove(backgrounds[1]);
        body.classList.add(backgrounds[(2)]);
        document.querySelector("#texto-seguinte").innerHTML = "Background:  #C7C7C7"
    }
    else if(body.classList.contains(backgrounds[2])){
        body.classList.remove(backgrounds[2]);
        body.classList.add(backgrounds[(0)]);
        document.querySelector("#texto-seguinte").innerHTML = "Background:  #292929"
    }
})