import React from "react";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold">
            BeerTopia
          </Link>

          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/gallery" className="text-white hover:text-gray-300">
              Beer Gallery
            </Link>
            <Link to="/Test1" className="text-white hover:text-gray-300">
              Test1
            </Link>
            <Link to="/Test2" className="text-white hover:text-gray-300">
              Test2
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
