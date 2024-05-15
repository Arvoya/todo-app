import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

function Settings() {
  const { pageItems, changePageItemLength, sort, changeSort, hideCompleted, changeHideCompleted } = useContext(SettingsContext);

  return (
    <form>
      <h2>Settings</h2>
      <label>
        <p>Items Per Page</p>
        <input type="number" value={pageItems} onChange={(e) => changePageItemLength(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Sort By</p>
        <select value={sort} onChange={(e) => changeSort(e.target.value)}>
          <option value="difficulty">Difficulty</option>
          <option value="assignee">Assignee</option>
          <option value="text">Text</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        <span>Hide Completed</span>
        <input type="checkbox" checked={!hideCompleted} onChange={(e) => changeHideCompleted(e.target.checked)} />
      </label>
    </form>
  );
}

export default Settings;
