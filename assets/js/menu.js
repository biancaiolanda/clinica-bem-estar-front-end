(function () {
    'use strict';

    var botao = document.querySelector('body > header .menu-botao');
    var lista = document.getElementById('menu-principal');

    if (!botao || !lista) {
        return;
    }

    var mobile = window.matchMedia('(max-width: 640px)');

    function alternarMenu(abrir) {
        botao.setAttribute('aria-expanded', String(abrir));
        lista.classList.toggle('menu-aberto', abrir);
        lista.hidden = mobile.matches && !abrir;
    }

    function atualizarTela() {
        botao.hidden = !mobile.matches;
        alternarMenu(false);
    }

    botao.addEventListener('click', function () {
        alternarMenu(botao.getAttribute('aria-expanded') !== 'true');
    });

    mobile.addEventListener('change', atualizarTela);
    atualizarTela();
})();
