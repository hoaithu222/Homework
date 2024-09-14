import React, { useState } from "react";
import { FaPager, FaUserCircle } from "react-icons/fa";
import { AiFillCode, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Thành phần Logo
const Logo = () => (
  <div className="logo text-2xl font-bold text-gray-900">Material Tailwind</div>
);

// Thành phần NavItem
const NavItem = ({ item }) => {
  return item.isButton ? (
    <a
      href={item.link}
      className="px-4 py-2 bg-black text-white rounded shadow-lg font-medium"
    >
      {item.name}
    </a>
  ) : (
    <a
      href={item.link}
      className="flex items-center px-4 py-2 text-gray-800 hover:text-gray-700 font-medium"
    >
      {item.icon && <span className="mr-1 text-xl">{item.icon}</span>}
      {item.name}
    </a>
  );
};

// Thành phần NavBar
const NavBar = ({ isOpen }) => {
  const navItems = [
    {
      name: "Page",
      icon: <FaPager />,
      link: "#",
    },
    {
      name: "Account",
      icon: <FaUserCircle />,
      link: "#",
    },
    {
      name: "Docs",
      icon: <AiFillCode />,
      link: "https://www.material-tailwind.com/docs/react/installation",
    },
  ];

  return (
    <nav
      className={`flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 ${
        isOpen ? "block" : "hidden lg:flex"
      }`}
    >
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </nav>
  );
};

const SignInButton = () => (
  <a
    href="#signin"
    className="px-4 py-2 bg-white-500 mr-3 text-black rounded font-bold hover:bg-gray-100"
  >
    Sign In
  </a>
);

// Thành phần BlocksButton
const BlocksButton = () => (
  <a
    href="https://www.material-tailwind.com/blocks"
    className="px-4 py-2 bg-black text-white rounded shadow-lg hover:bg-gray-800 font-bold"
  >
    Blocks
  </a>
);

// Thành phần Buttons
const Buttons = ({ isOpen }) => (
  <div
    className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 ${
      isOpen ? "block" : "hidden lg:flex"
    }`}
  >
    <SignInButton />
    <BlocksButton />
  </div>
);

// Thành phần Header
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full flex items-center justify-between p-4 bg-white transition-shadow duration-300 opacity-95${
        isOpen ? "shadow-lg" : ""
      }`}
    >
      <Logo />
      <button
        className="lg:hidden p-2 text-gray-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <AiOutlineMenu className="text-2xl" />
        )}
      </button>

      <div
        className={`absolute lg:relative top-full left-0 right-0 z-10 p-4 bg-white lg:bg-transparent lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-6 items-center w-full lg:w-auto">
          <div className="box">
            <NavBar isOpen={isOpen} />
          </div>
          <div className="box">
            <Buttons isOpen={isOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}
