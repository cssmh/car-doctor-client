import login from "../../assets/images/login/login.svg"
const Login = () => {
  return (
    <div className="hero my-9">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-0 lg:mr-5">
          <img src={login} className="w-2/3 lg:w-full mx-auto" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-4xl font-semibold text-center">Login now!</h1>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
