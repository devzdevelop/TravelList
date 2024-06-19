import Item from "./Item"
//const initialItems = [
//  { id: 1, description: "Passports", quantity: 2, packed: false },
//  { id: 2, description: "Socks", quantity: 12, packed: false },
//  { id: 3, description: "Suit", quantity: 12, packed: true },
//];

const PackagingList = ({items, DeleteItem}) => {
  
  return (
      <div className="list">
        <ul>
          {items.map((item) => 
            <>
              <Item item={item} key={item.id} id={item.id} DeleteItem={DeleteItem}/>
            </>
          )}
        </ul>
      </div>
  );
}

export default PackagingList;