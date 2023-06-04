import React from 'react';
import Adverticepro from '../Adverticepro/Adverticepro';
import Bannar from '../Bannar/Bannar';
import Banner from '../Banner/Banner';
import Catagori from '../Catagori/Catagori';
import Offer from '../Offer/Offer';
import Work from '../Work/Work';
import Customer from '../Customer/Customer';
import LetestedCar from '../LetestedCar/LetestedCar';
import PopularCars from '../PopularCars/PopularCars';
import BestSellersCars from './BestSellersCars/BestSellersCars';
import AvailableProdcuts from '../AvailableProducts/AvailableProdcuts';
import BroweType from '../BroweType/BroweType';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Catagori></Catagori>
           <Adverticepro></Adverticepro>
           
           <Work></Work>
           <Customer></Customer>
           <LetestedCar></LetestedCar>
           <AboutUs></AboutUs>
           <PopularCars></PopularCars>
           <BestSellersCars></BestSellersCars>
           <BroweType></BroweType>
           <AvailableProdcuts></AvailableProdcuts>
           <Offer></Offer>
        </div>
    );
};

export default Home;