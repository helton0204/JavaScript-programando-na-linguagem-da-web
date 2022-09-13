
//document.querySelector("#alura").innerHTML = "Novo texto"
//com a propriedade innerHTML é obtido o conteúdo (string) interno de um elemento html:  document.querySelector("#alura").innerHTML
//para sobrescrever esse conteúdo interno de um elemento html, faz o seguinte procedimento: document.querySelector("#alura").innerHTML = "Novo texto"


function obtemPacienteDoFormulario(formulario){ //Essa função recebe um elemento html com todos os dados de um paciente e retorna um objeto js com os dados desse cliente
    let paciente = {
        nome: formulario.querySelector("#nome").value, //pegado o valor de cada campo do formulário
        peso: formulario.querySelector("#peso").value, //dados de input são acessados por value
        altura: formulario.querySelector("#altura").value,
        gordura: formulario.querySelector("#gordura").value,
        imc: calculaImc(formulario.querySelector("#peso").value, formulario.querySelector("#altura").value)
    }
    return paciente;
}

function montaTagPaciente(nomeTag, nomeClass, dadoPaciente){ //Essa função recebe por parâmetro o nome da tag, o nome da classe e o texto da tag e cria um elemento html
    let tag = document.createElement(nomeTag);
    
    tag.classList.add(nomeClass);

    tag.textContent = dadoPaciente; //o elemento html recebe um texto
    
    return tag;
}

function pacienteValido(paciente){ ////Essa função recebe por parâmetro um objeto com os dados de um paciente e retorna um booleam indicando se todos os dados do mesmo estão corretos
    let tagErro = document.querySelector(".mensagem-erro");
    if(paciente.peso > 0 && paciente.altura > 0 && paciente.nome.length != 0){
        tagErro.textContent = "";
        return true;
    }
    else if(paciente.nome.length == 0){
        tagErro.textContent = "Digite o nome do paciente";
    }
    else if(paciente.peso < 0 && paciente.altura > 0){
        tagErro.textContent = "Peso não pode ser negativo";
    }
    else if(paciente.peso > 0 && paciente.altura < 0){
        tagErro.textContent = "Altura não pode ser negativa";
    }
    else if(paciente.peso < 0 && paciente.altura < 0){
        tagErro.textContent = "Peso e altura não podem ser negativos";
    }
    return false;
}

function insereTrNaTabela(paciente){ //Essa função recebe por parâmetro um objeto com os dados de um paciente e retorna um elemento html (tr) 
    let pacienteTr = montaTagPaciente("tr", "paciente");
    let nomeTd = montaTagPaciente("td", "info-nome", paciente.nome);
    let pesoTd = montaTagPaciente("td", "info-peso", paciente.peso);
    let alturaTd = montaTagPaciente("td", "info-altura", paciente.altura);
    let gorduraTd = montaTagPaciente("td", "info-gordura", paciente.gordura);
    let imcTd = montaTagPaciente("td", "info-imc", paciente.imc);

    let tabelaPacientes = document.querySelector("#tabela-pacientes"); //o id tabela-pacientes é um elemento html que envolve todas as tr dos pacientes. Cada tr possui nome, peso, altura, gordura e imc do cliente 

    if(pacienteValido(paciente)){
        tabelaPacientes.appendChild(pacienteTr);
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click', (event) => { //a adição de novas tr no formulário está atrelada ao clique no botão de id adicionar-paciente
    event.preventDefault(); //faz com que o evento padrão do elemento considerado não aconteça
    
    //recebendo dados do formulário 
    let formulario = document.querySelector("#form-adiciona"); //este formulário é o elemento html que recebe os dados para adição de um paciente na tabela
    let paciente = obtemPacienteDoFormulario(formulario); //paciente é um objeto js que contém, nos atributos, as informações de um paciente 
    
    //adicionando as tags criagas no html
    insereTrNaTabela(paciente);

    formulario.reset(); //limpa os dados do formulário
});