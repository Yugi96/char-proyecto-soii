(function(){
    'use strict';
    var btnIngresar = document.getElementById('btn-ingreso');
    var contentNickname = document.getElementById('content-nickname');
    var contentChat = document.getElementById('content-chat');
    btnIngresar.addEventListener('click', ()=>{
        contentNickname.style.display = 'none';
        contentChat.style.display = 'flex';
    });
})();