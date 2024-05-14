import { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { TodoContext, TodoData } from '../../Context/Settings';



const Todo = () => {
  const todoState = useContext<{ addItem: () => void, totalItems: Array<TodoData>, toggleComplete: () => void, pageItems: () => void }>(TodoContext)
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [incomplete, setIncomplete] = useState<number>(0);
  const { handleChange, handleSubmit } = useForm(todoState.addItem, defaultValues);

  useEffect(() => {
    const incompleteCount = todoState.totalItems.filter(item => !item.completed).length;
    console.log('this is incomplete', incompleteCount);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [todoState.totalItems, incomplete]);

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>

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

      {todoState.totalItems.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => todoState.toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  );
};

export default Todo;
