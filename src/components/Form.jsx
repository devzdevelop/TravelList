import { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [items, setItems] = useState([{
    description: "cake",
    quantity: 2
  }]);

  function HandleInput ({target}) {
    setDescription(target.value);
  }

  function HandleSubmit (e) {
    e.preventDefault();
    setItems((prev) => [...prev, {description: description, quantity: quantity}])
    console.log(e);
  }
  return (
    <>
      <form className="add-form" onSubmit={HandleSubmit}>
        <h3>What do you need for your trip? 😍</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {
            Array.from({length: 20}, (_, i) => i + 1).map
            ((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))
          }
        </select>
        <input onChange={HandleInput} type="select" placeholder="Item..." value={description}/>
        <button>Add</button>
      </form>     
    </>
  );
}

export default Form;