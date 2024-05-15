import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';

function Settings() {
  const { pageItems, changePageItemLength, sort, changeSort, hideCompleted, changeHideCompleted } = useContext(SettingsContext);
  const [alert, setAlert] = useState<string>('');

  const handleChangePageItemLength = (value: number) => {
    changePageItemLength(value);
    setAlert('Items per page changed');
  };

  const handleChangeSort = (value: string) => {
    changeSort(value);
    setAlert('Sort order changed');
  };

  const handleChangeHideCompleted = (value: boolean) => {
    changeHideCompleted(value);
    setAlert('Hide completed changed');
  };

  return (
    <form>
      <h2>Settings</h2>
      {alert && <div>{alert}</div>}
      <label>
        <p>Items Per Page</p>
        <input type="number" value={pageItems} onChange={(e) => handleChangePageItemLength(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Sort By</p>
        <select value={sort} onChange={(e) => handleChangeSort(e.target.value)}>
          <option value="difficulty">Difficulty</option>
          <option value="assignee">Assignee</option>
          <option value="text">Text</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        <span>Hide Completed</span>
        <input type="checkbox" checked={!hideCompleted} onChange={(e) => handleChangeHideCompleted(e.target.checked)} />
      </label>
    </form>
  );
}

export default Settings;
