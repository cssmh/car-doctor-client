import { useContext, useEffect, useState } from "react";
import { AuthContextCar } from "../../AuthProvider/AuthProvider";
import CheckBanner from "../CheckBanner/CheckBanner";
import MyBookingRow from "./MyBookingRow/MyBookingRow";

const MyBookings = () => {
  const { user } = useContext(AuthContextCar);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  return (
    <div>
      <CheckBanner></CheckBanner>
      <p className="text-center mt-6 font-semibold text-2xl">
       {user?.displayName} Your Total booking is {bookings.length}
      </p>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => (
              <MyBookingRow key={book._id} getRow={book}></MyBookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
