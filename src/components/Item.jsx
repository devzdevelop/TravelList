const Item = ({item, id, DeleteItem}) => {
  return (
    <>
      <li key={id}>
        <input type="checkbox"/>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}} key={id}> 
          {`(${item.quantity}) ${item.description}`} 
         </span>
        <button onClick={()=> DeleteItem(id)} style={{backgroundColor: "transparent"}}>❌</button>
      </li>
    </>
  );
}

export default Item;