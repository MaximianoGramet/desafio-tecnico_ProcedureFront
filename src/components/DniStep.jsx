import React, { useState } from "react";
import PdfUploadForm from "./PdfUploadForm";
import { useLocation } from "wouter";

const DniStep = () => {
  const [formData, setFormData] = useState({});
  const [location, setLocation] = useLocation();

  const handlePdfUpload = (file) => {
    setFormData({
      ...formData,
      dni: file,
    });
  };
  const handleSuccess = () => {
    setLocation("/success");
  };

  return (
    <div>
      <div className="flex justify-center ">
        <PdfUploadForm onPdfUpload={handlePdfUpload} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSuccess}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
        >
          terminar
        </button>
      </div>
    </div>
  );
};

export default DniStep;
