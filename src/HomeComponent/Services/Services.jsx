import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <p className="text-center text-red-500 font-semibold">Service</p>
      <h1 className="text-center font-semibold text-4xl">Our Service Area</h1>
      <p className="text-center my-2 text-gray-400">
        the majority have suffered alteration in some form, by injected humour,
        or random<br></br> words which do not look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {services.map((data) => (
          <ServiceCard key={data._id} getService={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
