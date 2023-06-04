import React from 'react'

const AboutUs = () => {



  return (
    <div className='flex flex-col md:flex-row  my-44'>
        

        <div className=' w-full flex items-center  '>


           <div className='ml-20 mr-10'>
           <p className='text-xl uppercase font-bold text-blue-400' >About US</p>

            <h2 className='text-5xl  my-6 tracking-tighter'>We Are The Solution For Your Car</h2>
               < p className='mt-14 '>Sit maecenas tristique faucibus egestas in. Pharetra integer venenatis curabitur quisque adipiscing curabitur viverra et est. Tortor porttitor curs ultrices nulla dolor. Amet, sed massa, placerat duis fringilla vitae etiam arcu nibh. Faucibus eget sed adipiscing ultrices urna. Lacus.</p>



                  <p className='mt-8 '>
                   Suspendisse morbi mauris gravida tellus integer egestas ucibus tellus inut condimentum blandit mus auctor nulla lacus velit suspendisse.
                 </p>


                  <p className='text-white bg-pink-500 font-bold rounded w-full md:w-3/12 py-2 text-center px-3 my-8'>Reed More</p>
           </div>
        </div>





        <div className='w-full ' >
            <img src="https://templatekits.themewarrior.com/cardealerz/wp-content/uploads/sites/26/2021/07/abour-sect-800x566.jpg" alt="" />
        </div>
    </div>
  )
}

export default AboutUs
