import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav flex w-full mx-auto items-center lg:px-20 px-3 py-4 justify-between absolute text-white z-1">
      <h1 className="text-2xl font-bold md:ms-3 md:text-3xl">Platia</h1>

      {/* Desktop Nav */}
      <ul className="lg:flex gap-7 hidden md:hidden">
        <li className="text-[#E07844] text-[18px] ">
          <a href="#home">Home</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="#about">About</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="menu">Menu</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Book a Table</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="chefs">Chefs</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Events</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <select name="dropdown">
            <option value="Dropdown">Option 1</option>
          </select>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Contact</a>
        </li>
       
      </ul>

      {/* Mobile Toggle Button */}
      <button className=" absolute top-4 start-[85%] md:start-[92%]"  onClick={() => setOpen(!open)}>
        {open ? <X size={28} className="text-black md:ms-3" /> : <Menu size={28} className="ms-3 lg:hidden" />}
      </button>

      {/* Mobile Nav */}
      {open && (
        <div className="flex justify-between items-center absolute top-20 rounded-2xl  start-5 bg-gray-200 p-5 w-[90%] md:w-[94%]">
          <ul className="flex flex-col text-center gap-7">
            <li className="text-[#E07844] text-[18px]">
              <a href="home">Home</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="about">About</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="menu">Menu</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Book a Table</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="chefs">Chefs</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Events</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <select name="dropdown">
                <option value="Dropdown">Option 1</option>
              </select>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
