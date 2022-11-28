import React from 'react';
import Adverticepro from '../Adverticepro/Adverticepro';
import Bannar from '../Bannar/Bannar';
import Banner from '../Banner/Banner';
import Catagori from '../Catagori/Catagori';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Catagori></Catagori>
           <Adverticepro></Adverticepro>
           <Offer></Offer>
        </div>
    );
};

export default Home;