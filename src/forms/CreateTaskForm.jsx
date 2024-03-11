const CreateTaskForm = ({ onSubmit }) => {
  return (
    <form method="dialog" onSubmit={onSubmit}>
      <h3>Add New Task</h3>
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="e.g. Take coffee break"
        />
      </div>
      <div className="form-field">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </div>
      <fieldset className="form-field">
        <label aria-role="legend">Subtasks</label>
        <input
          type="text"
          name="subtask1"
          id="subtask1"
          placeholder="e.g. Make coffee"
        />
        <input
          type="text"
          name="subtask2"
          id="subtask2"
          placeholder="e.g. Drink coffee & smile"
        />
      </fieldset>
      <button type="button">Add New Subtask</button>
      <div className="form-field">
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value="status1">Todo</option>
          <option value="status2">Doing</option>
          <option value="status3">Done</option>
        </select>
      </div>
      <button type="submit" className="primary">
        Create Task
      </button>
    </form>
  );
};

export default CreateTaskForm;
