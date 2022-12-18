import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
const AdminDash = () => {
    const newBookData = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const title = form.title.value
        const isbn = form.isbn.value
        const img = form.image.value
        const relesed = form.relesed.value
        const edition = form.edition.value
        const format = form.format.value
        const publisher = form.publisher.value
        const writer = form.author.value
        const newBook = {
            name, title, isbn, writer, img, relesed, format, edition, publisher
        }
        console.log(newBook)
        fetch('https://book-store-server-theta.vercel.app/books', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success(`${name} book is added`)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <form action="" onSubmit={newBookData}>
                <div className='flex ml-3'>
                    <div className='mr-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name='name' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="title" className="input input-bordered" name='title' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ISBN</span>
                            </label>
                            <input type="text" placeholder="ISBN" className="input input-bordered" name='isbn' />
                        </div>

                    </div>
                    <div className='mr-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Format</span>
                            </label>
                            <input type="text" placeholder="Format" className="input input-bordered" name='format' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Relesed Date</span>
                            </label>
                            <input type="date" className="input input-bordered" name='relesed' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Publisher</span>
                            </label>
                            <input type="text" placeholder="Publisher" className="input input-bordered" name='publisher' />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input type="text" placeholder="Author" className="input input-bordered" name='author' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Edition</span>
                            </label>
                            <input type="text" placeholder="Edition" className="input input-bordered" name='edition' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image link</span>
                            </label>
                            <input type="text" className="input input-bordered" name='image' />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" htmlFor="my-modal" />
                        </div>
                    </div>
                </div>



            </form>
            <Toaster />
        </div>
    );
};

export default AdminDash;