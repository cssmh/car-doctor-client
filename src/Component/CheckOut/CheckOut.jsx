import { useLoaderData } from "react-router-dom";
import CheckBanner from "../CheckBanner/CheckBanner";
import useContextHook from "../../useCustomHook/useContextHook";
import swal from "sweetalert";

const CheckOut = () => {
  const { user } = useContextHook();
  const loadData = useLoaderData();
  //   console.log(loadData);
  const { _id, title, price, img } = loadData;
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const due = form.due.value;
    const bookings = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: due,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Good job!", "Order added", "success");
        }
      });
  };
  return (
    <div className="mt-10">
      <CheckBanner></CheckBanner>
      <h1 className="text-center text-2xl mt-6">{title}</h1>
      <form
        onSubmit={handleOrder}
        className="my-8 border p-10 bg-gray-200 rounded-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pick a Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              readOnly
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              name="due"
              readOnly
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn border-none bg-red-500 hover:bg-red-500 text-white">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
