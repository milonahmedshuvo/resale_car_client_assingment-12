import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';




const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const date = new Date()
    const dd = date.getDate()
    const mm = date.getMonth()
    const yy = date.getFullYear()

    const time = `${dd}-${mm}-${yy}`





    const handleAddCarProduct = (data, event) => {
        
        const name = event.target.name.value

        const setAddproduct = {
            resale_price: data.resale,
            orginal_price: data.orginal,
            time,
            email: user.email,
            catagori: data.catagori,
            name,
            title: data.title,
            location: data.location,
            year: data.year,
            condition: data.condition,
            img: data.img
        }

     console.log(setAddproduct)



        fetch(`https://react-assignment-server-12.vercel.app/addproduct`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(setAddproduct)
           })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch((error)=>console.log(error))









        fetch(`https://react-assignment-server-12.vercel.app/anyname`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(setAddproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('sucessfully added your product')
                    event.target.reset()
                    navigate('/dashbord/myproducts')
                }
            })
            .catch((error)=>console.log(error))

    }









    const { data: catagoris = [], isLoading, refetch } = useQuery({
        queryKey: ['catagoris'],
        queryFn: async () => {
            const res = await fetch('https://react-assignment-server-12.vercel.app/catagoris')
            const data = res.json()
            return data
        }
    })


    return (
        <div>
            <h1 className="text-2xl font-bold text-pink-600 text-center my-5">Add A Product</h1>
            <div className='w-3/5 mx-auto shadow-lg bg-fuchsia-100 rounded'>
                <form onSubmit={handleSubmit(handleAddCarProduct)} className="card-body">






                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Product Name</span>
                        <input type="text" {...register("title")} placeholder="Product Name" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Image Url</span>
                        <input type="text" {...register("img")} placeholder="img url" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Resale Price</span>
                        <input type="text" {...register("resale")} placeholder="resale_price" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Orginal price</span>
                        <input type="text" {...register("orginal")} placeholder="orginal price" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Phone</span>
                        <input type="text" {...register("phone")} placeholder="phone" className="input input-bordered" />
                    </label>



                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Location</span>
                        <input type="text" {...register("location")} placeholder="location" className="input input-bordered" />
                    </label>



                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Year of use</span>
                        <input type="text" {...register("year")} placeholder="year" className="input input-bordered" />
                    </label>






                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Choose a catagory</span>


                        <select {...register("catagori", { required: true })} className="select select-bordered ">
                            {
                                catagoris?.map((cata) => <option key={cata._id} value={cata.catagori}>{cata.catagori}</option>)
                            }

                        </select>
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Condition</span>
                        <select {...register("condition", { required: true })} className="select select-bordered ">
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>

                        </select>
                    </label>




                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Name</span>
                        <input type="text" name="name" disabled value={user?.displayName} placeholder="name" className="input input-bordered" />
                    </label>



                    <input className=' btn bg-gradient-to-r from-purple-500 to-pink-600' value="Add product" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;