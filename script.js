const button = document.getElementById("btn");
const modal = document.querySelector("#dialog-login");

btn.onclick = function() {
    modal.showModal();
}



function logar(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    if(login == "thiago" && senha == "thiago"){
        window.alert("Login feito.")
    }
    else if(login == "" || senha == null){
        let p = document.getElementById("paragrafo");
        p.innerHTML = "O campo não pode ficar vazio.";
        p.style.color = "red";

    }

}


const cadastro = document.getElementById("cadastrar")
const modalCadastro = document.querySelector("#dialog-cadastro")

cadastro.onclick = function(){
    modalCadastro.showModal();
}