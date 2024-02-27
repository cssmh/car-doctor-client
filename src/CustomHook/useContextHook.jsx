import { useContext } from "react";
import { AuthContextCar } from "../AuthProvider/AuthProvider";

const useContextHook = () => {
  const auth = useContext(AuthContextCar);
  return auth;
};

export default useContextHook;
