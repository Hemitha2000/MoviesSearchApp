import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "block text-[#7532b7] text-[17px] ml-[-20px] border-b-2 border-l-[10px] border-l-[#7532b7] border-b-[#7532b7]"
      : "block text-[#fa913f]";

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#fbfbfb] px-4 py-3 shadow">
        <img src={logo} alt="logo" className="h-8" />
        <button onClick={() => setOpen(true)}>
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <section
        className={`
          fixed top-0 bottom-0 left-[-7px] z-50 bg-[#fbfbfb]
          w-64 md:w-1/6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="bg-[#fbfbfb] pb-2 px-2 flex items-center justify-between">
          <img src={logo} alt="logo" />
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <h3 className="bg-[#e0c2ef] text-left px-5 font-bold text-sm">
          Menu
        </h3>

        <div className="py-2 px-5 space-y-2">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            <i className="fas fa-satellite-dish text-xl m-2"></i>
            <b>Dashboard</b>
          </NavLink>

          <NavLink to="/details" className={linkClass} onClick={() => setOpen(false)}>
            <i className="fas fa-stream text-xl m-2"></i>
            <b>Movies</b>
          </NavLink>

          <NavLink to="/favorite" className={linkClass} onClick={() => setOpen(false)}>
            <i className="fab fa-gratipay text-xl m-2"></i>
            <b>Favorites</b>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Header;
