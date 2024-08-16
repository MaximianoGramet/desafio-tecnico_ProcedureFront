import React, { useState } from "react";

function PdfUploadForm({ onPdfUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      onPdfUpload(selectedFile);
    }
  };

  return (
    <form className="block mb-2 text-sm font-medium text-gray-900">
      <label className="m-5" htmlFor="pdfUpload">
        Seleccione un PDF de su DNI:
      </label>
      <br />
      <input
        className="m-5"
        type="file"
        id="pdfUpload"
        accept="application/pdf"
        onChange={handleFileChange}
      />
    </form>
  );
}

export default PdfUploadForm;
