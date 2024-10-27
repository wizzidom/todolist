//selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
const reset = document.querySelector('#reset')
//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterEvent)
reset.addEventListener('click', resetTodo)

//funtions

function resetTodo(){
    todoList.innerHTML = "";
}

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
    const todos = todoList.childNodes;
    todos[0].classList.remove('notcomplete')
    todos[0].classList.add('complete')

    console.log(todos[0].classList)
    

}
const notcomplete = (item) =>{

    item.innerText = 'Not Complete';

    const todos = todoList.childNodes;
    todos[0].classList.remove('complete')
    todos[0].classList.add('notcomplete')
    
    console.log(todos[0].classList)

   
}


function addTodo(e){
    //todo divcomplete
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    todoDiv.classList.add('notcomplete')
    //create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    
    todoDiv.appendChild(newTodo);

 
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = 'Not complete';
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

function filterEvent(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex'
     
                break
            
            case "completed":
                if(todo.classList.contains('complete')){
                    todo.style.display = 'flex'
     
                    break
                }
                else{
                    todo.style.display = 'none'
                    break
   
                }
                
                
            case "uncompleted":
                if(todo.classList.contains('notcomplete')){
                    todo.style.display = 'flex'
          
                    break
                    }
                    else{
                        todo.style.display = 'none'
                        break
                    }

        }
    }
)
  
}