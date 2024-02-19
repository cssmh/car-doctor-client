import { FaRegCalendarCheck } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="rounded-lg mt-16 mb-12 bg-black text-white grid grid-cols-1 lg:grid-cols-3 px-20 py-16">
      <div className="flex items-center gap-3">
        <p className="text-3xl text-red-500">
          <FaRegCalendarCheck />
        </p>
        <div>
          <p>We are open mon-fri</p>
          <p className="font-semibold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-3xl text-red-500">
          <IoMdCall />
        </p>
        <div>
          <p>Have a question?</p>
          <p className="font-semibold">+880176761606*</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-3xl text-red-500">
          <IoLocationOutline />
        </p>
        <div>
          <p>Need repair? Our address</p>
          <p className="font-semibold">Ghatail, Tangail</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
