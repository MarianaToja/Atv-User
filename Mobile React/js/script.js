const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;

    /* Verificar se todos os campos estão preenchidos */
    if (nomeValue === "" || emailValue === "" || telefoneValue === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    const templateHTML = `
        <li>
            <span class="info">
                <span class="info-label">Nome:</span> <span class="info-value">${nomeValue}</span>
            </span>
            <span class="info">
                <span class="info-label">Email:</span> <span class="info-value">${emailValue}</span>
            </span>
            <span class="info">
                <span class="info-label">Telefone:</span> <span class="info-value">${telefoneValue}</span>
            </span>
            <button class="delete">Excluir</button>
        </li>`;

    /* Incluindo itens no HTML */
    lista.innerHTML += templateHTML;

    /* Limpando os campos */
    nome.value = "";
    email.value = "";
    telefone.value = "";

    /* Atualizar eventos dos botões */
    updateList();
});

function updateList() {
    const items = lista.querySelectorAll("li");

    items.forEach((item, index) => {
        item.querySelector(".delete").addEventListener("click", () => {
            item.remove();
        });
    });
}

const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
};


// Inicializar eventos dos botões já existentes
updateList();
