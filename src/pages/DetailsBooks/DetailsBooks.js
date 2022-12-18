import React from 'react';
import { useLoaderData } from 'react-router-dom';
import background from "../../assets/3.jpg";
import { AiOutlineStar } from 'react-icons/ai';

const DetailsBooks = () => {
    const detailsBooks = useLoaderData()
    console.log(detailsBooks)
    return (
        <div>
            <div className='h-[25vh] bg-top bg-cover bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
                <div className='bg-gradient-to-r from-[#00000085] to-[#000000de] h-full'>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-5 px-20 mt-8'>
                {
                    detailsBooks.map(detail => <>
                        <div>
                            <img src={detail.img} alt="" />
                        </div>
                        <div className='col-span-3'>
                            <h2 className='text-4xl'><span className='font-bold'>{detail.name}</span> - {detail.title}</h2>
                            <div className='grid grid-cols-2 gap-4 mt-5 text-gray-500'>
                                <div>
                                    <h4>ISBN: {detail.ISBN}</h4>
                                    <h4>Author: {detail.writer}</h4>
                                    <h4>Edition: {detail.Edition}</h4>
                                    <h4>Format: {detail.Format}</h4>
                                </div>
                                <div>
                                    <h4>Publisher: {detail.Publisher}</h4>
                                    <h4>Relesed: {detail.relesed}</h4>
                                    <h4>Price: ${detail.price}</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-warning text-white">DOWNLOAD PDF</button>
                            <div className='flex mt-3'>
                                <AiOutlineStar className='text-3xl' /><AiOutlineStar className='text-3xl' /><AiOutlineStar className='text-3xl' /><AiOutlineStar className='text-3xl' /><AiOutlineStar className='text-3xl' />
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default DetailsBooks;