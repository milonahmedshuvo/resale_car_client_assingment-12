import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';
import ProductModal from './ProductModal';


const Allproduct = () => {
    const [productData, setProductData]=useState({})
    const catagoris = useLoaderData()

    


    

    return (
       <div>
         <div className='grid grid-cols-2 gap-6'>
           {
            catagoris.map((catagori)=><Products
            key={catagori._id}
            catagory={catagori}
            setProductData={setProductData}
            ></Products>)
           }
        </div>



       {
         productData &&   <ProductModal
         productData={productData}
         setProductData={setProductData}
         ></ProductModal>
       }
       </div>


    
    );
};

export default Allproduct;