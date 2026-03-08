import { useState } from "react";
import "./App.css";
import { FcTodoList } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TodoForm from "./TodoForm"; // import the form component

function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  
  const addTask = (task) => {
    setTodoTasks([...todoTasks, task]);
  };

  const moveToProgress = (index) => {
    const task = todoTasks[index];
    setTodoTasks(todoTasks.filter((_, i) => i !== index));
    setProgressTasks([...progressTasks, task]);
  };

  const moveToDone = (index) => {
    const task = progressTasks[index];
    setProgressTasks(progressTasks.filter((_, i) => i !== index));
    setDoneTasks([...doneTasks, task]);
  };

  const deleteTodo = (index) => setTodoTasks(todoTasks.filter((_, i) => i !== index));
  const deleteProgress = (index) => setProgressTasks(progressTasks.filter((_, i) => i !== index));
  const deleteDone = (index) => setDoneTasks(doneTasks.filter((_, i) => i !== index));

  return (
    <div className="container-fluid pt-2" style={{ backgroundColor: "#FFEBCD", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark mt-3" style={{ backgroundColor: "#F4A460" }}>
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" style={{ fontSize: "40px", color: "black", fontFamily: "sans-serif" }}>
            <FcTodoList /> Task Manager
          </a>
          <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close Form" : "Add Task"}
          </button>
        </div>
      </nav>

     
      {showForm && <TodoForm addTask={addTask} closeForm={() => setShowForm(false)} />}

     
      <div className="container mt-5">
        <div className="row g-4">
          {/* To Do */}
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center text-black" style={{ backgroundColor: "#FFC0CB" }}>
                <h5>To Do</h5>
              </div>
              <div className="card-body">
                {todoTasks.map((t, index) => (
                  <div key={index} className="card mb-3" style={{ backgroundColor: "#FFC0CB" }}>
                    <div className="card-body d-flex justify-content-between flex-column">
                      <h5><strong>{t.title}</strong></h5>
                      <small>{t.date}</small>
                      <p className="text-break">{t.desc}</p>
                      <div className="mt-2 d-flex justify-content-end">
                        <button className="btn btn-sm btn-success me-2" onClick={() => moveToProgress(index)}>
                          <BsFillArrowRightCircleFill />
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(index)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center text-black" style={{ backgroundColor: "#B0E0E6" }}>
                <h5>In Progress</h5>
              </div>
              <div className="card-body">
                {progressTasks.map((t, index) => (
                  <div key={index} className="card mb-3" style={{ backgroundColor: "#B0E0E6" }}>
                    <div className="card-body d-flex justify-content-between flex-column">
                      <h5><strong>{t.title}</strong></h5>
                      <small>{t.date}</small>
                      <p className="text-break">{t.desc}</p>
                      <div className="mt-2 d-flex justify-content-end">
                        <button className="btn btn-sm btn-success me-2" onClick={() => moveToDone(index)}>
                          <BsFillArrowRightCircleFill />
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteProgress(index)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Done */}
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center text-black" style={{ backgroundColor: "#98FB98" }}>
                <h5>Done</h5>
              </div>
              <div className="card-body">
                {doneTasks.map((t, index) => (
                  <div key={index} className="card mb-3" style={{ backgroundColor: "#98FB98" }}>
                    <div className="card-body d-flex justify-content-between flex-column">
                      <h5><strong>{t.title}</strong></h5>
                      <small>{t.date}</small>
                      <p className="text-break">{t.desc}</p>
                      <div className="mt-2 d-flex justify-content-end">
                        <button className="btn btn-sm btn-danger" onClick={() => deleteDone(index)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;