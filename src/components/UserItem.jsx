import React, { useState } from "react";
import { useLocation } from "wouter";
import StatusChanger from "./StatusChanger";
import classNames from "classnames";
import { updateTask } from "../api/api";

const UserItem = ({ id, email, age, name, status, UserComment }) => {
  const [location] = useLocation();
  const [comment, setComment] = useState("");
  const [newStatus, setNewStatus] = useState(status);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleStatusChange = (newStatus) => {
    setNewStatus(newStatus);
  };

  const saveComment = async () => {
    try {
      await updateTask(id, { comment });
    } catch (error) {
      console.log(error);
    }
  };
  const statusClass = classNames({
    "text-green-500": status === "OPEN",
    "text-yellow-500": status === "IN_PROGRESS",
    "text-blue-500": status === "DONE",
    "text-red-500": status === "CANCELLED",
  });
  return (
    <div className="">
      <div className="p-4 border border-gray-300 rounded-lg ">
        <p className="mb-2 overflow-y-auto">
          <strong>Email:</strong> {email}
        </p>
        <p className="mb-2 overflow-y-auto">
          <strong>Nombre:</strong> {name}
        </p>
        <p className="mb-2">
          <strong>Edad:</strong> {age}
        </p>
        <p className={`mb-2 ${statusClass}`}>
          <strong>Estado:</strong> {newStatus}
        </p>
        {location !== "/Request" && (
          <div className="overflow-y-auto">
            <StatusChanger id={id} onStatusChange={handleStatusChange} />
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Comentario"
              className="w-full my-5 h-24 border overflow-auto border-gray-300 rounded-lg p-2"
            ></textarea>
            <button
              onClick={saveComment}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Guardar comentario
            </button>
          </div>
        )}
        {location == "/Request" && UserComment && (
          <div className="overflow-y-auto">
            <p className="w-full my-5 h-24 border overflow-auto border-gray-300 rounded-lg p-2">
              {UserComment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserItem;
