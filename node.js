const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma prática eficaz para conservar água em casa?",
        alternativas: [ a- Tomar banhos longos,
b- Fechar a torneira enquanto escova os dentes,
c- Usar um aspirador de água para limpar o chão,]       
            {
                texto: "A prática de fechar a torneira enquanto escova os dentes é a mais eficaz para conservar água. Deixar a torneira aberta pode desperdiçar até 10 litros de água em dois minutos, enquanto fechar a torneira durante a escovação é uma maneira simples e eficiente de economizar esse recurso vital. Em contraste, tomar banhos longos resulta em um alto consumo de água, com cerca de 100 litros sendo usados em um banho de 10 minutos, o que contribui para o desperdício de água. Embora usar um aspirador de água para limpar o chão possa ser prático para a limpeza, não está diretamente relacionado à conservação de água e, na verdade, pode levar a um aumento no consumo total de água.",
                afirmacao: "Portanto, fechar a torneira ao escovar os dentes é a melhor prática para conservar água."
            },
            {
                texto:  "A prática de desligar os aparelhos eletrônicos quando não estão em uso é a mais eficaz para reduzir o consumo de energia em casa. Aparelhos em modo de espera (standby) ainda consomem energia, conhecida como energia fantasma, o que pode somar uma quantidade significativa no final do mês. Em comparação, deixar os eletrônicos em modo de espera não resolve o problema do consumo contínuo de energia e contribui para o desperdício. Usar iluminação decorativa em vez de iluminação principal pode reduzir o consumo de energia apenas em menor escala, pois a eficiência energética depende mais da utilização geral de eletricidade e da eficiência dos próprios aparelhos de iluminação.",
                afirmacao: "Portanto, desligar os aparelhos eletrônicos quando não estão em uso é a melhor ação para reduzir o consumo de energia."
            }
        ]
    },
    // adicione acima as pergundas substituindo as originais
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta();