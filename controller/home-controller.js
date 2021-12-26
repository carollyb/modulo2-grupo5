const catalog = new Catalogo();

function preencheFilme(){
    let filmes = catalog.getCatalogo()
    for (i=0;i<filmes.length;i++){
        buscaFilmeID(filmes[i]).then(function(data){
            $(document).ready(function(){            
                $("#carouselExampleCaptions").on('slide.bs.carousel',function(event){
                })
            })
            $(".catalogo").append(`<div><img src="${data.Poster}" alt=""><p>${data.Title}</p></div>`)
        })
    }
}

preencheFilme()