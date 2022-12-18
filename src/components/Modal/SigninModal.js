import React from 'react';
import { Link } from 'react-router-dom';

const SigninModal = ({ getSigninData }) => {
    const signinData = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        getSigninData(email, password)
    }
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form action="" onSubmit={signinData}>
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
                            <label className="label">
                                <Link clLinkssName="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" htmlFor="my-modal" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SigninModal;