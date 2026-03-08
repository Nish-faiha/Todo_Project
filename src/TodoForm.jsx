// TaskForm.jsx
import React, { useState } from "react";

function TodoForm({ addTask, closeForm }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    addTask({ title, date, desc });

    setTitle("");
    setDate("");
    setDesc("");

    closeForm();
  };

  return (
    <div className="container mt-3">
      <div className="card shadow p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><strong>Title</strong></label>
            <input
              type="text"
              className="form-control" placeholder="Enter your Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label"><strong>Target Date</strong></label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label"><strong>Description</strong></label>
            <textarea
              className="form-control" placeholder="Enter your Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Create
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeForm}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;