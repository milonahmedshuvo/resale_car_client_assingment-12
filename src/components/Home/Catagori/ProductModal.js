import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';




const ProductModal = ({ productData, setProductData }) => {
    const { user } = useContext(AuthContext)

    const { catagori, resale_price, img } = productData;

    const handleModalForm = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const userName = event.target.userName.value;
        const productName = event.target.productName.value;
        const price = event.target.price.value;
        const phoneNumber = event.target.phoneNumber.value;
        const location = event.target.location.value;

        console.log("email" + email, userName, productName, price, phoneNumber, location)

        const productInfo = {
            email,
            userName,
            productName,
            price,
            phoneNumber,
            location,
            img
        }
        console.log(productInfo)


        fetch('https://react-assignment-server-12.vercel.app/productBooking', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Succeful Booked this product')
                    console.log(data)
                    setProductData(null)
                }
            })
            .catch((error) => console.log(error))

    }




    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="catagori-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="catagori-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>


                    <form onSubmit={handleModalForm}>

                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered w-full mt-2" />
                        <input type="text" name='userName' defaultValue={user?.displayName}
                            disabled placeholder="Type here" className="input input-bordered w-full mt-2" />

                        <input type="text" name='productName' defaultValue={catagori}
                            disabled className="input input-bordered w-full mt-2" />
                        <input type="text" name='price' defaultValue={resale_price} disabled className="input input-bordered w-full mt-2" />

                        <input type="text" name='phoneNumber' placeholder="Type Your Phone Number" className="input input-bordered w-full mt-2" />
                        <input type="text" name='location' placeholder="Type Your Location" className="input input-bordered w-full mt-2" />

                        <div>
                            <button type='submit' className='btn btn-success mt-4 w-full'>Submit</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
};


export default ProductModal;



