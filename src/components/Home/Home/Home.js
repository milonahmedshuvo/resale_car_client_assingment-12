import React from 'react';
import Adverticepro from '../Adverticepro/Adverticepro';
import Banner from '../Banner/Banner';
import Catagori from '../Catagori/Catagori';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagori></Catagori>
           <Adverticepro></Adverticepro>
        </div>
    );
};

export default Home;