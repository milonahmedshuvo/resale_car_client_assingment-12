import React from 'react';

const Offer = () => {
    return (
        <div>

            <div className='my-32 ml-6'>
                <p className='font-bold text-success text-2xl mb-4'>Latest Offers</p>
                <h1><span className='font-bold text-black text-5xl'>OUR</span> 
                 <span className='font-bold text-yellow-400 text-5xl' >OFFERS</span> </h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6'>



                <div className="card card-compact ">
                    
                    <figure><img src="https://templatekits.themewarrior.com/cardealerz/wp-content/uploads/sites/26/elementor/thumbs/carlist3-pahczz7ghfyre6005l9orboxp6uy22hxiiqj82lcwq.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-violet-600 font-bold font-serif'>Frb, 20 2018</p>
                        <h2 className="card-title font-bold">Audi Q7 2018</h2>
                        <p className='text-yellow-500 font-mono font-bold '>$ 412000 monthly</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Reed More</button>
                        </div>
                    </div>
                </div>




                <div className="card card-compact  bg-base-100 ">
                    <figure><img src="https://templatekits.themewarrior.com/cardealerz/wp-content/uploads/sites/26/elementor/thumbs/carlist4-pahczy9malxh2k1db2v26txh3szkude76e31qsmr2y.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-fuchsia-500 font-bold font-serif' >April, 30 2016</p>
                        <h2 className="card-title font-bold">TOYOTA PRIUS 2018</h2>
                        <p className='text-yellow-500 font-mono font-bold '>$ 891000 monthly</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Reed More</button>
                        </div>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 ">
                    <figure><img src="https://templatekits.themewarrior.com/cardealerz/wp-content/uploads/sites/26/elementor/thumbs/carlist5-pahczxbs3rw6qy2qgkgfmc60if47moagu9fk9io596.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-indigo-500 font-bold font-serif'>March, 26 2021</p>
                        <h2 className="card-title font-bold">TOYOTA PRIUS 2021</h2>
                        <p className='text-yellow-500 font-mono font-bold '>$ 772000 monthly</p>
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