import Item from "./Item"
import {useState} from 'react';
//const initialItems = [
//  { id: 1, description: "Passports", quantity: 2, packed: false },
//  { id: 2, description: "Socks", quantity: 12, packed: false },
//  { id: 3, description: "Suit", quantity: 12, packed: true },
//];

const PackagingList = ({items, onDeleteItem, onToggleItem}) => {
  const [sortBy, setSortBy] = useState("input");
  
  let sortedItems;
  
  if(sortBy === 'input') sortedItems = items;
  if(sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if(sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => 
            <>
              <Item item={item} key={item.id} id={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
            </>
          )}
        </ul>
        <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
      </div>
      </div>
  );
}

export default PackagingList;