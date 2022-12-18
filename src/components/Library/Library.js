import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';
import { ImNewspaper } from 'react-icons/im';

const Library = () => {
    return (
        <div>
            <div className='text-center py-16'>
                <h2 className='text-4xl'>Welcome to the librabry</h2>
                <p>Welcome to the Most Popular Library Today</p>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 md:mx-16'>
                <div className="card card-compact">
                    <div className='border w-[max-content] p-4 mx-auto'>
                        <MdLibraryBooks className='text-4xl' />
                    </div>
                    <div className="card-body border-b-2">
                        <h2 className="card-title justify-center">Shoes!</h2>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-link text-black no-underline">Read More</button>
                    </div>
                </div>
                <div className="card card-compact">
                    <div className='border w-[max-content] p-4 mx-auto'>
                        <MdLibraryBooks className='text-4xl' />
                    </div>
                    <div className="card-body border-b-2">
                        <h2 className="card-title justify-center">Shoes!</h2>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-link text-black no-underline">Read More</button>
                    </div>
                </div>
                <div className="card card-compact">
                    <div className='border w-[max-content] p-4 mx-auto'>
                        <ImNewspaper className='text-4xl' />
                    </div>
                    <div className="card-body border-b-2">
                        <h2 className="card-title justify-center">Shoes!</h2>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-link text-black no-underline">Read More</button>
                    </div>
                </div>
                <div className="card card-compact">
                    <div className='border w-[max-content] p-4 mx-auto'>
                        <MdLibraryBooks className='text-4xl' />
                    </div>
                    <div className="card-body border-b-2">
                        <h2 className="card-title justify-center">Shoes!</h2>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-link text-black no-underline">Read More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Library;