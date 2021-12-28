function validaEmail(email){
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return regex.test(email);
}

$('.submit').click(function(e){
    e.preventDefault()
    let ehEmail = validaEmail($('#email').val())
    if(ehEmail == true){
        window.location.replace('../../index.html')
    }else{
        alert('E-mail inválido, digite novamente!')
    }
})

$('.passSubmit').click(function(e){
    e.preventDefault()
    let recupEmail = validaEmail($('#recupEmail').val())
    if(recupEmail == true){
        alert('Um link de recuperação foi enviado para o seu e-mail!')
    }else{
        alert('Email inválido, por favor tente novamente!')
    }
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