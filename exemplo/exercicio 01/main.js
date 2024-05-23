// alert('Olá, mundo');
function saudacao() {
    //obtem o valor digitado pelo usuario
    var nome =  document.getElementById("nomeUsuario").value;

//gera mensagem de saudacao
var mensagem= "Olá, " + nome + "! Seja bem-vindo(a)!";

//Exibe a mensagem de saudacao no elemento com o id "mensagemSaudacao"
document.getElementById("mensagemSaudacao").innerText = mensagem;

//Limpa o campo de entrada
document.getElementById("nomeUsuario").value = "";

}
function contarCaracteres(){
    

}