//==================================================================================
//To do List
let task = document.querySelector('#task');
let submitTask = document.querySelector('#submit-task');
let list = document.querySelector('#todo-ul');
let todoListArr = [];


submitTask.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(task.value);
  //adding task
  let taskValue = task.value;
  todoListArr.push(taskValue);
  console.log(todoListArr);
  task.value = "";
  addItem();
})

let addItem = () => {
  list.innerHTML = '';
  todoListArr.forEach((item, index) => {
    let li = document.createElement('li');
    li.classList.add('todoItem');
    li.innerText = item;




    let completedButton = document.createElement('button');
    completedButton.innerText = 'Completed';
    completedButton.addEventListener('click', (index) => {
      todoListArr.splice(index, 1);
      console.log(todoListArr);
      addItem();
    })
    li.appendChild(completedButton);
    list.appendChild(li);
  });
};


//==================================================================================