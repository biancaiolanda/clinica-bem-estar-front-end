(function () {
    'use strict';

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
    });
})();
