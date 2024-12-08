// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

// USANDO FUNÇÃO DO HTML PARA O JAVASCRIPT


let numerosSorteados = []
let limiteNumero = 10 ;
let numeroSecreto = gerarNumero(); // SALVA O NUMERO GERADO



// RESUMINDO COM FUNCTION COMO INSERIR ELEMENTOS NO HTML

function inserirHtml(tag, text) {
    let texto = document.querySelector(tag);
    texto.innerHTML = text
};

function MensagemInicial(){
    inserirHtml('h1', 'Jogo do número secreto');
    inserirHtml('p', 'Escolha um numero de 1 a 10');
};

MensagemInicial();


//VERIFICADOR DE NUMERO 

let chances = 1;

function verificarChute(){
    let chute = document.querySelector('input').value
   
    if (chute == numeroSecreto) {
        inserirHtml('h1', 'ACERTOU!');
        let palavraTentativa = chances > 1 ? 'tentativas' : 'tentativa';
        inserirHtml('p', `Você descobriu o número secreto em ${chances} ${palavraTentativa}` );
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else if (chute > numeroSecreto){
        inserirHtml('p', 'O número secreto é menor. tente novamente!');
    }else {
        inserirHtml('p','O número secreto é maior. tente novamente');
    }
    chances++;
    limparCampo();
};

// GERADOR DE NUMEROS 

function gerarNumero(){
    let numero = parseInt(Math.random() * limiteNumero + 1);

    let quantidadeNumeros = numerosSorteados.length;
    if (quantidadeNumeros == limiteNumero){
        numerosSorteados = [];
    };

    if (numerosSorteados.includes(numero)){
        return gerarNumero();
    }else{
        numerosSorteados.push(numero);
        return numero;
    }

}

// limpar campo de input

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// NOVO JOGO

function novoJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    chances = 1;
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}    