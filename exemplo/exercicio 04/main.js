// alert('Olá, mundo');
function AreaRetangulo() {
    
    //obtem o valor digitado pelo usuario
    var comprimento =  document.getElementById("textArea1").value;
    var altura =  document.getElementById("textArea2").value;
//gera mensagem de conta
var mensagem = "A área é: " + comprimento*altura;

//Exibe a mensagem de saudacao no elemento com o id "mensagemSaudacao"
document.getElementById("arearetangulo").innerText = mensagem;

//Limpa o campo de entrada
document.getElementById("textArea1").value = "";
document.getElementById("textArea2").value = "";

}
