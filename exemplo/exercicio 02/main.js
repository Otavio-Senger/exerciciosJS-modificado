// alert('Olá, mundo');
function contadorCaracteres() {
    //obtem o valor digitado pelo usuario
    var textoContar =  document.getElementById("textArea").value;

//gera mensagem de conta
var mensagem= "A frase tem: " + textoContar.length + " caracteres!";

//Exibe a mensagem de saudacao no elemento com o id "mensagemSaudacao"
document.getElementById("mensagemContada").innerText = mensagem;

//Limpa o campo de entrada
document.getElementById("textArea").value = "";

}
