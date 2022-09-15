const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

const initialTodos = JSON.parse(localStorage.getItem("todos"))



const updateLocalStorage = () => {
    const todoEls = document.querySelectorAll("li")

    const todos = []

    todoEls.forEach(todoEl=>{
        todos.push({
            text: todoEl.innerText,
            isCompleted: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todos",JSON.stringify(todos))
}
const addTodo = (todo) => {
    let todoText = input.value

    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement("li")

        todoEl.innerText = todoText

        if(todo && todo.isCompleted){
            todoEl.classList.add("completed")
        }

        todoEl.addEventListener("click",()=>{
            todoEl.classList.toggle("completed")
            updateLocalStorage()
        })

        todoEl.addEventListener("contextmenu",(e)=>{
            e.preventDefault()

            todoEl.remove()
            updateLocalStorage()
        })
        todosUL.appendChild(todoEl)
        input.value = ''
        updateLocalStorage()

    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    addTodo()
})

if(initialTodos){
    initialTodos.forEach(todo=>addTodo(todo))
}