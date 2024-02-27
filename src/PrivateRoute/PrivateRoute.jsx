import { FallingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import ContextHook from "../CustomHook/ContextHook";

const PrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { user, loading } = ContextHook();
  if (loading) {
    return (
      <div className="flex justify-center">
        <FallingLines
          color="#f56565"
          width="60"
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
