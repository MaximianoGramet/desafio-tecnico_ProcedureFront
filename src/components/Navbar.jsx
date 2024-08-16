import React from "react";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow overflow-visible">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <img
            src="https://github.com/org-sistemas-sn/desafio-tecnico/blob/procedure/assets/sn-logo.png?raw=true"
            alt="Logo"
            className="h-32 p-2 bg-gray-300 rounded-full"
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <Link href="/Request">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Seguimiento
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
