

    
   
function carConteudo(params) {
    document.getElementById("conteudo").innerHTML =  
    "<p> Conecte-se com bons pensamentos e sentimentos.Resgate a leveza da vida.</p> "
    

}

 function removerMensagem(params) {
    setTimeout(function()  {
        document.getElementById("conteudo").innerHTML =
         "<img src='./paraiso 1.jpg'>"

    }, 6000);
 }

    removerMensagem();
    
    





