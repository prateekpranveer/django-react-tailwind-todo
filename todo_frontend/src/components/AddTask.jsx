// AddTask.js
import React from 'react';

const AddTask = ({ query, onInputChange, onPostTask }) => {
  const changeInput = (e) => {
    onInputChange(e.target.value);
  }

  const postTask = () => {
    onPostTask();
  }

  return (
    <div className='w-2/3 pt-4 flex justify-center items-center mx-auto space-x-4'>
      <input
        onChange={(e) => changeInput(e)}
        value={query}
        className='px-4 py-4 h-12 border rounded-md'
        placeholder='Add a new task'
      />
      <button
        onClick={postTask}
        className='border px-4 py-3 text-white bg-black rounded-md hover:bg-gray-700'
      >
        +
      </button>
    </div>
  );
}

export default AddTask;