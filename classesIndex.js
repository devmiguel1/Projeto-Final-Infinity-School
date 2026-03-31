const usuarios = [
    { nome: "Robin", senha: "RobinFuncionario123", classe: "funcionario" }, // só visualiza
    { nome: "Alfred", senha: "AlfredGerente123", classe: "gerente" }, // pode alterar
    { nome: "Batman", senha: "BatmanAdm123", classe: "administrador" }  // pode adicionar
];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("campo-nome").value;
        const senha = document.getElementById("campo-senha").value;

        const usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

        if (usuario) {
            alert("Bem-vindo " + usuario.nome);
            if (usuario.classe === "funcionario") window.location.href = "paginaFuncionario.html";
            else if (usuario.classe === "gerente") window.location.href = "paginaGerente.html";
            else if (usuario.classe === "administrador") window.location.href = "paginaAdministrador.html";
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});


