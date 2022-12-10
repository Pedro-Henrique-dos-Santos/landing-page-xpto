/* Quando clickar na seta temos que esconder 
    todas as imagens que estão aparecendo e mostrar a próxima imagem

        a imagem atual começa em 0 pq é a primeria imagem
        assim que for clickado no avançar preciso adicionar mais 1 ao contador de imagens
        pra poder saber que agora eu vou mostrar a segunda imagem

        1-Passo esconder todas as imagens 
            pegar todas as imagens usando o DOOM e remover a classe mostrar

        2-Mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela 
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');//imagens painel vira um array
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
const totalDeImagens = imagensPainel.length -1; //length começa oelo 1

setaAvancar.addEventListener('click',function(){
//testa se o contador da imagem atual é igual ao total de imagens
   if(imagemAtual === totalDeImagens){
       imagemAtual = 0;
   }else{
        imagemAtual++;
   }
   trocarSlide();
})

setaVoltar.addEventListener('click',function(){
    if(imagemAtual === 0){
        imagemAtual = totalDeImagens;
    }else{
         imagemAtual--;
    }
    trocarSlide();
})


function trocarSlide(){
/*Para cada imagem{ pegue a class mostrar e remova} o parametro com nome de imagem corresponde ao elemento*/
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
   
    imagensPainel[imagemAtual].classList.add('mostrar');
}