var data = document.getElementById('data');
var tbody = document.querySelector('tbody');
var hours = document.getElementById('hours');
var button = document.querySelector('button');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var nome = document.getElementById('nome');

var index = 1;

function atualizaHoras() {
    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    seconds.innerHTML = new Date().getSeconds();
    data.innerHTML = new Date().toLocaleDateString();
}

setInterval(atualizaHoras, 1000);

var todos = [
    'JAVA',
    'PHP',
    'C#'
];

button.onclick = function adicionarCurso() {
    if (nome.value != null && nome.value != undefined && nome.value != "") {
        todos.push(nome.value);
        let trtodo = document.createElement('tr');
        adicionarElementoHtml(index++, trtodo);
        adicionarElementoHtml(nome.value, trtodo);
        console.log(tbody);
        nome.value = '';
    } else  {
        alert('INFORMAR NOME É OBRIGATÓRIO...');
    }
}

function renderTodos() {
    for(todo of todos) {
        let trtodo = document.createElement('tr');
        adicionarElementoHtml(index++, trtodo);
        adicionarElementoHtml(todo, trtodo);
        console.log(tbody);
    }
}

function adicionarElementoHtml(curso, tr) {
    let tdtodo = document.createElement('td');
    let contenttodo = document.createTextNode(curso);
    tr.appendChild(tdtodo);
    tdtodo.appendChild(contenttodo);
    tbody.appendChild(tr);
}

renderTodos();