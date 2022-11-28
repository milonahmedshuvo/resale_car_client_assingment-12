import React from 'react';

const Offer = () => {
    return (
        <div>

            <div>
                <p className='font-bold text-success text-2xl'>Latest Offers</p>
                <h1><span className='font-bold text-black text-5xl'>OUR</span> 
                 <span className='font-bold text-yellow-400 text-5xl' >OFFERS</span> </h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6'>



                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-html/HTML/main/img/car/car-6.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Frb, 20 2018</p>
                        <h2 className="card-title">Audi Q7 2018</h2>
                        <p>$ 412000 monthly</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Reed More</button>
                        </div>
                    </div>
                </div>




                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-html/HTML/main/img/car/car-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>April, 30 2016</p>
                        <h2 className="card-title">TOYOTA PRIUS 2018</h2>
                        <p>$ 891000 monthly</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Reed More</button>
                        </div>
                    </div>
                </div>



                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-html/HTML/main/img/car/car-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>March, 26 2021</p>
                        <h2 className="card-title">TOYOTA PRIUS 2021</h2>
                        <p>$ 772000 monthly</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Reed More</button>
                        </div>
                    </div>
                </div>





                


















            </div>


        </div>
    );
};

export default Offer;