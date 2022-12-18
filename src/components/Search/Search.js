import React from 'react';

const Search = () => {
    return (
        <div className='bg-gray-600 md:py-8 py-4'>
            <form action="" className='grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 md:px-12 px-5'>
                <input type="text" placeholder="Search a book" className="input input-bordered" />
                <input type="text" placeholder="Writer's name" className="input input-bordered" />
                <input type="text" placeholder="Publications" className="input input-bordered" />
                <input type="submit" className="btn btn-warning w-full" value='Submit' />
            </form>
        </div>
    );
};

export default Search;