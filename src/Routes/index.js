import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import Dashboard from "../Components/Pages/Dashboard";
//import Home from "../Components/Pages/Home";
//import About from  "../Components/Pages/About";
//import Login from  "../Components/Pages/Login";
import SampleRedux from  "../Components/Pages/SampleRedux";
//import Products from  "../Components/Pages/Products";
//import Categories from  "../Components/Pages/Categories";
import Blog from  "../Components/Pages/Hooks/UseContext/Blog";
import UseReducerHook from  "../Components/Pages/Hooks/UseReducer/UseReducerHook";
//import Register from  "../Components/Pages/Register";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = (props) => {

    const {isAuthorized, user} = useSelector(state => state.auth);
    console.log(isAuthorized, user);

    const publicRouteData = [
        { path: '/', name: 'Home', props: { name: 'Home' }}, 
        { path: '/home', name: 'Home',  props: { name: 'Home' }}, 
        { path: '/about', name: 'About', props: { name: 'About' }},
        { path: '/login', name: 'Login', props: { name: 'Login' }},
        { path: '/register', name: 'Register', props: { name: 'Register' }},
        { path: '/tab', name: 'Tab', props: { name: 'Tab' }},
    ];

    const privateRouteData = [ 
        { path: '/dashboard', name: 'Dashboard', props: { name: 'Dashboard' }}, 
        { path: '/products', name: 'Products',  props: { name: 'Products' }}, 
        { path: '/categories', name: 'Categories', props: { name: 'Categories' }}
    ]

    const renderComponent = (config) => {
        const { name, props } = config;
        const Component = require(`../Components/Pages/${name}`).default;
        return <Component {...props} />;
    };

    return (
        <Fragment>
            <Routes>
            {/* Public Routes*/}
            { publicRouteData.map((config, index) => 
                <Route path={config.path} key={index} element={
                    <PublicRoute>
                        {renderComponent(config.props)}
                    </PublicRoute>
                } />
            )}
            {/* Private Routes*/}
            { privateRouteData.map((config, index) => 
                <Route path={config.path} key={index} element={
                    <PrivateRoute>
                        {renderComponent(config.props)}
                    </PrivateRoute>
                } />
            )}
            <Route path="/redux" element={<SampleRedux />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/usereducerhook" element={<UseReducerHook />} />
            {/*
            <Route path="/login" element={<PublicRoute> <Login /></PublicRoute>} />
            <Route path="/About" element={ <About /> } />
            <Route path="/Register" element={ <PublicRoute>  <Register /> </PublicRoute> } />
            <Route path="/dashboard" element={ <PrivateRoute>  <Dashboard /> </PrivateRoute> } />
            <Route path="/products" element={ <PrivateRoute>  <Products /> </PrivateRoute> } />
            <Route path="/categories" element={ 
                <PrivateRoute> 
                    <Categories />
                </PrivateRoute>
            } />
             <PublicRoute restricted={false} component={Login} path={["/", "/login"]} exact />
            <PublicRoute restricted={false} component={Register} path="/register" exact />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
            <PublicRoute restricted={false} component={About} path="/about" exact />
            <PublicRoute restricted={false} component={Products} path="/products" exact />
            <PublicRoute restricted={false} component={Categories} path="/categories" exact /> */}
            <Route component={()=> {
                return (
                    <div> Sorry Not Found.....</div>
                );
                }}  />               
            </Routes>
        </Fragment>
    )
}

export default AppRoutes;