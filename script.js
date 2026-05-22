// Botão para alternar tema claro/escuro
const botaoTema = document.getElementById('botao-tema');
const html = document.documentElement;

// Função simples para alterar o tema e manter o ícone atualizado
function alternarTema() {
    const temEscuro = html.classList.contains('dark');

    if (temEscuro) {
        html.classList.remove('dark');
        botaoTema.innerHTML = '<i class="fas fa-sun"></i>';
        botaoTema.setAttribute('aria-label', 'Ativar modo escuro');
    } else {
        html.classList.add('dark');
        botaoTema.innerHTML = '<i class="fas fa-moon"></i>';
        botaoTema.setAttribute('aria-label', 'Ativar modo claro');
    }
}

botaoTema.addEventListener('click', alternarTema);
