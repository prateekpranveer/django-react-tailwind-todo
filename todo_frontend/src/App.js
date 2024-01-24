import './App.css';
import { useState, useEffect } from 'react';
import axios from '../src/axios'
import AddTask from './components/AddTask';
import TaskView from './components/TaskView';


function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("").then((res) => setAllTasks(res.data.payload));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/task/delete/${id}/`)
      .then(() => {
        setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const markCompleted = (id) => {
    axios
      .post(`/task/mark/${id}/`)
      .then(() => {
        setAllTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, completed: true } : task
          )
        );
      })
      .catch((error) => {
        console.error("Error marking task as completed:", error);
      });
  };

  const postTask = () => {
    axios
      .post("/task", { task: query })
      .then((res) => {
        setQuery("");
        setAllTasks((prevTasks) => [...prevTasks, res.data]);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div>
      <AddTask query={query} onInputChange={setQuery} onPostTask={postTask} />
      <TaskView tasks={allTasks} onDelete={handleDelete} onMarkCompleted={markCompleted} />
    </div>
  );
};


export default App;