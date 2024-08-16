const BASE_URL = "http://localhost:3000/tasks";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(BASE_URL);
  return handleResponse(response);
};

export const getTaskById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(response);
};

export const getTaskByEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/email/${email}`);
  return handleResponse(response);
};

export const createTask = async (task) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return handleResponse(response);
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return handleResponse(response);
};

export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};
