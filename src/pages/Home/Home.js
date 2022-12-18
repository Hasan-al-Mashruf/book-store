import React from 'react';
import Footer from '../../components/Footer/Footer';
import Library from '../../components/Library/Library';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Search from '../../components/Search/Search';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Search></Search>
            <Library></Library>
            <ProductSlider></ProductSlider>
        </div>
    );
};

export default Home;