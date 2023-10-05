import { useContext } from "react";
import  { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContex)
    const location= useLocation()
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-infinity text-red-700 loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}