import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import authHeader from '../redux/auth/authHeader';

const useAuth = () => {
    const isAuthenticated = authHeader();
    if (isAuthenticated !== null) {
        return true;
    }
}

const Protected = () => {
 const auth = useAuth();

 return auth ? <Outlet/> : <Navigate to="/login"/>
}

export default Protected