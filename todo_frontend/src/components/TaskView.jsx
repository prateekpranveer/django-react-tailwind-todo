// TaskView.js
import axios from "../axios";
import React, {useState} from "react";

const TaskView = ({ tasks, onDelete, onMarkCompleted }) => {
  return (
    <div className="mt-12">
      {tasks?.map((p) => (
        <div className="mt-4 items-center space-x-4 flex justify-center" key={p.id}>
          <h1 className={`${p.completed ? "line-through" : ""}`}>{p.task}</h1>
          {
            !p.completed && 
            <h1
            onClick={() => onMarkCompleted(p.id)}
            className="border p-1 bg-sky-400 text-white text-xs cursor-pointer"
          >
            Mark as Completed
          </h1>
          }
          <button
            onClick={() => onDelete(p.id)}
            className="border p-1 bg-red-500 text-white text-xs cursor-pointer"
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskView;