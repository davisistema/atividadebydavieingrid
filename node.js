const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa da mudança climática?",
        alternativas: [a) Emissões de gases de efeito estufa
b) Poluição dos oceanos]       
            {
                texto: "As emissões de gases de efeito estufa, como CO2 e metano, intensificam o aquecimento global, contribuindo significativamente para as mudanças climáticas.",
                afirmacao: "As emissões de gases de efeito estufa, como CO2 e metano, intensificam o aquecimento global, contribuindo significativamente para as mudanças climáticas."
            },
            {
                texto:  "A queima de combustíveis fósseis e a desflorestação aumentam as concentrações de gases de efeito estufa na atmosfera, acelerando o processo de mudança climática.",
                afirmacao: "A queima de combustíveis fósseis e a desflorestação aumentam as concentrações de gases de efeito estufa na atmosfera, acelerando o processo de mudança climática.
"
            }
        ]
{
        enunciado: "O que pode ajudar a conservar a biodiversidade?",
        alternativas: [ a) Aumentar as áreas protegidas
b) Reduzir o uso de plástico]       
            {
                texto: "Criar mais áreas protegidas, como parques e reservas, é essencial para preservar habitats naturais e proteger espécies ameaçadas.",
                afirmacao: "O desmatamento é uma das principais causas da perda de biodiversidade."
            },
            {
                texto:  "Reduzir o uso de plástico ajuda a diminuir a poluição e proteger a vida selvagem dos impactos do plástico, embora não resolva diretamente todos os problemas de biodiversidade.",
                afirmacao: "A energia renovável é uma alternativa sustentável às fontes de energia fósseis."
            }
        ]
    {
        enunciado: "Qual é uma prática eficaz para conservar água em casa?",
        alternativas: [ a- Tomar banhos longos,
b- Fechar a torneira enquanto escova os dentes,
c- Usar um aspirador de água para limpar o chão,]       
            {
                texto: "A poluição dos oceanos, incluindo plásticos e produtos químicos, prejudica os ecossistemas marinhos, mas não é a principal causa do aquecimento global.",
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
