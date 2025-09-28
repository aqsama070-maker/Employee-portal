import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white">
      <h1 className="text-xl font-bold">Logo</h1>
      <div className="flex space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="px-3 py-1 border border-white rounded-lg">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
