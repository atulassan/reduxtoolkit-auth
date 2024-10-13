import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from "../Components/Templates/Header";
import Footer from "../Components/Templates/Footer";

// Show the component only when the user is logged in
// Otherwise, redirect the user to /signin page

const PrivateRoute = ({children}) => {

    //console.log(useSelector(state => state.client));
    const {isAuthorized, user} = useSelector(state => state.auth);
    console.log(isAuthorized, user);

    return (
        <Fragment>
            <Header />
                {/*<Route {...rest} render={ props => (
                    isAuthorized ?
                        <Component {...props} />
                    : <Navigate to="/login" />
                ) } /> */ }
               { isAuthorized ? children : <Navigate to="/login" /> } 
            <Footer />
        </Fragment>
    );
};

export default PrivateRoute;