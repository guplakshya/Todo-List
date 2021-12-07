//Variables
const itemList = document.getElementById('item-list');

//Event Listeners
eventListeners();

function eventListeners() {
      document.querySelector('#form').addEventListener('submit', newItem);

      itemList.addEventListener('click', removeItem);

      document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


//Functions

function newItem(event) {
      event.preventDefault();
      const item = document.getElementById('item').value;

      const removeBtn = document.createElement('a');
      removeBtn.classList = 'remove-item';
      removeBtn.textContent = 'X';

      const li = document.createElement('li');
      li.textContent = item;

      li.appendChild(removeBtn);
      itemList.appendChild(li);

      addItemLocalStorage(item);

      alert('Item Added');

      this.reset();
}

function removeItem(event) {
      if (event.target.classList.contains('remove-item')) {
            event.target.parentElement.remove();
      }
      removeItemLocalStorage(event.target.parentElement.textContent);
}

function addItemLocalStorage(item) {
      let items = getItemsFromStorage();
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
}

function getItemsFromStorage() {
      let items;
      const itemLS = localStorage.getItem('items');
      if (itemLS === null) {
            items = [];
      } else {
            items = JSON.parse(itemLS);
      }
      return items;
}

function localStorageOnLoad() {
      let items = getItemsFromStorage();
      items.forEach(function (item) {
            const removeBtn = document.createElement('a');
            removeBtn.classList = 'remove-item';
            removeBtn.textContent = 'X';

            const li = document.createElement('li');
            li.textContent = item;

            li.appendChild(removeBtn);
            itemList.appendChild(li);
      });
}

function removeItemLocalStorage(item){
      let items = getItemsFromStorage();
      const itemDelete = item.substring(0,item.length-1);
      items.forEach(function(itemLS,index){
            if(itemDelete===itemLS){
                  items.splice(index,1);
            }
      });
      localStorage.setItem('items',JSON.stringify(items));
}
