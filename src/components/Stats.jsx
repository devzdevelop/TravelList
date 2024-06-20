const Stats = ({items}) => {
  let packedItems = items.filter((item) => item.packed !== false).length;
  let packedItemsPercentage = (packedItems / items.length || 0) * 100; 
  return (
    <footer className="stats">
      {items.length < 1 
      ? <em>Starting adding some items to your packaging list 🚀</em> 
      : <em>You have {items.length} items on your list, and you already packed {packedItems} ({packedItemsPercentage}%).
      </em>}
    </footer>
  );
}

export default Stats;