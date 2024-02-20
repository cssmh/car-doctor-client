import checkout from "../../assets/images/checkout/checkout.png";
const CheckBanner = () => {
  return (
    <div
      className="hero min-h-[30vh]"
      style={{
        backgroundImage: `url(${checkout})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-white">
        <div className="">
          <h1 className="text-3xl font-semibold">Check Out</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckBanner;
