import React, { FC, useState } from "react";

const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={
          "flex flex-col items-center justify-center w-8 h-8 p-1 rounded-full hover:bg-slate-200"
        }
      >
        <div className="w-5 h-0.5 mb-1 bg-slate-400 rounded-sm" />
        <div className="w-5 h-0.5 mb-1 bg-slate-400 rounded-sm" />
        <div className="w-5 h-0.5 bg-slate-400 rounded-sm" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 bg-white shadow-md p-4 rounded">
          <ul className="space-y-2">
            <li>
              <a href="/" className="block text-slate-500 hover:font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-slate-500 hover:font-bold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-slate-500 hover:font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
