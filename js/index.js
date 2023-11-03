// ====> elements <====
const listTodo = document.getElementsByClassName('list-todo')[0];
const addButton = document.getElementById('add-button');
const userInput = document.getElementsByName('user-input')[0];
const deleteButtons = document.getElementsByClassName('delete-button');
const title = document.getElementById('title');

// ====> transform text inside element on first load <===
title.textContent = `Todo List - ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`

// ====> declare functions <====
function handleAddTodo(){
  // guard condition
  if (!userInput.value) return alert('Please fill in the task first');
  // create li element
  const newList = document.createElement('li');
  // add the data to newList
  newList.textContent = userInput.value;
  // add class 'todo' to newList
  newList.classList.add('todo');
  // add delete button newList
  newList.appendChild(deleteButton());
  newList.appendChild(editButton());
  // add the li listTodo
  listTodo.appendChild(newList)
  // reset user input
  userInput.value = '';
}

function handleDeleteTodo(event){
  // clicked element
  const element = event.target    
  // check if clicked element is I tag
  // (So it is not <li> but rather <i>)
  if(element.tagName === 'I'){
    // the parent element of <i>. That is the parent of delete-button
    const selectedTodo = element.parentNode;
    // remove clicked <li> from listTodo
    listTodo.removeChild(selectedTodo);
  }
}

// ====> event listener <====
// add task when addButton is clicked
addButton.addEventListener('click', function(event){
  event.preventDefault();
  handleAddTodo();
});

// delete todo when deleteButton is clicked
listTodo.addEventListener('click',handleDeleteTodo)

// ====> Reusable Components <====
function deleteButton(){
  // create delete button
  // <i class="fa-solid fa-x">
  const newI = document.createElement('i');
  newI.classList.add('fa-solid','fa-x','delete-button');
  const deleteButton = newI;
  return deleteButton
}

function editButton(){
  // create edit button
  // <i class="fa-solid fa-pen"></i>
  const newI = document.createElement('i');
  newI.classList.add('fa-solid','fa-pen','edit-button');
  const editButton = newI;
  return editButton
}