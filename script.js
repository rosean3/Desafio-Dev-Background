const backgrounds = ["background1", "background2", "background3"];
const textos = ["Background:  #292929", "Background:  #F2F2F2", "Background:  #C7C7C7"];

const body = window.document.querySelector("#corpo");
const botao = window.document.querySelector("#botao");

botao.addEventListener('click', () => {
    for (i=0; i<3; i++){
        if(body.classList.contains(backgrounds[i])){
            body.classList.remove(backgrounds[i]);
            body.classList.add(backgrounds[(i+1)%3]);
            document.querySelector("#texto-seguinte").innerHTML = textos[(i+1)%3];
            break;
        }
    }
})
