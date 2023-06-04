import React from 'react';
import Adverticepro from '../Adverticepro/Adverticepro';
import Bannar from '../Bannar/Bannar';
import Banner from '../Banner/Banner';
import Catagori from '../Catagori/Catagori';
import Offer from '../Offer/Offer';
import Work from '../Work/Work';
import Customer from '../Customer/Customer';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Catagori></Catagori>
           <Adverticepro></Adverticepro>
           <Offer></Offer>
           <Work></Work>
           <Customer></Customer>
        </div>
    );
};

export default Home;