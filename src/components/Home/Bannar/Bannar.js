import React from 'react';



const Bannar = () => {


    return (
        <div className='rounded-lg'>
            <div className="hero  h-96" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-html/HTML/main/img/car/car-1.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold"> Buy Used Cars At Best Price </h1>
                        <p className="mb-5">Confused? Easy way to compare cars
                        </p>
                        <button className="btn btn-primary">View all cars</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bannar;