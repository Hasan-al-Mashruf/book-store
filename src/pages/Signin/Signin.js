import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import background from "../../assets/3.jpg";
import { AuthContext } from '../../context/AuthProvider';

const Signin = () => {
    const { user, loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const signinData = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                toast.success(`${user?.displayName} is login`)
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => console.error(error));
    }
    return (
        <div>
            <div>
                <div className='h-[25vh] bg-top bg-cover bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
                    <div className='bg-gradient-to-r from-[#00000085] to-[#000000de] h-full'>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={signinData} className='md:w-2/3 mx-auto border p-5 mt-5'>
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
    );
};

export default Signin;