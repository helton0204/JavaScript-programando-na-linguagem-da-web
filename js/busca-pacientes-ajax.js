//Introdução ao AJAX
let buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){
    let xhr = new XMLHttpRequest(); //Objeto javascript responsável por fazer requisições HTTP assíncronas com Javascript.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //Abre a conexão com o endereço que se deseja fazer uma requisição. Por parâmetro é passado o tipo de requisição que se deseja fazer e o endereço da requisição.

    xhr.send(); //Pega a requisição criada acima e a envia

    xhr.addEventListener("load", function(){
        let msgErro = document.querySelector("#erro-ajax");
        if(xhr.status == 200){ //Essa condição testa se não houve erro durante a requisição dos dados. 
            msgErro.textContent = "";
            let resposta = xhr.responseText; //Quando a requisição estiver carregada, ela é obtida pelo xhr.responseText
            let pacientes = JSON.parse(resposta); //Transforma uma string (escrita no formato de objeto) em um objeto javascript
            
            pacientes.forEach(paciente => { //cada objeto paciente de pacientes é inserido na tabela através da função insereTrNaTabela() criada no arquivo adiciona-linhas-formulario
                insereTrNaTabela(paciente); //tabelaPacientes é uma variável, criada no arquivo adiciona-linhas-formulario, que recebeu um seletor document.queryselector, esse seletor é o da tabela de pacientes
            });
        }
        else{
            msgErro.textContent = "Erro ao carregar os dados";
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    });
});