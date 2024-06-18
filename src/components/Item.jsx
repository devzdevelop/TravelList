const Item = ({item, id}) => {
  return (
    <>
      <li key={id}>
        <input type="checkbox"/>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}} key={id}> 
          {`${item.quantity} ${item.description}`} 
         </span>
        <button style={{backgroundColor: "transparent"}}>❌</button>
      </li>
    </>
  );
}

export default Item;