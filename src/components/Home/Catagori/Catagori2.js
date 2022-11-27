import React from 'react';
import { Link } from 'react-router-dom';


const Catagori2 = ({ catagory }) => {
    const { catagori, img } = catagory;


    return (
        <div>

            <div className="card  bg-gradient-to-r from-purple-200 to-pink-200">
                <figure className="px-10 pt-10 ">
                    <img src={img} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{catagori}</h2>

                    <div className="card-actions">
                        <Link to={`/catagory/${catagori}`} className="btn  bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">Show more products</Link>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagori2;