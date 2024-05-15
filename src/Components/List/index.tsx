import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings';
import { useState, useContext } from 'react';

interface PaginationProps {
  items: Array<ItemData>;
  toggleComplete: (id: string) => void;
}

function List({ items, toggleComplete }: PaginationProps) {
  const { pageItems, hideCompleted, sort } = useContext<{ pageItems: number }>(SettingsContext);
  const itemsPerPage = pageItems;
  const [currentPageIncomplete, setCurrentPageIncomplete] = useState(1);
  const [currentPageComplete, setCurrentPageComplete] = useState(1);

  const completedItems = items.filter(item => item.completed).sort((a, b) => (a[sort] > b[sort]) ? 1 : -1);
  const incompleteItems = items.filter(item => !item.completed).sort((a, b) => (a[sort] > b[sort]) ? 1 : -1);

  const totalPagesIncomplete = Math.ceil(incompleteItems.length / itemsPerPage);
  const totalPagesComplete = Math.ceil(completedItems.length / itemsPerPage);

  const startIndexIncomplete = (currentPageIncomplete - 1) * itemsPerPage;
  const endIndexIncomplete = startIndexIncomplete + itemsPerPage;
  const currentItemsIncomplete = incompleteItems.slice(startIndexIncomplete, endIndexIncomplete);

  const startIndexComplete = (currentPageComplete - 1) * itemsPerPage;
  const endIndexComplete = startIndexComplete + itemsPerPage;
  const currentItemsComplete = completedItems.slice(startIndexComplete, endIndexComplete);

  const handlePageChangeIncomplete = (page: number) => setCurrentPageIncomplete(page);
  const handlePageChangeComplete = (page: number) => setCurrentPageComplete(page);

  return (
    <>
      <h2>Incomplete Items</h2>
      {
        currentItemsIncomplete.map(item => (
          <div key={item.id} style={{ color: 'black' }}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
            <hr />
          </div>
        ))
      }
      <Pagination
        page={currentPageIncomplete}
        total={totalPagesIncomplete}
        onChange={handlePageChangeIncomplete}
      />
      {hideCompleted ?
        <>
          <h2>Completed Items</h2>
          {
            currentItemsComplete.map(item => (
              <div key={item.id} style={{ color: 'gray' }}>
                <p>{item.text}</p>
                <p><small>Assigned to: {item.assignee}</small></p>
                <p><small>Difficulty: {item.difficulty}</small></p>
                <div onClick={() => toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
                <hr />
              </div>
            ))
          }
          <Pagination
            page={currentPageComplete}
            total={totalPagesComplete}
            onChange={handlePageChangeComplete}
          />
        </>
        : null
      }
    </>
  );
}

export default List;
