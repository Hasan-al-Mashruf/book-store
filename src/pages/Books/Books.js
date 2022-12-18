import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/3.jpg";
import './Books.css'

const Books = () => {
    const { isLoading, data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: () =>
            fetch('https://book-store-server-theta.vercel.app/books')
                .then(res => res.json())
    })

    if (isLoading) return 'Loading...'
    return (
        <div>
            <div className='h-[42vh] bg-top bg-cover bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
                <div className='bg-gradient-to-r from-[#00000085] to-[#000000de] h-full'>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 px-20 my-10'>
                {
                    books.map(book =>
                        <Link to={`/details/${book._id}`}>
                            <div className="card w-[90%] bg-base-100 border rounded-none py-4">
                                <figure><img src={book.img} alt="Shoes" className='w-[80%] mx-auto h-[40vh] object-cover' /></figure>
                                <div className="card-body py-3">
                                    <h2 className="card-title justify-center">{book.name}</h2>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Books;