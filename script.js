document.addEventListener('DOMContentLoaded', () => {
    const btnMostrarDesafios = document.getElementById('mostrarDesafios');
    const divDesafiosDetalhados = document.getElementById('desafiosDetalhados');

    // Função para alternar a exibição dos desafios
    btnMostrarDesafios.addEventListener('click', () => {
        if (divDesafiosDetalhados.style.display === 'none' || divDesafiosDetalhados.style.display === '') {
            divDesafiosDetalhados.style.display = 'block';
            btnMostrarDesafios.textContent = 'Ocultar Desafios';
        } else {
            divDesafiosDetalhados.style.display = 'none';
            btnMostrarDesafios.textContent = 'Mostrar Desafios';
        }
    });

    // Mesmo padrão para o botão de mostrar oportunidades, se existir
    const btnMostrarOportunidades = document.getElementById('mostrarOportunidades');
    const divOportunidadesLista = document.getElementById('oportunidadesLista');

    if (btnMostrarOportunidades && divOportunidadesLista) {
        btnMostrarOportunidades.addEventListener('click', () => {
            if (divOportunidadesLista.style.display === 'none' || divOportunidadesLista.style.display === '') {
                divOportunidadesLista.style.display = 'block';
                btnMostrarOportunidades.textContent = 'Ocultar Oportunidades';
            } else {
                divOportunidadesLista.style.display = 'none';
                btnMostrarOportunidades.textContent = 'Mostrar Oportunidades';
            }
        });
    }
});

 // Função para obter os comentários armazenados no localStorage
function getCommentsFromStorage() {
    const storedComments = localStorage.getItem('comments');
    return storedComments ? JSON.parse(storedComments) : [];
}

// Função para salvar os comentários no localStorage
function saveCommentsToStorage(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Array para armazenar os comentários
let comments = getCommentsFromStorage();

// Função para renderizar os comentários na página
function renderComments() {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ''; // Limpa o conteúdo atual

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
    });
}

// Adiciona evento de submit ao formulário
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const commentText = document.getElementById('comment-text').value.trim();
    if (commentText !== '') {
        comments.push(commentText);
        saveCommentsToStorage(comments); // Salva os comentários no localStorage
        renderComments();
        document.getElementById('comment-text').value = ''; // Limpa o campo de comentário
    }
});

// Renderiza os comentários ao carregar a página
renderComments();

