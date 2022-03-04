import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [shoppingListItems, setShoppingListItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);
  async function loadItems() {
    try {
      const response = await fetch(
        'https://fetch-me.vercel.app/api/shopping/items'
      );
      const data = await response.json();
      setShoppingItems(data.data);
      console.log(shoppingItems);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  function handleClick(event) {
    setShoppingListItems([event.target.value, ...shoppingListItems]);
    console.log(event);
  }
  return (
    <main>
      <input onChange={handleChange}></input>
      <div>
        {searchValue
          ? shoppingItems
              .filter(({ name }) => name.de.startsWith(searchValue))
              .map(({ name, _id }) => (
                <button onClick={handleClick} key={_id}>
                  {name.de}
                </button>
              ))
          : null}
      </div>
      <h2>recently used</h2>
      {/* <ul>
        {shoppingListItems
          ? shoppingListItems.map(({ name, _id }) => (
              <button key={_id}>{name.de}</button>
            ))
          : null}
      </ul> */}
    </main>
  );
}

export default App;
