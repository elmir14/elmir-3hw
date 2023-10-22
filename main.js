// const todosList = document.getElementById('todos-l');
// const maxTodosTask = 37;

// function getData() {
//     return fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((res) => res.json())
//         .then((todos) => {
//             for (let i = 0; i < maxTodosTask && i < todos.length; i++) {
//                 const todosT = todos[i];
//                 const todosL = document.createElement('li');
//                 todosL.textContent = `Id: ${todosT.id}, Заголовок: ${todosT.title}, Статус: ${todosT.completed ?  'Выполнен' : 'Не Выполнен'}`;
//                 todosList.appendChild(todosL)
//             }
//         })
// }
// getData()