// alert('Olá, mundo');
function validarNumeroPositivo() {
    
    //obtem o valor digitado pelo usuario
    var numero =  document.getElementById("textArea").value;

//gera mensagem de conta
var mensagem = "se for 1 o numero é positivo, se for -1 negativo e 0 é zero: " + Math.sign(numero);

//Exibe a mensagem de saudacao no elemento com o id "mensagemSaudacao"
document.getElementById("numerovalidado").innerText = mensagem;

//Limpa o campo de entrada
document.getElementById("textArea").value = "";

}
