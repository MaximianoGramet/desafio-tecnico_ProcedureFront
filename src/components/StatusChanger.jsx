import React from "react";
import { updateTask } from "../api/api";

const StatusChanger = ({ id, onStatusChange }) => {
  const changeStatus = async (newStatus) => {
    try {
      await updateTask(id, { status: newStatus });
      onStatusChange(newStatus);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex space-x-2 mt-2">
      <button
        className="px-2 py-1 bg-green-500 text-white rounded"
        onClick={() => changeStatus("OPEN")}
      >
        Open
      </button>
      <button
        className="px-2 py-1 bg-yellow-500 text-white rounded"
        onClick={() => changeStatus("IN_PROGRESS")}
      >
        In Progress
      </button>
      <button
        className="px-2 py-1 bg-blue-500 text-white rounded"
        onClick={() => changeStatus("DONE")}
      >
        Done
      </button>
      <button
        className="px-2 py-1 bg-red-500 text-white rounded"
        onClick={() => changeStatus("CANCELLED")}
      >
        Cancelled
      </button>
    </div>
  );
};

export default StatusChanger;
