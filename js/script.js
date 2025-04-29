
const senha = document.getElementById('senha');
const olho = document.getElementById('olho');
function verSenha() {

    if (olho.classList.contains('olho')) {
        senha.setAttribute('type', 'text');
        olho.setAttribute('src', 'img/eye.jpg');
        olho.setAttribute('class', 'olhoAberto');
    } else {

        senha.setAttribute('type', 'password');
        olho.setAttribute('src', 'img/closedeye.jpg');
        olho.setAttribute('class', 'olho');
    }
}

let validaLogin = true;

// Array de usuários e senhas válidos
const usuariosValidos = ["adm", "user1", "user2"];
const senhasValidas = ["adm", "user1", "user2"];

// entrar.addEventListener("click",
function entrar() {
    const usuarioV = document.getElementById('usuario').value.trim();
    const senhaV = document.getElementById('senha').value.trim();
    const usuarioE = document.getElementById('usuarioE');
    const senhaE = document.getElementById('senhaE');
    const entrar = document.getElementById('entrar');
    if (usuarioV === "") {
        usuarioE.classList.remove('oculto');
    } else if (senhaV === "") {
        senhaE.classList.remove('oculto');
        usuarioE.classList.add('oculto');
    } else {
        for (let i = 0; i < usuariosValidos.length; i++) {
            if (usuarioV === usuariosValidos[i] && senhaV === senhasValidas[i]) {
                window.location.href = 'pages/inicio.html';
                validaLogin = false;
            }
        } if (validaLogin) {
            alert('Usuário ou senha inválidos!');
        }
    }
}
// );
document.addEventListener('keydown', function (e) {
    const usuarioV = document.getElementById('usuario').value.trim();
    const senhaV = document.getElementById('senha').value.trim();
    const usuarioE = document.getElementById('usuarioE');
    const senhaE = document.getElementById('senhaE');
    const entrar = document.getElementById('entrar');
    
    if (e.key === 'Enter') {
        if (usuarioV === "") {
            usuarioE.classList.remove('oculto');
        } else if (senhaV === "") {
            senhaE.classList.remove('oculto');
            usuarioE.classList.add('oculto');
        } else {
            for (let i = 0; i < usuariosValidos.length; i++) {
                if (usuarioV === usuariosValidos[i] && senhaV === senhasValidas[i]) {
                    window.location.href = 'pages/inicio.html';
                    validaLogin = false;
                }
            } if (validaLogin) {
                alert('Usuário ou senha inválidos!');
            }
        }
    }
});