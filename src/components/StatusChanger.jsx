import React, { useState } from "react";
import { updateTask } from "../api/api";
import classNames from "classnames";

const StatusChanger = ({ id, onStatusChange }) => {
  const [status, setStatus] = useState("OPEN");

  const handleStatusChange = async (newStatus) => {
    try {
      await updateTask(id, { status: newStatus });
      setStatus(newStatus);
      onStatusChange(newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const statusClass = classNames({
    "text-green-500": status === "OPEN",
    "text-yellow-500": status === "IN_PROGRESS",
    "text-blue-500": status === "DONE",
    "text-red-500": status === "CANCELLED",
  });

  return (
    <div className={statusClass}>
      <button
        className="px-2 py-1 bg-green-500 m-1 text-white rounded"
        onClick={() => handleStatusChange("OPEN")}
      >
        Open
      </button>
      <button
        className="px-2 py-1 bg-yellow-500 m-1 text-white rounded"
        onClick={() => handleStatusChange("IN_PROGRESS")}
      >
        In Progress
      </button>
      <button
        className="px-2 py-1 bg-blue-500 m-1 text-white rounded"
        onClick={() => handleStatusChange("DONE")}
      >
        Done
      </button>
      <button
        className="px-2 py-1 bg-red-500 m-1 text-white rounded"
        onClick={() => handleStatusChange("CANCELLED")}
      >
        Cancelled
      </button>
    </div>
  );
};

export default StatusChanger;
