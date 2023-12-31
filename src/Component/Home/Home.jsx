import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductOverview from "../ProductOverview/ProductOverview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ProductInfo></ProductInfo>
            <Featured></Featured>
            <ProductOverview></ProductOverview>
        </div>
    );
};

export default Home;