import { useEffect, useState } from "react";
import CheckBanner from "../CheckBanner/CheckBanner";
import useContextHook from "../../CustomHook/useContextHook";
import useAxiosHook from "../../CustomHook/useAxiosHook";
import MyBookingRow from "./MyBookingRow/MyBookingRow";
import swal from "sweetalert";
import { toast } from "react-toastify";

const MyBookings = () => {
  const { user } = useContextHook();
  const [bookings, setBookings] = useState([]);
  const axiosCustom = useAxiosHook();

  // used axios custom hook
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosCustom?.get(url)?.then((res) => setBookings(res.data));
  }, [axiosCustom, url]);

  const handleDelete = (idx) => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://car-doctor-server-ecru-chi.vercel.app/bookings/${idx}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = bookings.filter((book) => book._id !== idx);
              setBookings(remaining);
              swal("Deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Your booking is safe!");
      }
    });
  };

  const handleBookingConfirm = (idx) => {
    fetch(`https://car-doctor-server-ecru-chi.vercel.app/bookings/${idx}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const filter = bookings.filter((book) => book._id !== idx);
          const findThatOne = bookings.find((book) => book._id === idx);
          findThatOne.status = "confirm";
          const newBookings = [findThatOne, ...filter];
          setBookings(newBookings);
          toast("Confirmed! thank you");
        }
      });
  };

  return (
    <div>
      <CheckBanner></CheckBanner>
      <p className="text-center mt-6 font-semibold text-2xl">
        {user?.displayName} total {bookings.length} booking
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
              <MyBookingRow
                key={book._id}
                getRow={book}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></MyBookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
