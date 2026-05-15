let loginForm = document.getElementById("loginForm");

function verificarLogin() {
    // Verificar se os botões tem conteudo e se estão certos
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (email.includes("@") && senha.length >= 6) {
        alert("Login cadastrado com sucesso, indo para dashboard..");
    } else {
        alert("Login invalido, Algum dos dados inseridos estão incorretos");
    }

}