import { useEffect, useState, useContext } from 'react';
import { ItemsContext, ItemData } from '../../Context/Items';

function Header() {

  const ItemsState = useContext<{ totalItems: Array<ItemData> }>(ItemsContext);
  const [incomplete, setIncomplete] = useState<number>(0);

  useEffect(() => {
    const incompleteCount = ItemsState.totalItems.filter(item => !item.completed).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [ItemsState.totalItems, incomplete]);

  return (
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
    </header>
  );
}

export default Header;
