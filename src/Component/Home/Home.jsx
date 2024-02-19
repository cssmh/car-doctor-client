import AboutUs from "../../HomeComponent/AboutUs/AboutUs";
import Banner from "../../HomeComponent/Banner/Banner";
import Product from "../../HomeComponent/Product/Product";
import Services from "../../HomeComponent/Services/Services";
import Team from "../../HomeComponent/Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;