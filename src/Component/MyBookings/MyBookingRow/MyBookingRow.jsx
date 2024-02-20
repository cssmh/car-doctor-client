const MyBookingRow = ({ getRow, handleDelete, handleBookingConfirm }) => {
  const { _id, img, customerName, date, price, status } = getRow;
  return (
    <tr>
      <th>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="avatar">
            <div className="mask w-16">
              <img src={img} alt="no image" />
            </div>
          </div>
        </div>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <p className="font-bold">{customerName}</p>
          </div>
        </div>
      </td>
      <td>
        <span>{date}</span>
      </td>
      <td>{price}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn bg-green-500 hover:bg-green-500 text-white btn-sm">
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn bg-red-500 hover:bg-red-500 text-white btn-sm"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default MyBookingRow;
