import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleAdvertice from './SingleAdvertice'
const Adverticepro = () => {


    const {data: advertise= []} = useQuery({
        queryKey: ['advertise'],
        queryFn: async()=>{
            const res = await fetch('https://react-assignment-server-12.vercel.app/advertise')
            const data = await res.json()
            return data
        }
    })

    if(advertise.length){
        return (
            <div>

                <h1 className="text-center text-3xl my-10 font-bold">Advertise Products</h1>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                {
                    advertise?.map(ad => <SingleAdvertice
                    key={ad._id}
                    ad={ad}
                    ></SingleAdvertice> )
                }
                </div>
                
            </div>
        );
    }
   
};

export default Adverticepro;