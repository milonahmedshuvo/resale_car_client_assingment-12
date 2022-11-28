import React from 'react';
import Adverticepro from '../Adverticepro/Adverticepro';
import Banner from '../Banner/Banner';
import Catagori from '../Catagori/Catagori';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagori></Catagori>
           <Adverticepro></Adverticepro>
           <Offer></Offer>
        </div>
    );
};

export default Home;