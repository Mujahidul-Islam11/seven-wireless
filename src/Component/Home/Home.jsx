import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import ProductInfo from "../ProductInfo/ProductInfo";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ProductInfo></ProductInfo>
            <Featured></Featured>
        </div>
    );
};

export default Home;