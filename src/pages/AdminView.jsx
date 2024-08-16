import React, { useState, useEffect } from "react";
import UserItem from "../components/UserItem";
import { getTasks } from "../api/api";
import { Link } from "wouter";

const AdminView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTasks();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Admin View</h1>
      <div className="space-y-4 overflow-y-scroll">
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/">
          <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Volver
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AdminView;
