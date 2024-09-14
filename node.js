
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

[
    {
        "enunciado": "Qual das seguintes ações é mais eficaz para preservar o meio ambiente?",
        "alternativas": [ a-Reduzir o consumo de plástico é fundamental b-Programas de reciclagem são essenciais]
            {
                "texto": "Reduzir o consumo de plástico e adotar materiais reutilizáveis.",
                "afirmacao": "Você acredita que reduzir o uso de plástico e optar por materiais reutilizáveis ajuda a diminuir a poluição e preservar os recursos naturais."
            },
            {
                "texto": "Participar de programas de reciclagem e incentivar a coleta seletiva.",
                "afirmacao": "Você considera que a reciclagem e a coleta seletiva são práticas essenciais para reduzir a quantidade de resíduos e o impacto ambiental."
            }
        ]
    }

    {
        "enunciado": "Como podemos contribuir para reduzir as mudanças climáticas?",
        "alternativas": [a-Ao utilizar transportes sustentáveis, como bicicletas ou transporte público, diminuímos nossa pegada de carbono, contribuindo para a redução das emissões de gases b- O investimento em energia renovável,é crucial para a transição para uma matriz energética limpa ]
            {
                "texto": "Optando por meios de transporte sustentáveis, como bicicletas ou transporte público.",
                "afirmacao": "Você acredita que a escolha de transportes sustentáveis ajuda a reduzir as emissões de carbono e desacelerar as mudanças climáticas."
            },
            {
                "texto": "Investindo em energia renovável, como solar e eólica.",
                "afirmacao": "Você considera que o uso de energia renovável é uma solução viável para diminuir a dependência de combustíveis fósseis e mitigar os efeitos das mudanças climáticas."
            }
        ]
    },
    {
        "enunciado": "O que pode ser feito para reduzir a poluição dos oceanos?",
        "alternativas": [a-Reduzir o uso de plásticos descartáveis pode diminuir drasticamente a quantidade de resíduos que chegam aos oceanos b-Campanhas de conscientização e limpeza de praias.]
            {
                "texto": "Reduzir o uso de plásticos descartáveis e promover a reciclagem.",
                "afirmacao": "Você acredita que a redução do uso de plásticos descartáveis pode ajudar a diminuir a quantidade de resíduos nos oceanos."
            },
            {
                "texto": "Incentivar a limpeza das praias e a conscientização sobre a poluição marinha.",
                "afirmacao": "Você considera que campanhas de limpeza e conscientização são eficazes para reduzir a poluição nos mares e oceanos."
            }
        ]
    }
]
  }

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
