import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';



const Singup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, createUser, googleUser, profileUpdate } = useContext(AuthContext)



    const handleGoogle = () => {
        const providerr = new GoogleAuthProvider();
        googleUser(providerr)
            .then((res) => {
                console.log(res)
                const saveuser = {
                    name: user.displayName,
                    email: user.email,
                    role: 'Buyer',
                    status: "unverified"
                }
                handleSaveuser(saveuser)

                toast.success('Successful Google Singup')

            })
            .catch((error) => console.log(error))
    }



    const handleSingUp = (data) => {
       



        createUser(data.email, data.password)
            .then((res) => {
                const user=res.user

                const saveuser = {
                    name: data.name,
                    role: data.category,
                    email: user.email,
                    phone: data.phone,
                    status: "unverified"
                }

                handleSaveuser(saveuser)
                toast.success('Successful Create')

                const objInfo = {
                    displayName: data.name
                }
                profileUpdate(objInfo)
                    .then((res) => {
                        toast.success('Update User Success')
                    })
                    .catch((error) => {
                        console.log(error)
                        toast.error("Field Update User")
                    })
            })
            .catch((err) => console.log(err))
    }




    const handleSaveuser = (saveuser) => {
        fetch(`http://localhost:5000/singupUsers`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(saveuser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(e => console.error(e))
    }






    return (
        <div className="flex justify-center items-center mt-16 ">


            <div className="w-96">
                <h1 className="font-bold text-center text-fuchsia-500 ">Singup Form</h1>

                <form onSubmit={handleSubmit(handleSingUp)}>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input type='text' {...register("name", {
                            required: 'Your user name not avaiable',
                        })} placeholder="Your Name" className="input input-bordered" />

                        {errors.userName && <span className='text-red-600'>{errors.userName.message}</span>}

                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='text' {...register("email", {
                            required: 'Your email simple errors',
                        })} placeholder="Your Email" className="input input-bordered" />

                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </div>


                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='password' {...register("password", {
                            required: 'No crerector password',
                            minLength: { value: 6, message: 'your password length 6 longer' },
                            maxLength: { value: 15, message: 'your password hight' }
                        })} placeholder="Your Password" className="input input-bordered" />

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>



                    <label className="flex flex-col mb-6">
                        <span className="label-text mb-2 font-serif mt-2">Choose a catagory</span>
                        <select {...register("category", { required: true })} className="select select-bordered ">
                            <option>Buyer</option>
                            <option>Seller</option>

                        </select>
                    </label>



                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Phone Number</span> </label>
                        <input type='text' {...register("phone", {
                            required: 'Your user name not avaiable',
                        })} placeholder="Your Name" className="input input-bordered" />

                        {errors.phone && <span className='text-red-600'>{errors.phone.message}</span>}

                    </div>



                    <input type="submit" value='Singup' className="btn w-full mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none" />
                </form>
                <p className="mt-2 font-serif">New to Resale Car?<Link to='/login' className="text-secondary">Already have an account</Link> </p>
                <div className="divider">OR</div>

                <button onClick={handleGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>


            </div>
        </div>
    );
};




export default Singup;