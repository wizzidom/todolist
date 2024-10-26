//selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterEvent)

//funtions
function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        todo.remove()
    }

    if(item.classList[0] === 'complete-button') {
        if (item.innerText === "Complete"){
            notcomplete(item)
            
        }
        else{
            complete(item)
        }


    }
}
const complete = (item) =>{
    item.innerText = 'Complete'
    item.classList.add('complete')

}
const notcomplete = (item) =>{

    item.innerText = 'Not Complete';
    item.classList.add('notcomplete')

   
}
function filterEvent(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex'
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }
                else{
                    todo.style.display = 'none'
                }
        }
    }
)
  
}

function addTodo(e){
    //todo div
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

 
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = 'Complete';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = 'Trash';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    //append to body
    todoList.appendChild(todoDiv)

    //clear

    todoInput.value = "";
}