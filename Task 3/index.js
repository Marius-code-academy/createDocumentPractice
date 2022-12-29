const todoInput = document.querySelector('input');
const todoList = document.querySelector('ul');
const deleteAllButton = document.querySelector('button');

todoInput.addEventListener('keypress', AddNewTodo);

deleteAllButton.addEventListener('click', () => {
  const allLiElements = document.querySelectorAll('li');

  for (let index = 0; index < allLiElements.length; index++) {
    allLiElements[index].remove();
  }

  toggleButtonVisibility();
});

function AddNewTodo(e) {
  if (e.key === 'Enter') {
    const li = document.createElement('li');
    li.textContent = `${e.target.value}  `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      li.remove();
      const liElements = document.querySelectorAll('li');

      if (!liElements.length) {
        toggleButtonVisibility();
      }
    });

    li.append(deleteButton);
    todoList.append(li);
    e.target.value = '';

    if (deleteAllButton.classList.contains('invisible')) {
      toggleButtonVisibility();
    }
  }
}

function toggleButtonVisibility() {
  deleteAllButton.classList.toggle('invisible');
}
