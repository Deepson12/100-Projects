const input = document.querySelector('.input-container input');
const addButton = document.querySelector('.input-container button');


const tasklist = document.querySelector('.task-list');

let tasks = []

const saveTasks = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const loadTasks = () =>{
    const stored = localStorage.getItem('tasks')
    if(stored){
        tasks = JSON.parse(stored)
        tasks.forEach(renderTasks)
    }
}


const renderTasks = (taskObj) =>{
    const li = document.createElement('li')
    li.innerHTML = `
    <input type="checkbox" ${taskObj.completed ? 'checked' : ''}>
    <p style="text-decoration: ${taskObj.completed ? 'line-through' : 'none'}">${taskObj.text}</p>
    <button>Delete</button>
    `

    tasklist.appendChild(li);
}

addButton.addEventListener('click', ()=>{
    const taskText = input.value.trim();
    if(taskText){
        const newTask = {text: taskText, completed: false}
        tasks.push(newTask)
        renderTasks(newTask)
        saveTasks()
        input.value = ''

    }
})

tasklist.addEventListener('click', (e)=>{
    const li = e.target.closest('li');
    const index = Array.from(tasklist.children).indexOf(li);

    if(e.target.type === 'checkbox'){
        tasks[index].completed = e.target.checked;
        saveTasks()
    }

    if(e.target.tagName === 'BUTTON'){
        tasks.splice(index, 1)
        li.remove()
        saveTasks()
    }
})

loadTasks()
   



