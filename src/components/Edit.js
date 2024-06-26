import React, { useState } from "react";

export const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form
      className="mb-4 font-primary w-full flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none bg transparent border border-gray-500 p-4 w-[300px]
        text-black mb-1 ml-6 rounded placeholder:text-gray-300"
        placeholder="update task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-red-700 border-none p-2 text-white cursor-pointer rounded ml-2  ">
        Update Task
      </button>
    </form>
  );
};
