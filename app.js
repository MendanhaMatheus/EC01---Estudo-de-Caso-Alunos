class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = parseInt(idade);
        this.curso = curso;
        this.notaFinal = parseFloat(notaFinal);
    }

    isAprovado() {
        return this.notaFinal >= 7;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota: ${this.notaFinal} - ${this.isAprovado() ? 'Aprovado' : 'Reprovado'}`;
    }
}

let alunos = [];

function renderizarTabela() {
    const tbody = document.querySelector('#tabelaAlunos tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < alunos.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${alunos[i].nome}</td>
            <td>${alunos[i].idade}</td>
            <td>${alunos[i].curso}</td>
            <td>${alunos[i].notaFinal}</td>
            <td>
                <button onclick="editarAluno(${i})">Editar</button>
                <button onclick="excluirAluno(${i})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

const excluirAluno = (index) => {
    alunos = alunos.filter((_, i) => i !== index);
    alert('Aluno excluído com sucesso.');
    renderizarTabela();
};

function editarAluno(index) {
    const aluno = alunos[index];
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.getElementById('curso').value = aluno.curso;
    document.getElementById('notaFinal').value = aluno.notaFinal;
    excluirAluno(index);
}

document.getElementById('btnCadastrar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const notaFinal = document.getElementById('notaFinal').value;

    if (nome && idade && curso && notaFinal) {
        const novoAluno = new Aluno(nome, idade, curso, notaFinal);
        alunos.push(novoAluno);
        
        alert('Aluno salvo com sucesso!');
        renderizarTabela();
    }
});

const relatorios = {
    listarAprovados: () => {
        const aprovados = alunos.filter(aluno => aluno.isAprovado());
        aprovados.forEach(aluno => console.log(aluno.toString()));
        return aprovados;
    },

    calcularMediaNotas: () => {
        if (alunos.length === 0) return 0;
        const soma = alunos.reduce((acc, aluno) => acc + aluno.notaFinal, 0);
        return (soma / alunos.length).toFixed(2);
    },

    calcularMediaIdades: () => {
        if (alunos.length === 0) return 0;
        const soma = alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return (soma / alunos.length).toFixed(1);
    },

    listarOrdemAlfabetica: () => {
        return [...alunos]
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map(aluno => aluno.nome);
    },

    quantidadePorCurso: () => {
        return alunos.reduce((acc, aluno) => {
            acc[aluno.curso] = (acc[aluno.curso] || 0) + 1;
            return acc;
        }, {});
    }
};