import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../assets/images/login/login.svg";
import { useContext, useRef, useState } from "react";
import { AuthContextCar } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const [view, setView] = useState(true);
  const navigateTo = useNavigate();
  const location = useLocation();
  const { loginUser, googlePopupLogin, resetPassword } =
    useContext(AuthContextCar);

  const handleGoogleLogin = () => {
    googlePopupLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("google logged in success");
        navigateTo(location?.state ? location.state : "/");
      })
      .catch((err) => toast(err.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        // generate token from server
        const user = { email };
        axios
          .post("https://car-doctor-server-ecru-chi.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              toast.success("logged in success");
              navigateTo(location?.state ? location.state : "/");
            }
          });
        // generate token from server end
      })
      .catch((err) => toast.error(err.message));
  };

  const getEmail = useRef(null);
  const handleForgotPassword = () => {
    const email = getEmail.current.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Give me a valid email address");
      return;
    } else {
      resetPassword(email)
        .then(toast.success("reset email sent!"))
        .catch((err) => toast(err.message));
    }
  };

  return (
    <div className="hero my-1">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-0 lg:mr-5">
          <img src={login} className="w-2/3 lg:w-full mx-auto" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-0">
            <h1 className="text-4xl font-semibold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                ref={getEmail}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={view ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[50px] right-3"
                onClick={() => setView(!view)}
              >
                {view ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
              <label className="label">
                <div className="label-text-alt link link-hover">
                  <button onClick={handleForgotPassword} type="button">
                    Forgot password?
                  </button>
                </div>
              </label>
            </div>
            <div className="form-control mt-1">
              <input
                className="btn bg-red-500 hover:bg-red-500 text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center mt-3">
            Do not have account?{" "}
            <Link to={"/register"} state={location.state}>
              {" "}
              <span className="text-red-500 font-semibold">Register</span>{" "}
            </Link>{" "}
          </p>
          <button
            className="mx-auto text-2xl mt-3 px-4 py-[6px] rounded-md bg-red-100 mb-6"
            onClick={handleGoogleLogin}
          >
            <FcGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
