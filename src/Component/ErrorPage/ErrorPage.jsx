import error from "../../assets/images/error.png"
import Navbar from "../Navbar/Navbar";
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={error} className="mx-auto mt-9 w-1/2" alt="" />
        </div>
    );
};

export default ErrorPage;