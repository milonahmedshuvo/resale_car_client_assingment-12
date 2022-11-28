import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const Login = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const {singIn, googleUser}=useContext(AuthContext)
    const [errorMessage, setErrorMessage]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    

    





    const handleLogin=(data)=>{
        console.log(data)
        singIn(data.email, data.password)
        .then((res)=>{
            console.log(res.user)
            toast.success("Successful Login")
            navigate(from, {replace:true})
        })
        .catch((error)=>{
            const errorMessage = error.message
            setErrorMessage(errorMessage)
        toast.error('Sorry! Login Field')
        }
        )
    }




    return (
        <div>
            <div className="flex justify-center items-center mt-16 ">


                <div className="w-96 ">
                    <h1 className="font-bold text-success text-center">Login Form</h1>

                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Email</span> </label>
                            <input type='text' {...register("email", {
                                required: "Your Email not Valided, plase try again",
                            })} placeholder="Your Email" className="input input-bordered" />

                            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
                        </div>


                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Password</span> </label>
                            <input type='password' {...register("password", {
                                required: 'your simple validation error paasword',
                                minLength: { value: 6, message: 'your low crerector code' },
                                maxLength: { value: 10, message: 'your code hight' }
                            })} placeholder="Your Password" className="input input-bordered" />

                            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
                        </div>




                        <input type="submit" value='Login' className="btn btn-success text-white font-bold w-full mt-4 mb-4" />

                          {
                            errorMessage && <p className='text-red-500 font-bold'>{errorMessage}</p>
                          }

                    </form>
                    <p className="mt-2 font-serif">New to Resale Car Website?<Link to='/singup' className="text-secondary ml-2">Create new account</Link> </p>
                   

                    


                </div>
            </div>
        </div>
    );
};

export default Login;