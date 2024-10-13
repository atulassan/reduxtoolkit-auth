import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Header from "../Components/Templates/Header";
import Footer from "../Components/Templates/Footer";

// restricted = false meaning public route
// restricted = true meaning restricted route
const PublicRoute = ({children}) => {

    //console.log(useSelector(state => state.client));
    const {isAuthorized, user} = useSelector(state => state.auth);
    console.log(isAuthorized, user);

    return (
        <Fragment>
            <Header />
                {/* <Route {...rest} render={props => (
                        isAuthorized ?
                            <Navigate to="/dashboard" />
                        : <Component {...props} />
                    )} /> */} 
                { isAuthorized ? <Navigate to="/dashboard" /> : children }
            <Footer />        
        </Fragment>
    );
};

export default PublicRoute;