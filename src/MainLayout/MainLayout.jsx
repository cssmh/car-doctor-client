import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-[1220px] mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[70vh]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
