import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between px-5 py-5 m-2 bg-slate-200 items-center">
        <p className="font-bold text-2xl text-slate-700 pl-20">
          Sahand<span className="text-black">Estate</span>
        </p>
        <div className="bg-white rounded-md">
          <input
            type="text"
            placeholder="Search.."
            className="h-10 w-64 rounded-md px-3 bg-slate-50 outline-none"
          />
        </div>
        <div className="flex felx-row gap-4 mr-20 ">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/sign-in" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
