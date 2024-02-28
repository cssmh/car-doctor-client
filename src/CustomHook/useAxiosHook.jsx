import axios from "axios";
import { useEffect } from "react";
import useContextHook from "./useContextHook";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-ecru-chi.vercel.app",
  withCredentials: true,
});
const useAxiosHook = () => {
  const { logoutUser } = useContextHook();
  const navigateTo = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log("error in interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser()
            .then(() => {
              toast.error("Authorization error, login again!");
              navigateTo("/login");
            })
            .catch();
        }
      }
    );
  }, [logoutUser, navigateTo]);
  return axiosSecure;
};

export default useAxiosHook;
