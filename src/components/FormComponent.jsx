import React, { useState } from "react";
import { createTask } from "../api/api";
import { useLocation } from "wouter";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FormComponent = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [location, setLocation] = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    date: getCurrentDate(),
    email: "",
    age: 2,
    terms: false,
    localidad: "",
    category: "",
  });
  const handleChangeSelect = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      createTask(formData);
      setLocation("/user/dni");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center p-4 shadow  overflow-y-scroll">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto font-bold">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  d"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Fecha:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="localidad"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Localidad:
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            name="localidad"
            id="localidad"
            value={formData.localidad}
            onChange={handleChange}
          />
        </div>

        <label className="block mt-2 mb-2 text-sm font-medium text-gray-900">
          Categoría:
        </label>
        <div className="sm:col-span-3">
          <div className="mt-2">
            <select
              value={formData.category}
              onChange={handleChangeSelect}
              id="category"
              name="category"
              className="mb-3 bshadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="interés social">Interés social</option>
              <option value="cultural">Cultural</option>
              <option value="educativo">Educativo</option>
              <option value="beneficio">Beneficio</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Edad:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Estoy de acuerdo con los{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terminos y condiciones
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
