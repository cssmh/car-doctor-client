const ServiceCard = ({ getService }) => {
  // console.log(getService);
  const { title, price, img } = getService;
  return (
    <div className="space-y-3 p-4 border-2 rounded-lg mx-2 lg:mx-0">
      <img src={img} className="rounded-lg md:h-56" alt="" />
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="font-semibold text-red-500">Price: ${price}</p>
    </div>
  );
};

export default ServiceCard;
