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
  console.log('Items: ', items);
  }
  
  function DeleteItem (id) {
    console.log("ID: ", id);
    const newItems = items.filter((item) => item.id !== id)
    console.log("Reach app component.");
    console.log(newItems);
    setItems(newItems);
  }

  return (
    <div className="App">
      <Logo />
      <Form AddItems={AddItems} />
      <PackagingList items={items} DeleteItem={DeleteItem}/>
      <Stats />
    </div>
  );
}
