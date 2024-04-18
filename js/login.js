// Verifica as credenciais do usuário
function login() {
    // Obtém as credenciais do usuário
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;

    // Verifica se as credenciais são válidas
    if (username == "admin" && password == "123456") {
        // Redireciona o usuário para a página principal
        window.location.href = "index.html";
    } else {
        // Mostra uma mensagem de erro
        alert("Usuário ou senha inválidos.");
    }
}

// Chama a função de login quando o usuário clica no botão "Entrar"
document.querySelector("input[type='submit']").addEventListener("click", login);
