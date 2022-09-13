//<script>
//    var lis = document.querySelectorAll('li');
//    lis.forEach(li => {
//        li.addEventListener('click', function(){
//            alert(this.textContent); this se refere dinamicamente ao elemento que sofreu o evento de clique
//        });
//    }); 
//</script>


let tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function(event){
    let alvoEvento = event.target; //seleciona o elemento html que foi dado um duplo clique
    let paiAlvo = alvoEvento.parentNode; //seleciona o elemento html pai do elemento alvoEvento  

    paiAlvo.classList.add("fade-out");

    setTimeout(function(){ //A função setTimeout diapara uma função anônima após um período de tempo (nesse exemplo 500ms)
        paiAlvo.remove(); //event.target se refere ao alemento html que sofreu a ação do addEventListener. A função remove() remove um elemento html
    }, 300);
    
});

