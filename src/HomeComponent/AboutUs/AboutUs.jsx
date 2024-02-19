import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row justify-center">
      <div className="w-1/2 relative">
        <img src={person} className="w-4/5 rounded-lg" alt="" />
        <img src={parts} className="w-2/5 absolute right-16 top-48 border-8 border-white rounded-lg" alt="" />
      </div>
      <div className="w-1/2 space-y-3">
        <p className="text-red-500 font-semibold">About Us</p>
        <h1 className="font-semibold text-4xl">
          We are qualified<br></br> & of experience<br></br> in this field
        </h1>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or random words which do not look even slightly believable.
          <br></br>
          <br></br>
          the majority have suffered alteration in some form, by injected
          humour, or random words which do not look even slightly believable.
        </p>
        <button className="btn bg-red-500 hover:bg-red-500 text-white border-none mr-5">
          Get more Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
