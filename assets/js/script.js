/*
Outras formas de acessar o DOM:
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length< 3){
        alert('nome invalido')
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{ 
        txt.innerHTML= 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function
 validaEmail(){
     let txtEmail = document.querySelector('#email')

     if(email.value.indexOf('@') == -1 ||email.value.indexOf){
         txtEmail.innerHTML = 'E-mail inválido'
         txtEmail.style.color = 'red'
     }else{
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'green'
        emailOk = true
     }
 }

 function validaAssunto(){
     let txtAssunto = document.querySelector('#assunto')
     if (txtAssunto.value.length >= 100){
         txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
         txtAssunto.style.color = 'block'
     }else{
         txtAssunto.style.display = 'none'
         assuntoOk = true
     }
 }

 function enviar(){
     if (nomeOk == true && emailOk == true && assuntoOk == true){
         alert ('Formulário enviado com sucesso!')
     }else{
         alert ('Preencha o formulário corretamente antes de enviar')
     }
 }


