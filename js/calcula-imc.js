
let titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista"; //muda o texto da tag html

function calculaImc(peso, altura){
    let imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}

let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let imc = paciente.querySelector(".info-imc");
    if(peso < 0 || altura <0){
        paciente.classList.add("campo-invalido");
        imc.textContent = "imc inválido";
    }
    else{
        imc.textContent = calculaImc(peso, altura); //toFixed(2) fixa o número decimal em 2 casas
    }
});

