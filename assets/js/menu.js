(function () {
    'use strict';

    var botao = document.querySelector('body > header .menu-botao');
    var lista = document.getElementById('menu-principal');

    if (!botao || !lista) {
        return;
    }

    var mobile = window.matchMedia('(max-width: 640px)');
    var navegacao = botao.closest('nav');

    function alternarMenu(abrir) {
        botao.setAttribute('aria-expanded', String(abrir));
        lista.classList.toggle('menu-aberto', abrir);
        lista.hidden = mobile.matches && !abrir;
    }

    function atualizarTela() {
        if (mobile.matches) {
            botao.hidden = false;
            if (lista.contains(document.activeElement)) {
                botao.focus();
            }
        } else {
            lista.hidden = false;
            if (document.activeElement === botao) {
                lista.querySelector('a').focus();
            }
            botao.hidden = true;
        }
        alternarMenu(false);
    }

    botao.addEventListener('click', function () {
        alternarMenu(botao.getAttribute('aria-expanded') !== 'true');
    });

    navegacao.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape' && mobile.matches && !lista.hidden) {
            evento.preventDefault();
            botao.focus();
            alternarMenu(false);
        }
    });

    navegacao.addEventListener('focusout', function (evento) {
        if (mobile.matches && !navegacao.contains(evento.relatedTarget)) {
            alternarMenu(false);
        }
    });

    lista.addEventListener('click', function (evento) {
        if (mobile.matches && evento.target.closest('a')) {
            botao.focus();
            alternarMenu(false);
        }
    });

    document.addEventListener('click', function (evento) {
        if (mobile.matches && !navegacao.contains(evento.target)) {
            if (lista.contains(document.activeElement)) {
                botao.focus();
            }
            alternarMenu(false);
        }
    });

    mobile.addEventListener('change', atualizarTela);
    atualizarTela();
})();
