import React, { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

export const ItemsContext = createContext({});

export type ItemData = {
  id: string,
  text: string,
  assignee: string,
  difficulty: string,
  completed: boolean
}

interface childrenType {
  children: React.ReactElement;
}

export default function ItemsProvider({ children }: childrenType) {

  const [totalItems, setTotalItems] = useState<Array<ItemData>>([])

  function addItem(item: ItemData) {
    item.id = uuid();
    item.completed = false;
    setTotalItems([...totalItems, item]);
  }

  function toggleComplete(id: string) {
    const items = totalItems.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTotalItems(items);
  }


  return (
    <ItemsContext.Provider value={{ totalItems, addItem, toggleComplete }}>
      {children}
    </ItemsContext.Provider>
  )
}
