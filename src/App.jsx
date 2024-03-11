import { useState } from "react";
import IconBoard from "@/components/IconBoard";
import Modal from "@/components/Modal";
import CreateTaskForm from "@/forms/CreateTaskForm";

const initialState = {
  columns: [
    {
      id: "status1",
      name: "todo",
      color: "#58bbdf",
    },
    {
      id: "status2",
      name: "doing",
      color: "#7068e6",
    },
    {
      id: "status3",
      name: "done",
      color: "#7adeab",
    },
  ],
  boards: [
    {
      id: "board1",
      name: "Platform Launch",
      tasks: [
        {
          id: "board1-task1",
          name: "Build UI for onboarding flow",
          status: "status1",
          subtasks: 3,
        },
        {
          id: "board1-tasks2",
          name: "Build UI for search",
          status: "status1",
          subtasks: 1,
        },
        {
          id: "board1-task3",
          name: "Build UI for settings",
          status: "status1",
          subtasks: 2,
        },
        {
          id: "board1-task4",
          name: "QA and test all major user journeys",
          status: "status1",
          subtasks: 3,
        },
        {
          id: "board1-task5",
          name: "Design settings and search pages",
          status: "status2",
          subtasks: 3,
        },
        {
          id: "board1-task6",
          name: "Add account management endpoints",
          status: "status2",
          subtasks: 3,
        },
        {
          id: "board1-task7",
          name: "Design onboarding flow",
          status: "status2",
          subtasks: 3,
        },
        {
          id: "board1-task8",
          name: "Add search endpoints",
          status: "status2",
          subtasks: 2,
        },
        {
          id: "board1-task9",
          name: "Add authentication endpoints",
          status: "status2",
          subtasks: 2,
        },
        {
          id: "board1-task10",
          name: "Research pricing points of various competitors and trial different business models",
          status: "status2",
          subtasks: 3,
        },
        {
          id: "board1-task11",
          name: "Conduct 5 wireframe tests",
          status: "staus3",
          subtasks: 1,
        },
        {
          id: "board1-task12",
          name: "Create wireframe prototype",
          status: "status3",
          subtasks: 1,
        },
        {
          id: "board1-task13",
          name: "Review results of usability tests and iterate",
          status: "status3",
          subtasks: 3,
        },
        {
          id: "board1-task14",
          name: "Create paper prototypes and conduct 10 usability tests with potential customers",
          status: "status3",
          subtasks: 2,
        },
        {
          id: "board1-task15",
          name: "Market discovery",
          status: "status3",
          subtasks: 1,
        },
        {
          id: "board1-task16",
          name: "Competitor analysis",
          status: "status3",
          subtasks: 2,
        },
        {
          id: "board1-task17",
          name: "Research the market",
          status: "status3",
          subtasks: 2,
        },
      ],
    },
    {
      id: "board2",
      name: "MarketingPlan",
      tasks: [],
    },
    { id: "board3", name: "Roadmap", tasks: [] },
  ],
};
function App() {
  const [boards, setBoards] = useState(initialState.boards);
  const [columns, setColumns] = useState(initialState.columns);
  const [activeBoard, setActiveBoard] = useState(initialState.boards[0]);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  return (
    <div className="layout">
      <header>
        <div className="header-row">
          <h1>Platform Launch</h1>
          <div>
            <button
              className="primary"
              onClick={() => setShowCreateTaskModal(true)}
            >
              Add New Task
            </button>
          </div>
        </div>
      </header>
      <aside>
        <div className="logo">kanban</div>
        <div className="menu">
          <div className="menu-title">All boards ({boards.length})</div>
          <ul>
            {boards.map((board) => (
              <li
                key={board.id}
                className={activeBoard === board ? "active" : ""}
                onClick={() => setActiveBoard(board)}
              >
                <IconBoard /> {board.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main>
        <div className="even-columns">
          {columns.map((column) => {
            const tasks = activeBoard.tasks.filter(
              (task) => task.status === column.id
            );
            return (
              <div className="col" key={column.id}>
                <div className="col-title">
                  <div
                    className="col-status"
                    style={{ backgroundColor: column.color }}
                  />
                  {column.name}
                </div>
                {tasks.map((task) => (
                  <div className="card" key={tasks.id}>
                    <div className="card-title">{task.name}</div>
                    <div className="card-subtitle">
                      {task.subtasks} subtasks
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </main>
      <Modal
        openModal={showCreateTaskModal}
        closeModal={() => setShowCreateTaskModal(false)}
      >
        <CreateTaskForm
          onSubmit={() => {
            console.log("onSubmit");
            setShowCreateTaskModal(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default App;
