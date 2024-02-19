import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 hover:bg-red-500 text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 hover:bg-red-500 text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 hover:bg-red-500 text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
        to={"/my-bookings"}
      >
        My Bookings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 hover:bg-red-500 text-white px-2 py-1 rounded-md"
            : "px-2 py-1 rounded-md"
        }
        to={"/login"}
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} className="w-20" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/"}
          className="text-red-500 border border-red-500 px-4 py-2 font-semibold"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;