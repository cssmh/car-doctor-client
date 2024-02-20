import { useContext } from "react";
import { AuthContextCar } from "../AuthProvider/AuthProvider";
import { FallingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { user, loading } = useContext(AuthContextCar);
  if (loading) {
    return (
      <div className="flex justify-center">
        <FallingLines
          color="#f56565"
          width="70"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={loc.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
