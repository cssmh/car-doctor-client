import customer from "../../assets/images/momen_1mb.png";
import quote from "../../assets/icons/quote.svg";
const Customer = () => {
  return (
    <div className="mb-10">
      <p className="text-center text-red-500 font-semibold">Testimonial</p>
      <h1 className="text-center font-semibold text-4xl">What Customer Says</h1>
      <p className="text-center my-2 text-gray-400">
        the majority have suffered alteration in some form, by injected humour,
        <br></br> or random words which do not look even slightly believable.
      </p>
      <div className="flex flex-col lg:flex-row justify-center mt-9 gap-6 mx-2 lg:mx-0">
        <div className="p-10 border border-gray-300 rounded-lg">
          <div data-aos="zoom-in" className="flex justify-between items-center">
            <div className="flex items-center gap-4 mb-2">
              <img src={customer} className="w-12 rounded-3xl" alt="" />
              <div>
                <h1 className="font-semibold">Md. Momin Hossain</h1>
                <p>Businessman</p>
              </div>
            </div>
            <img src={quote} className="w-9" alt="" />
          </div>
          <p className="w-4/5 text-gray-500 mb-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="p-10 border border-gray-300 rounded-lg">
          <div data-aos="zoom-in" className="flex justify-between items-center">
            <div className="flex items-center gap-4 mb-2">
              <img src={customer} className="w-12 rounded-3xl" alt="" />
              <div>
                <h1 className="font-semibold">Md. Momin Hossain</h1>
                <p>Businessman</p>
              </div>
            </div>
            <img src={quote} className="w-9" alt="" />
          </div>
          <p className="w-4/5 text-gray-500 mb-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
