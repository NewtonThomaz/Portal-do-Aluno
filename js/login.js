const senha = document.getElementById('senha');
const olho = document.getElementById('olho');

const verSenha = () => {
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

// Array de usuários e senhas válidos
const entrarB = document.getElementById('entrar');
const usuariosValidos = ["adm", "user1", "user2"];
const senhasValidas = ["adm", "user1", "user2"];
let validaLogin = true;

const entrar = () => {
    const usuarioV = document.getElementById('usuario').value.trim();
    const senhaV = document.getElementById('senha').value.trim();
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const usuarioE = document.getElementById('usuarioE');
    const senhaE = document.getElementById('senhaE');
    if (usuarioV === "") {
        usuarioE.classList.remove('oculto');
        usuario.focus();
    } else if (senhaV === "") {
        senhaE.classList.remove('oculto');
        usuarioE.classList.add('oculto');
        senha.focus();
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

const enterEtrar = (event) => {
    if (event.key === 'Enter') {
        entrar();
    }
};

// Event Listeners
olho.addEventListener("click", verSenha);
entrarB.addEventListener('click', entrar);
document.addEventListener('keydown', enterEtrar);

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toggleBtn = document.getElementById('toggleSidebar');

// Abrir a sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

// Fechar a sidebar ao clicar no overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
