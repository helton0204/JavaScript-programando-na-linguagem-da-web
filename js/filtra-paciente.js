
let filtroPaciente = document.querySelector("#filtrar-tabela");

filtroPaciente.addEventListener("input", function(){
    let nomesPacientes = document.querySelectorAll(".info-nome");
    for(let i = 0; i < nomesPacientes.length; i++) {
        if(nomesPacientes[i].textContent == this.value){
            nomesPacientes[i].parentNode.classList.add("busca-nome");
            break;
        }
        else{
            nomesPacientes.forEach(nomePaciente => {
                nomePaciente.parentNode.classList.remove("busca-nome");
            });
        }
    }
});

