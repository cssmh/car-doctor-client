import { useContext } from "react";
import { AuthContextCar } from "../AuthProvider/AuthProvider";

const ContextHook = () => {
  const auth = useContext(AuthContextCar);
  return auth;
};

export default ContextHook;
