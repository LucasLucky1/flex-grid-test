const botaoMenu = document.querySelector('.cabecalho-menu');
const menuNavegacao = document.querySelector('.navegacao');

botaoMenu.onclick = function (){
   if(menuNavegacao.classList[1]=== 'menu-ativo'){
    menuNavegacao.classList.remove('menu-ativo')
    console.log('clicou')
}else{
    menuNavegacao.classList.add('menu-ativo')
 }
}
