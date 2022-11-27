import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loding from '../../../Sheared/Loding/Loding';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [advertise, setAdvertise] = useState({})




    const { data: addproducts = [], isLoading, refetch } = useQuery({
        queryKey: ["addproducts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addproduct?email=${user?.email}`)
            const data = await res.json()
            return data
            isLoading()
        }
    })



    if (isLoading) {
        return <Loding></Loding>
    }




    const handledelete = (id) => {
        fetch(`http://localhost:5000/addproduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
            .catch((error) => console.log(error))

    }




    const handleAdvertise = (product) => {


        fetch(`http://localhost:5000/advertise`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('successfully advertise this product')
                }
            })
            .catch(e => console.error(e))
    }






    return (
        <div>



            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto md:w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            addproducts?.map((pro, i) => <tr key={pro._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="w-24 rounded-full">
                                        <img src={pro.img} />
                                    </div>
                                </td>
                                <td>{pro.title}</td>
                                <td>${pro.resale_price}</td>
                                <td><button className='btn btn-xs  bg-gradient-to-r from-pink-500 to-pink-500'>Available</button></td>
                                <td><button onClick={() => handleAdvertise(pro)}
                                    className='btn btn-xs btn-primary'>Advertise</button></td>
                                <td><button onClick={() => handledelete(pro._id)} className='btn btn-xs  bg-gradient-to-r from-purple-500 to-pink-600'>Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default MyProduct;