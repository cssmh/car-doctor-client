import team1 from "../../assets/images/team/1.jpg";
import team2 from "../../assets/images/team/2.jpg";
import team3 from "../../assets/images/team/3.jpg";
const Team = () => {
  return (
    <div className="mb-10">
      <p className="text-center text-red-500 font-semibold">Team</p>
      <h1 className="text-center font-semibold text-4xl">Meet Our Team</h1>
      <p className="text-center my-2 text-gray-400">
        the majority have suffered alteration in some form, by injected humour,
        <br></br> or random words which do not look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        <div className="space-y-1 p-4 border-2 rounded-lg text-center mx-2 lg:mx-0">
          <img src={team1} data-aos="flip-up" className="rounded-lg" alt="" />
          <h1 className="font-semibold text-xl">Car Engine Plug</h1>
          <p className="font-semibold text-gray-400">Engine Expert</p>
        </div>
        <div className="space-y-1 p-4 border-2 rounded-lg text-center mx-2 lg:mx-0">
          <img src={team2} data-aos="flip-up" className="rounded-lg" alt="" />
          <h1 className="font-semibold text-xl">Car Engine Plug</h1>
          <p className="font-semibold text-gray-400">Engine Expert</p>
        </div>
        <div className="space-y-1 p-4 border-2 rounded-lg text-center mx-2 lg:mx-0">
          <img src={team3} data-aos="flip-up" className="rounded-lg" alt="" />
          <h1 className="font-semibold text-xl">Car Engine Plug</h1>
          <p className="font-semibold text-gray-400">Engine Expert</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
