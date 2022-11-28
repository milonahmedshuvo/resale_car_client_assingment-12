import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Catagori2 from './Catagori2';



const Catagori = () => {



    const {data:catagoris=[], refetch, isLoading}=useQuery({
        queryKey:['catagoris'],
        queryFn: async ()=>{
            const res= await fetch('https://react-assignment-server-12.vercel.app/catagoris')
            const result=await res.json()
            return result
        }
    })


    return (
        <div className='mt-20'>
            <h1 className='text-teal-400 font-bold font-serif text-5xl text-center mt-4 mb-4 '> Car Catagoris {catagoris.length}</h1>

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
