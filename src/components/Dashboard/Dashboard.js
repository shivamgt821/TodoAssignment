import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  const [pagesToShow] = useState(4);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (
      number === 1 ||
      number === currentPage ||
      number === Math.ceil(todos.length / todosPerPage)
    ) {
      return (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      );
    }
    if (
      number >= currentPage - Math.floor(pagesToShow / 2) &&
      number <= currentPage + Math.floor(pagesToShow / 2)
    ) {
      return (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      );
    }
    return null;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-table">
        <h2>Todo List</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
                <td>{todo.completed ? "Completed" : "Not Completed"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {renderPageNumbers}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(todos.length / todosPerPage)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
