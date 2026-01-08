// Função para animar elementos quando entram na tela (Scroll Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120; // Ajuste: quanto maior, mais cedo a animação começa

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        // Opcional: Remover o 'else' se quiser que a animação aconteça apenas uma vez
        else {
             reveals[i].classList.remove("active");
        }
    }
}

// Dispara a função ao rolar a página
window.addEventListener("scroll", reveal);

// Dispara uma vez ao carregar a página para verificar elementos já visíveis
// Usando setTimeout para garantir que o layout esteja pronto
setTimeout(reveal, 100);

// Rolagem suave para links internos (ex: o botão do WhatsApp pode levar a uma seção antes de redirecionar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Ignora links vazios

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

    // --- PARTE 1: Forçar o topo ao dar F5 ---
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    // Força o topo assim que o script lê
    window.scrollTo(0, 0);

    // --- PARTE 2: Fazer os elementos aparecerem (Animação) ---
    function animarAoRolar() {
        var revelaElementos = document.querySelectorAll('.reveal');
        
        for (var i = 0; i < revelaElementos.length; i++) {
            var alturaJanela = window.innerHeight;
            var topoElemento = revelaElementos[i].getBoundingClientRect().top;
            var pontoDeAparicao = 50; // Ajuste sensível

            if (topoElemento < alturaJanela - pontoDeAparicao) {
                revelaElementos[i].classList.add('active');
            }
        }
    }

    // Ativa a função quando a pessoa rola a página
    window.addEventListener('scroll', animarAoRolar);

    // --- O PULO DO GATO ---
    // Ativa a função IMEDIATAMENTE ao carregar (para nada ficar invisível)
    window.onload = function() {
        window.scrollTo(0, 0); // Garante o topo de novo
        animarAoRolar();       // Mostra os elementos do topo
    };
