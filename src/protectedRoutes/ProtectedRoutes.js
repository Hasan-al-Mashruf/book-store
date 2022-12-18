import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const ProtectedRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if (loader) {
        return 'Loading'
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoutes;