import React from 'react'

const PopularCars = () => {
  return (
    <div>
      



      <div className='my-32'>
      
          <h1 className='text-5xl my-10 ml-4 '>Popular Cars</h1>




          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>


          <div className='ml-4'>
            <img
            className='w-full h-[304px]'  
            src="https://smartdata.tonytemplates.com/caleader-v2/wp-content/uploads/2018/10/media02-img-02-1.jpg" alt="" />

            <h4 className='text-2xl my-5 uppercase '>Mercedes-Benz</h4>
          
          </div>



          <div>
            <img
            className='w-full h-[304px]' 
            src="https://smartdata.tonytemplates.com/caleader-v2/wp-content/uploads/2018/10/media02-img-04-1.jpg" alt="" />

            <h4 className='text-2xl my-5 uppercase'> Hyundai </h4>
            
          </div>



          <div>
            <img
            className='w-full h-[304px]'  
            src="https://smartdata.tonytemplates.com/caleader-v2/wp-content/uploads/2018/10/media02-img-03-1.jpg" alt="" />

            <h4 className='text-2xl my-5 uppercase '>Toyota</h4>
           
          </div>


          </div>

      

    </div>





    </div>
  )
}

export default PopularCars
