import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Catagori2 from './Catagori2';



const Catagori = () => {



    const {data:catagoris=[], refetch, isLoading}=useQuery({
        queryKey:['catagoris'],
        queryFn: async ()=>{
            const res= await fetch('http://localhost:5000/catagoris')
            const result=await res.json()
            return result
        }
    })


    return (
        <div className='mt-20'>
            <h1>Tree catagoriss {catagoris.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                catagoris.map((catagori)=> <Catagori2
                key={catagori._id}
                catagory={catagori}
                ></Catagori2>)
            }
            </div>
        </div>
    );
};


export default Catagori;
