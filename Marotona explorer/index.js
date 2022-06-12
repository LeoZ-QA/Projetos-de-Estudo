const elementoRespostas = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar =document.querySelector("#buttonPerguntar")
const respostas=[
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Ameu ver,sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {
  //aviso de pergunta vazia
  if(inputPergunta.value == "") {
    alert("Digite sua Pergunta")
    return
  }
  
  buttonPerguntar.setAttribute("disabled", true)

  //imprimindo a pergunta
  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  // Imprimir a resposta
  elementoRespostas.innerHTML = pergunta + respostas[numeroAleatorio]

  //manter a reposta antes de apagar
  elementoRespostas.style.opacity = 1;

  //sumir a resposta depois de 3 segundos
  setTimeout(function(){
    elementoRespostas.style.opacity = 0;
  }, 3000)
  buttonPerguntar.removeAttribute("disabled")
}