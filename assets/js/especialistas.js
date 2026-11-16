(function () {
    'use strict';

    var cartoes = document.querySelectorAll('.especialista');

    if (!cartoes.length) {
        return;
    }

    function criarElemento(tag, classe, texto) {
        var elemento = document.createElement(tag);

        if (classe) {
            elemento.className = classe;
        }

        if (texto) {
            elemento.textContent = texto;
        }

        return elemento;
    }

    function alternarPainel(botao, painel, abrir) {
        botao.setAttribute('aria-expanded', String(abrir));
        painel.hidden = !abrir;
    }

    cartoes.forEach(function (cartao, indice) {
        var titulo = cartao.querySelector('h3');
        var detalhes = cartao.querySelectorAll('.especialista__detalhe');

        if (!titulo || !detalhes.length) {
            return;
        }

        var nome = titulo.textContent.trim();
        var idPainel = 'detalhes-especialista-' + (indice + 1);

        var painel = criarElemento('div', 'especialista__painel');
        painel.id = idPainel;
        painel.hidden = true;

        detalhes.forEach(function (detalhe) {
            painel.appendChild(detalhe);
        });

        var link = criarElemento('a', 'especialista__link', 'Solicitar pré-agendamento');
        link.href = 'agendamento.html';
        link.appendChild(criarElemento('span', 'visualmente-oculto', ' com ' + nome));
        painel.appendChild(link);

        var botao = criarElemento('button', 'especialista__botao', 'Ver detalhes');
        botao.type = 'button';
        botao.setAttribute('aria-expanded', 'false');
        botao.setAttribute('aria-controls', idPainel);
        botao.appendChild(criarElemento('span', 'visualmente-oculto', ' de ' + nome));

        botao.addEventListener('click', function () {
            alternarPainel(botao, painel, painel.hidden);
        });

        cartao.addEventListener('keydown', function (evento) {
            if (evento.key === 'Escape' && !painel.hidden) {
                alternarPainel(botao, painel, false);
                botao.focus();
            }
        });

        cartao.appendChild(botao);
        cartao.appendChild(painel);
    });
})();
