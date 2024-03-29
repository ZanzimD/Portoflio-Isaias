


const abas = document.querySelectorAll(".aba"); 


abas.forEach((aba) => {
    aba.addEventListener("click", function(){
        if (aba.classList.contains("selecionado")) return;

       selecionarAba(aba);
       mostrarInformacoesDaAba(aba);

    });
});

function selecionarAba(aba) {
    //passo 3:
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    //passo 4:
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    //passo 5:
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6:
   informacaoASerMostrada.classList.add("selecionado")}