(function () {
    'use strict';

    var botoes = [];

    document.querySelectorAll('.faq-item').forEach(function (item, indice) {
        var titulo = item.querySelector('.faq-item__titulo');
        var resposta = item.querySelector('.faq-item__texto');

        if (!titulo || !resposta) {
            return;
        }

        var botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'faq-item__botao';
        botao.textContent = titulo.textContent;
        resposta.id = 'faq-resposta-' + (indice + 1);
        botao.setAttribute('aria-controls', resposta.id);
        botao.setAttribute('aria-expanded', 'false');

        botao.addEventListener('click', function () {
            var abrir = botao.getAttribute('aria-expanded') !== 'true';
            botao.setAttribute('aria-expanded', String(abrir));
            resposta.hidden = !abrir;
        });

        titulo.replaceChildren(botao);
        resposta.hidden = true;
        botoes.push(botao);
    });

    botoes.forEach(function (botao, indice) {
        botao.addEventListener('keydown', function (evento) {
            var destino;

            if (evento.key === 'ArrowDown') {
                destino = (indice + 1) % botoes.length;
            } else if (evento.key === 'ArrowUp') {
                destino = (indice - 1 + botoes.length) % botoes.length;
            } else if (evento.key === 'Home') {
                destino = 0;
            } else if (evento.key === 'End') {
                destino = botoes.length - 1;
            } else {
                return;
            }

            evento.preventDefault();
            botoes[destino].focus();
        });
    });
})();
