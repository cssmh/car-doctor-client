import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import useContextHook from "../../CustomHook/useContextHook";
const Register = () => {
  const [view, setView] = useState(true);
  const navigateTo = useNavigate();
  const loc = useLocation();
  const { userRegister, updateUser } = useContextHook();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error(
        "Make your password at least 6 character and one Uppercase letter!"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Add at least one Uppercase letter");
      return;
    }
    userRegister(email, password)
      .then(() => {
        updateUser(name)
          .then(() => {
            toast.success("register success");
          })
          .catch((err) => toast.error(err.message));
        navigateTo(loc?.state ? loc.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-0 lg:mr-5">
          <img src={login} className="w-2/3 lg:w-full mx-auto" alt="" />
        </div>
        <div
          data-aos="flip-left"
          className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl font-semibold text-center">
              Register now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={view ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[316px] right-11"
                onClick={() => setView(!view)}
              >
                {view ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="form-control mt-3">
              <input
                className="btn bg-red-500 hover:bg-red-500 text-white"
                type="submit"
                value="Register"
              />
              <p className="text-center mt-3">
                Already have account?{" "}
                <Link to={"/login"}>
                  {" "}
                  <span className="text-red-500 font-semibold">Login</span>{" "}
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
