import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthProvider';
import SigninModal from '../Modal/SigninModal';
import SignupModal from '../Modal/SignupModal';
import toast, { Toaster } from 'react-hot-toast';
import Slider from '../Slider/Slider';
const Header = () => {
    const [showLogin, setShowLogin] = useState(null)
    const [showRegister, setShowRegister] = useState(null)
    const { user, createUser, updateName, loginUser, logOutuser } = useContext(AuthContext)

    const getData = (name, email, password) => {
        console.log(name, email, password)
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                updateName(name)
                toast.success(`${name} is registered`)
                setShowRegister(null)
                // ...

            })
            .catch((error) => console.error(error));
    }

    const getSigninData = (email, password) => {
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                toast.success(`${user?.displayName} is login`)
                setShowLogin(null)
                // ...
            })
            .catch((error) => console.error(error));
    }

    const navigations =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link>Linkbout us</Link></li>
            <li><Link to='/books'>Our Books</Link></li>
            <li><Link>Authors</Link></li>
            <li><Link>Reviews</Link></li>
            <li><Link to='/dashboard/adminDashboard'>Dashboard</Link></li>
            {
                user?.displayName && <li> Hellow, {user?.displayName}</li>
            }
        </>
    return (
        <div className='md:absolute md:w-4/5 mx-auto top-0 z-10 left-[10%]'>
            <div className='flex items-center bg-yellow-700 '>
                <div className='md:ml-5 px-3'>
                    <img src={logo} alt="" className='md:mr-20 w-[225px] md:w-auto' />
                </div>
                <div className='text-white w-full md:pl-5'>
                    <div className='flex justify-between w-full py-1'>
                        <h2>Welcome to my project</h2>
                        <div className='pr-2'>
                            <h2 className='md:block hidden'>mashruf125@gmail.com</h2>
                        </div>
                    </div>
                    <div className='bg-white text-black py-4 navbar'>
                        <div className="navbar-start md:hidden w-full justify-end">
                            <div className="dropdown">
                                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                                    {navigations}
                                    {
                                        user?.displayName ?
                                            <>
                                                <li><label htmlFor="my-modal" className='btn' onClick={logOutuser}>Signout</label></li>
                                            </>
                                            :
                                            <>
                                                <li><label htmlFor="my-modal" className='btn btn-sm' onClick={() => setShowLogin(true)}>Signin</label></li>
                                                <li><label htmlFor="my-modal" className='btn btn-sm md:ml-2 mt-1 text-white' onClick={() => setShowRegister(true)}>Signup</label></li>
                                            </>
                                    }
                                </ul>
                            </div>
                            <a className="btn btn-ghost normal-case text-xl hidden">daisyUI</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0 items-center">
                                {navigations}
                            </ul>
                        </div>
                        <div className="navbar-end md:flex hidden">
                            {
                                user?.displayName ?
                                    <>
                                        <label htmlFor="my-modal" className='btn' onClick={logOutuser}>Signout</label>
                                    </>
                                    :
                                    <>
                                        <label htmlFor="my-modal" className='btn btn-sm' onClick={() => setShowLogin(true)}>Signin</label>
                                        <label htmlFor="my-modal" className='btn btn-sm ml-2 text-white' onClick={() => setShowRegister(true)}>Signup</label>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                {
                    showLogin && <SigninModal getSigninData={getSigninData} />
                }
                {
                    showRegister && <SignupModal getData={getData} />
                }

            </div >
            <Toaster />
        </div >
    );
};

export default Header;