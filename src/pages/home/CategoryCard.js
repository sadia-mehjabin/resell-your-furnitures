import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
    const categories = ['BedRoom', 'Kitchen', 'Dinning']

    return (
        <div className='grid lg:grid-cols-3 gap-7 m-3 '>
            {
                categories.map(category => <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body bg-red-100 rounded-2xl">
                        <h2 className='text-center text-3xl font-bold m-2'>{category}</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/displayProduct/${category}`}>
                            <button className="btn btn-success px-3">See All</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CategoryCard;