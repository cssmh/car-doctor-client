import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContextCar } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContextCar);

  const handleLogout = () => {
    logoutUser().then().catch();
  };
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

      {user?.email ? (
        <div>
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
          <button onClick={handleLogout} className="px-2 py-1">
            Log out
          </button>
        </div>
      ) : (
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
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-2 lg:px-0">
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
          <img src={logo} className="w-12 lg:w-20" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <p><img src={user?.photoURL} className="w-10 mr-2 rounded-2xl" alt="" /></p>
        <Link
          to={"/"}
          className="text-red-500 border border-red-500 px-2 lg:px-4 py-1 lg:py-2 font-semibold"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
