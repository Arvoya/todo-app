import { useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import Auth from '../../Components/Auth';
import { ItemsContext, ItemData } from '../../Context/Items';
import List from '../List/index.js';


const Todo = () => {
  const ItemsState = useContext<{ totalItems: Array<ItemData>, addItem: (item: ItemData) => void, toggleComplete: (id: string) => void }>(ItemsContext)
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const { handleChange, handleSubmit } = useForm(ItemsState.addItem, defaultValues);


  return (
    <>
      <Auth capability="update">
        <form onSubmit={handleSubmit}>

          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </label>

          <label>
            <span>Assigned To</span>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </label>

          <label>
            <span>Difficulty</span>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
          </label>

          <label>
            <button type="submit">Add Item</button>
          </label>
        </form>
      </Auth>
      <List items={ItemsState.totalItems} toggleComplete={ItemsState.toggleComplete} />

    </>
  );
};

export default Todo;
