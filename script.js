// REQUISITO: Dados salvos puramente em Array de Strings com mínimo 3 itens iniciais
var adegaBebidas = ["Absolut Vodka", "Ballena Morango", "Corote"];

// Controle Globais de Visibilidade das Telas
var viewLogin = document.getElementById("view-login");
var viewApp = document.getElementById("view-app");

// Elementos Relacionados à Autenticação
var formLogin = document.getElementById("form-login");
var inputUser = document.getElementById("user");
var inputPass = document.getElementById("pass");
var txtLoginError = document.getElementById("login-error");
var btnLogout = document.getElementById("btn-logout");
var btnTogglePassword = document.querySelector(".btn-toggle-password");
var eyeIcon = document.getElementById("eye-icon");

// Elementos Relacionados à Operação do CRUD
var inputBebida = document.getElementById("drink-input");
var txtCrudError = document.getElementById("crud-error");
var txtCrudSuccess = document.getElementById("crud-success");
var btnAddStart = document.getElementById("btn-add-start");
var btnAddEnd = document.getElementById("btn-add-end");
var beverageListUl = document.getElementById("beverage-list");

// --- FUNÇÕES DE AUTENTICAÇÃO ---

function realizarLogin(evento) {
    evento.preventDefault();
    txtLoginError.classList.add("hidden");

    // VALIDAÇÃO OBRIGATÓRIA: Bloqueia inputs vazios no formulário
    if (inputUser.value === "" || inputPass.value === "") {
        txtLoginError.innerText = "Por favor, preencha todos os campos.";
        txtLoginError.classList.remove("hidden");
        return;
    }

    // REQUISITO: Verificação restrita conforme regras do escopo
    if (inputUser.value === "aluno" && inputPass.value === "fiap2025") {
        viewLogin.classList.add("hidden");
        viewApp.classList.remove("hidden");
        viewApp.classList.add("fade-in-card");
        renderizarLista();
    } else {
        txtLoginError.innerText = "Usuário ou senha incorretos!";
        txtLoginError.classList.remove("hidden");
    }
}

function realizarLogout() {
    viewApp.classList.add("hidden");
    viewLogin.classList.remove("hidden");
    viewLogin.classList.add("fade-in-card");
    formLogin.reset();
    txtLoginError.classList.add("hidden");
}

function alternarVisibilidadeSenha() {
    var tipoAtual = inputPass.getAttribute("type");
    if (tipoAtual === "password") {
        inputPass.setAttribute("type", "text");
        // Altera o ícone para o olho cortado usando a tag i do Font Awesome
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        inputPass.setAttribute("type", "password");
        // Volta para o ícone do olho aberto
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}

// --- FUNÇÕES OPERACIONAIS DO CRUD ---

function renderizarLista() {
    beverageListUl.innerHTML = "";

    // REQUISITO: Varredura estruturada utilizando loop FOR clássico com índices
    for (var i = 0; i < adegaBebidas.length; i++) {
        var li = document.createElement("li");
        
        // REQUISITO: Vinculação das chamadas de ação baseadas estritamente na posição numérica (i)
        li.innerHTML = '<span>' + adegaBebidas[i] + '</span>' +
                       '<div class="actions">' +
                           '<button class="btn-outline" onclick="editarItem(' + i + ')">Editar</button>' +
                           '<button class="btn-primary" style="background: var(--secondary);" onclick="removerItem(' + i + ')">Excluir</button>' +
                       '</div>';
                       
        beverageListUl.appendChild(li);
        li.classList.add('list-item-appear');
    }
}

function adicionarNoInicio() {
    txtCrudError.classList.add("hidden");
    txtCrudSuccess.classList.add("hidden");
    
    var novaBebida = inputBebida.value;

    // VALIDAÇÃO OBRIGATÓRIA: Impede adição de valores em branco na listagem
    if (novaBebida === "") {
        txtCrudError.innerText = "O campo da bebida não pode ficar vazio!";
        txtCrudError.classList.remove("hidden");
        return;
    }

    adegaBebidas.unshift(novaBebida);
    inputBebida.value = "";
    renderizarLista();
    
    txtCrudSuccess.classList.remove("hidden");
}

function adicionarNoFinal() {
    txtCrudError.classList.add("hidden");
    txtCrudSuccess.classList.add("hidden");
    
    var novaBebida = inputBebida.value;

    // VALIDAÇÃO OBRIGATÓRIA: Impede adição de valores em branco na listagem
    if (novaBebida === "") {
        txtCrudError.innerText = "O campo da bebida não pode ficar vazio!";
        txtCrudError.classList.remove("hidden");
        return;
    }

    adegaBebidas.push(novaBebida);
    inputBebida.value = "";
    renderizarLista();
    
    txtCrudSuccess.classList.remove("hidden");
}

function editarItem(posicao) {
    var valorAtual = adegaBebidas[posicao];
    var novoValor = prompt("Edite o nome da bebida:", valorAtual);

    // VALIDAÇÃO OBRIGATÓRIA: Preserva o item intacto caso seja cancelado ou enviado em branco
    if (novoValor === null || novoValor === "") {
        return;
    }

    adegaBebidas[posicao] = novoValor;
    renderizarLista();
}

function removerItem(posicao) {
    // REQUISITO OBRIGATÓRIO: Remoção efetuada estritamente pelo índice, não pelo valor textual
    adegaBebidas.splice(posicao, 1);
    renderizarLista();
}

// Vinculação de Eventos Semânticos
formLogin.addEventListener("submit", realizarLogin);
btnLogout.addEventListener("click", realizarLogout);
btnAddStart.addEventListener("click", adicionarNoInicio);
btnAddEnd.addEventListener("click", adicionarNoFinal);
btnTogglePassword.addEventListener("click", alternarVisibilidadeSenha);