function validaEmail(email){
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return regex.test(email);
}

$('.submit').click(function(e){
    e.preventDefault()
    let confirmEmail = validaEmail($('#email').val())
    if(confirmEmail == true){
        window.location.replace('../../index.html')
    }else{
        $('#email').addClass('erro')
        $('#email').attr("placeholder","Email inválido, digite novamente!")
    }
})

$('#email').keyup(function(){
    $('#email').removeClass('erro')
})

$('.passSubmit').click(function(e){
    e.preventDefault()
    let recupEmail = validaEmail($('#recupEmail').val())
    if(recupEmail == true){
        alert('Um link de recuperação foi enviado para o seu e-mail!')
    }else{
        $('#recupEmail').addClass('erro')
        $('#recupEmail').attr("placeholder","Email inválido, digite novamente!")
    }
})

$('#email').keyup(function(){
    $('#email').removeClass('erro')
})

$('.buscarFilme').click((e) => {
    e.preventDefault();
    let titulo = $('.inputFilme').val();
    if (titulo != '') {
      localStorage.setItem('titulo',titulo)
      $('.inputFilme').val('')
      window.location.assign('info.html')
    }
})