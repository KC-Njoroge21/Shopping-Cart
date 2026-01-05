import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
      <Link to={"/"}>
        <div className="ml-5">
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            REACT REDUX SHOPPING CART
          </h1>
        </div>
      </Link>
      <ul className="flex items-center space-x-6 text-gray-900 font-semibold">
        <li className="cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
