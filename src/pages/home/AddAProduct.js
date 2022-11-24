import React from 'react';

const AddAProduct = () => {
    return (
        <div className='bg-gray-100 w-96 mx-auto p-5'>
            <h2 className='text-5xl font-bold my-4'>Add A Product</h2>
            <form>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full my-3 p-3" /> <br />
            <input type="text" placeholder="Original Price" className="input input-bordered w-full my-3 p-3" /> <br />
            <input type="text" placeholder="Resale Price" className="input input-bordered w-full my-3 p-3" /> <br />
            <select className="select w-full my-3">
                <option disabled selected>Condition</option>
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
            </select>
            <input type="text" placeholder="sellers name" className="input input-bordered w-full my-3 p-3" /> <br />
            <input type="number" placeholder="Mobile number" className="input input-bordered w-full my-3 p-3" /> <br />
            <input type="text" placeholder="Location" className="input input-bordered w-full my-3 p-3" /> <br />
            <input type="text" placeholder="Years of Use" className="input input-bordered w-full my-3 p-3" /> <br />
            <select className="select w-full my-3">
                <option disabled selected>Category Name</option>
                <option>BedRoom</option>
                <option>Kitchen</option>
                <option>Dining</option>
            </select>
            <textarea className="textarea input-bordered w-full my-3 p-3" placeholder="Description"></textarea>
            </form>
        </div>
    );
};

export default AddAProduct;