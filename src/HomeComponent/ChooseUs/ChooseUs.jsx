import choose1 from "../../assets/icons/group.svg";
import choose2 from "../../assets/icons/quote.svg";
import choose3 from "../../assets/icons/person.svg";
import choose4 from "../../assets/icons/Wrench.svg";
import choose5 from "../../assets/icons/check.svg";
import choose6 from "../../assets/icons/timely.svg";
const ChooseUs = () => {
  return (
    <div className="mb-10">
      <p className="text-center text-red-500 font-semibold">Core Features</p>
      <h1 className="text-center font-semibold text-4xl">Why Choose Us</h1>
      <p className="text-center my-2 text-gray-400">
        the majority have suffered alteration in some form, by injected humour,
        <br></br> or random words which do not look even slightly believable.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-7">
        <div className="space-y-1 p-4 border-2 pb-0 rounded-lg text-center mx-2 lg:mx-0">
          <img src={choose1} className="rounded-lg w-7 mx-auto" alt="" />
          <h1 className="font-semibold text-xl">Expert Team</h1>
        </div>
        <div className="space-y-1 p-4 border-2 pb-0 rounded-lg text-center mx-2 lg:mx-0">
          <img src={choose2} className="rounded-lg w-7 mx-auto" alt="" />
          <h1 className="font-semibold text-xl">Note Delivery</h1>
        </div>
        <div className="space-y-1 p-4 border-2 pb-0 rounded-lg text-center mx-2 lg:mx-0">
          <img src={choose3} className="rounded-lg w-7 mx-auto" alt="" />
          <h1 className="font-semibold text-xl">24/7 Support</h1>
        </div>
        <div className="space-y-1 p-4 border-2 pb-0 rounded-lg text-center mx-2 lg:mx-0">
          <img src={choose4} className="rounded-lg w-7 mx-auto" alt="" />
          <h1 className="font-semibold text-xl">Best Equipment</h1>
        </div>
        <div className="space-y-1 p-4 border-2 pb-0 rounded-lg text-center mx-2 lg:mx-0">
          <img src={choose5} className="rounded-lg w-7 mx-auto" alt="" />
          <h1 className="font-semibold text-xl">100% Guarantee</h1>
        </div>
        <div className="space-y-1 p-4 border-2 pb-0 rounded-lg text-center mx-2 lg:mx-0">
          <img src={choose6} className="rounded-lg w-7 mx-auto" alt="" />
          <h1 className="font-semibold text-xl">Timely Delivery</h1>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
