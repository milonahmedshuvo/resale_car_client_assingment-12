import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loding from '../../../Sheared/Loding/Loding';





const MyOrder = () => {
  const { user } = useContext(AuthContext)


  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://react-assignment-server-12.vercel.app/productBooking?email=${user?.email}`)
      const data = await res.json()
      return data
      isLoading()
    }
  })



  if (isLoading){
    return <Loding></Loding>
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
              <th>Option</th>

            </tr>
          </thead>
          <tbody>

            {
              bookings.map((book, i) => <tr key={book._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="w-24 rounded-full">
                    <img src={book.img} />
                  </div>
                </td>
                <td>{book.title}</td>
                <td>${book.price}</td>
                <td><button className='btn btn-xs  bg-gradient-to-r from-purple-500 to-pink-600'>Pay</button></td>

              </tr>)
            }


          </tbody>
        </table>
      </div>








    </div>
  );
};

export default MyOrder;






