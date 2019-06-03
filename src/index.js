const taskForm = document.querySelector('#create-task-form')
const tasksUl = document.querySelector('#tasks')
const taskInput = document.querySelector('#new-task-description')
const dropdownListEl = document.querySelector('#dropdownList')
const taskDueDateInput = document.querySelector('#due-date')





// document.addEventListener("DOMContentLoaded", () => {
// });
 

const printTask = () => {
  const taskLi = document.createElement('li')
  
  taskLi.innerHTML = `
    ${taskInput.value}<br>
    Due by: ${taskDueDateInput.value}
    <button id="deleteBtn">X</button>
  `
  tasksUl.append(taskLi)
  
  const dropdownList = () => {
    if (dropdownListEl.value === '#FF0000') {
      taskLi.style.color = '#FF0000'
    } if (dropdownListEl.value === '#FFFF00') {
      taskLi.style.color = '#FFFF00'
    } if (dropdownListEl.value === '#00FF00') {
      taskLi.style.color = '#00FF00'
    }
  }
  dropdownList()

  taskLi.querySelector('#deleteBtn').addEventListener('click', () => {
    taskLi.remove()
  })

}



taskForm.addEventListener('submit', (event) => {
  event.preventDefault()
  printTask()
  taskForm.reset()
})


