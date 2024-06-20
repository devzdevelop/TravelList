import "./styles.css";
import Logo from "./components/Logo"
import Form from "./components/Form"
import PackagingList from "./components/PackagingList"
import Stats from "./components/Stats"

import {useState} from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  
  function AddItems (item) {
    setItems((prev) => [...prev, item]);
  }
  
  function handleDeleteItem (id) {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);
  }

  
  function handleToggleItem(id) {
    setItems((prev) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item ));
  }

  return (
    <div className="App">
      <Logo />
      <Form AddItems={AddItems} />
      <PackagingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items}/>
    </div>
  );
}
