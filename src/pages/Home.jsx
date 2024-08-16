import { Link } from "wouter";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mt-8">
          Solicitud de permiso para eventos deportivos
        </h1>
        <p className="text-center">
          esta pantalla emulara un login temporalmente
        </p>
        <div className="flex justify-center mt-4">
          <Link href="/user">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Vista de Usuario
            </button>
          </Link>
          <Link href="/admin">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
              Vista de Admin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
