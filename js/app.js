const input = document.querySelector('.inputBox');
const inputButton = document.querySelector('.inputButton');
const listElem = document.querySelector('.listItems');

input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    addItem();
  }
});

const addItem = () => {
  if (input.value == '') {
    return;
  }
  let listItem = document.createElement('div');
  let rmvBtn = document.createElement('button');
  rmvBtn.classList.add('rmvBtn');
  rmvBtn.textContent = '🗑️';
  listItem.classList.add('item');
  listItem.textContent = input.value;
  listItem.appendChild(rmvBtn);
  listElem.appendChild(listItem);
  input.value = '';

  rmvBtn.addEventListener('click', () => {
    listItem.style.transform = 'scale(0.2)';
    setTimeout(() => {
      listElem.removeChild(listItem);
    }, 200);
  });
};
