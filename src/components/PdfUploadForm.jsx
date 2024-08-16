import React, { useState } from "react";

function PdfUploadForm({ onPdfUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const pdfString = reader.result.split(",")[1]; // Get the base64 string
        onPdfUpload(pdfString); // Pass the PDF string to the parent component
      };
      reader.readAsDataURL(selectedFile); // Read the file as a data URL
    }
  };

  return (
    <form className="block mb-2 text-sm font-medium text-gray-900">
      <label htmlFor="pdfUpload">Seleccione un PDF de su DNI:</label>
      <input
        type="file"
        id="pdfUpload"
        accept="application/pdf"
        onChange={handleFileChange}
      />
    </form>
  );
}

export default PdfUploadForm;
