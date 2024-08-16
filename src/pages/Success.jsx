import React from "react";
import { Link, useLocation } from "wouter";

const Success = () => {
  const [location, setLocation] = useLocation();

  const handleBackToHome = () => {
    setLocation("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">¡Felicitaciones!</h1>
      <p className="text-lg mb-8 text-center">
        Has completado el proceso exitosamente. <br /> Puedes ver su progreso en{" "}
        <Link href="/Request" className="text-blue-500 underline">
          Seguimiento
        </Link>
        <br />
        con solo usar tu email.
      </p>
      <button
        onClick={handleBackToHome}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Success;
