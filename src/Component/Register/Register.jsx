import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
const Register = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-0 lg:mr-5">
          <img src={login} className="w-2/3 lg:w-full mx-auto" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn bg-red-500 hover:bg-red-500 text-white">
                Register
              </button>
              <p className="text-center mt-2">
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
