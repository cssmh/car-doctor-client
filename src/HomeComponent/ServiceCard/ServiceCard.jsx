import { Link } from "react-router-dom";

const ServiceCard = ({ getService }) => {
  // console.log(getService);
  const { _id, title, price, img } = getService;
  return (
    <div className="space-y-3 p-4 border rounded-lg mx-2 lg:mx-0">
      <img
        data-aos="zoom-in"
        src={img}
        className="rounded-lg md:h-56 w-full"
        alt=""
      />
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p className="font-semibold text-red-500">Price: ${price}</p>
        </div>
        <Link to={`/checkout/${_id}`}>
          <button className="btn bg-red-500 hover:bg-red-500 text-white">
            Book now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
