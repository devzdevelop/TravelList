const Item = ({item, id, onDeleteItem, onToggleItem}) => {
  return (
    <>
      <li key={id}>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span 
        style={item.packed ? {textDecoration: 'line-through'} : {}} 
        key={id}> 
          {`(${item.quantity}) ${item.description}`} 
        </span>
        <button onClick={()=> onDeleteItem(id)} style={{backgroundColor: "transparent"}}>❌</button>
      </li>
    </>
  );
}

export default Item;