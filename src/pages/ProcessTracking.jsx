import React, { useState } from "react";
import { getTaskByEmail } from "../api/api";
import UserItem from "../components/UserItem";

const TaskView = () => {
  const [taskEmail, setTaskEmail] = useState("");
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setTaskEmail(e.target.value);
  };

  const handleFetchTask = async () => {
    try {
      const fetchedTask = await getTaskByEmail(taskEmail);
      setTask(fetchedTask);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTask(null);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex  justify-center">
        <input
          type="email"
          value={taskEmail}
          onChange={handleInputChange}
          placeholder="Ingrese su email"
          className="p-2 border border-gray-300 rounded-lg no-arrows"
        />
        <button
          onClick={handleFetchTask}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Ver Progreso
        </button>
        {/* este sistema puede ser reemplazado con una tabla que asocie a la cuenta
        una vez que haya usuarios  */}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {task && (
        <UserItem
          id={task.id}
          name={task.name}
          email={task.email}
          age={task.age}
          status={task.status}
          UserComment={task.comment}
        />
      )}
    </div>
  );
};

export default TaskView;
