import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductOverview from "../ProductOverview/ProductOverview";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ProductInfo></ProductInfo>
            <Featured></Featured>
            <ProductOverview></ProductOverview>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;