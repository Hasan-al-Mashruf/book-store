import React from 'react';
import { Link } from 'react-router-dom';

const SignupModal = ({ getData }) => {
    const signupData = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        getData(name, email, password)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form action="" onSubmit={signupData}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='name' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" name='password' />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" htmlFor="my-modal" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;