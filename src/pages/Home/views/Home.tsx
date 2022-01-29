import React from 'react';

import { Menu, Header, Features, Footer } from '../../../layout/components/index';
import Slider from './Slider';
import Product from './Product';
import Boxes from './Boxes';
import { setLayoutOptions } from '../../../layout/Layout';

const Home = () => {
    return (
        <>
            <Menu />
            {/* <div className='super_container'>
                <Slider />
                <Header />
                <Product />
                <Boxes />
                <Features />
            </div> */}
        </>
    )
}

setLayoutOptions(Home, {
    title: 'Home'
})
export default Home;