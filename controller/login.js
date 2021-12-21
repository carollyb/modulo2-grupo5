function validaEmail(email){
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return regex.test(email);
}

$('.submit').click(function(e){
    e.preventDefault()
    var ehEmail = validaEmail($('#email').val())
    if(ehEmail == true){
        window.location.replace('../../index.html')
    }else{
        alert('E-mail inválido, digite novamente!')
    }
})