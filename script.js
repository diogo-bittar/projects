// Selecionar os botões do seletor
const selectorBtns = document.querySelectorAll('.selector-btn');

// Selecionar as seções de serviços
const barbeariaSection = document.querySelector('.barbearia-section');
const salaoSection = document.querySelector('.salao-section');

// Adicionar evento de clique para cada botão
selectorBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover a classe active de todos os botões
        selectorBtns.forEach(b => b.classList.remove('active'));

        // Adicionar a classe active ao botão clicado
        this.classList.add('active');

        // Pegar o tipo de serviço
        const serviceType = this.getAttribute('data-type');

        // Mostrar/Esconder seções conforme o tipo
        if (serviceType === 'barbearia') {
            barbeariaSection.classList.remove('hidden');
            salaoSection.classList.add('hidden');
            document.querySelector('.hero-title').textContent = 'Bem-vindo à WL Barbearia';
            document.querySelector('.hero-description').textContent = 'Cortes de qualidade, profissionais experientes e atendimento premium';
        } else if (serviceType === 'salao') {
            barbeariaSection.classList.add('hidden');
            salaoSection.classList.remove('hidden');
            document.querySelector('.hero-title').textContent = 'Bem-vindo ao WL Salão';
            document.querySelector('.hero-description').textContent = 'Beleza, tratamentos e cuidados com cabelo de primeira qualidade';
        }
    });
});
