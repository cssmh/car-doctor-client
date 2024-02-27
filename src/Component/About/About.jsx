import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const About = () => {
  return (
    <div className="text-center">
      <Skeleton variant="rectangular" width={1220} height={70} />
      <Skeleton variant="rounded" width={1220} height={70} />
    </div>
  );
};

export default About;
