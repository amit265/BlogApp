import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../src/App.css'
import Modal from "./Modal";
import {
  FaBars,
  FaDribbble,
  FaTwitter,
  FaFacebook,
  FaXmark,
} from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  //nav Items

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-orange-400">DK</span>
        </a>

        {/* Navigation for large devices */}

        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-white">
              <NavLink
                className={({ isActive }) => isActive ? "active" : ""}
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons  <FaFacebook /> */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white 
            hover:text-orange-500 transition-all duration-100 ease-out"
          >
            Log in
          </button>
        </div>

            {/* Modal is here */}

            <Modal isOpen = {isModalOpen} onClose={closeModal}/>

        {/* mobile menu btn */}

        <div className="lg:hidden text-white">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* Menu item for mobile */}

      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-black">
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
