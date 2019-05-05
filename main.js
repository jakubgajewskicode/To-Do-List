const toDoList = [];

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('input');
const input2 = document.querySelector('.input2');
const listItems = document.getElementsByClassName('task');


filtr = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    // console.log('ok');
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
    taskNumber.textContent = listItems.length;
}



removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    taskNumber.textContent = listItems.length;
}

addTask = (e) => {
    e.preventDefault()
    const titleTask = input.value;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Delete</button>";
    toDoList.push(task);
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);



    // console.log(titleTask);
}





form.addEventListener('submit', addTask);
input2.addEventListener('input', filtr);