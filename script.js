const caixaPrincipal = document.querySelector(".caixa-prinncipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No coração de uma floresta densa e esquecida pelo tempo, erguia-se uma casa antiga e abandonada. Suas paredes de madeira apodrecida rangiam ao vento noturno, e suas janelas quebradas pareciam olhos vazios observando o mundo exterior com um ar de mistério e desolação. Havia uma aura de medo e segredos sinistros que pairava sobre aquele lugar, conhecido pelos moradores locais apenas como A Casa do Medo. Na noite em questão, você, um explorador curioso em busca de emoções fortes, decide desafiar os rumores sobre a casa. Sob o brilho pálido da lua cheia, você se aproxima cautelosamente da entrada, cuja porta range ao abrir com um som estridente que ecoa pela floresta. Ao entrar, a escuridão envolve você como um manto gélido. O ar está impregnado com um cheiro de mofo e algo indescritivelmente podre. Seu coração bate acelerado, mas a curiosidade alimenta sua coragem. A única fonte de luz é a lanterna tremeluzente que você segura firme em uma das mãos. Subitamente, um som gutural ecoa das sombras além da escada que leva ao andar superior da casa. Uma voz rouca, quase sussurrante, pergunta: Quem ousa perturbar meu sono?",
        alternativas: [
            {
                texto: "Eu não quero problemas. Estou apenas de passagem.",
                afirmacao: "afirmação"
            },
            {
                texto: "Mostre-se! Eu não tenho medo de fantasmas!",
                afirmacao: "afirmação"
            }
        ]
    }
 ];
 
 
 let atual = 0;
 let perguntaAtual;
 
 
 function mostrapergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    };
 
 
 mostrapergunta();
 
 
 
 
 