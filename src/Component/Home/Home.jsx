import AboutUs from "../../HomeComponent/AboutUs/AboutUs";
import Banner from "../../HomeComponent/Banner/Banner";
import ChooseUs from "../../HomeComponent/ChooseUs/ChooseUs";
import Contact from "../../HomeComponent/Contact/Contact";
import Customer from "../../HomeComponent/Customer/Customer";
import Product from "../../HomeComponent/Product/Product";
import Services from "../../HomeComponent/Services/Services";
import Team from "../../HomeComponent/Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Contact></Contact>
      <Product></Product>
      <Team></Team>
      <ChooseUs></ChooseUs>
      <Customer></Customer>
    </div>
  );
};

export default Home;