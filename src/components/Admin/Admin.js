import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddDish from './AddDish/AddDish';
import './Admin.css'
import DishList from './DishList/DishList';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {
    //logged in user state
    const loginUser = useSelector((state) => state.loginUser)
    const loginList = loginUser.map(loginUser => loginUser);
    return (
        <>
        { loginList[1]?.user === "admin" ? <section className="container-fluid">
            <div className="row admin-container">
                <div className="col-md-2 py-5 sidebar-admin">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 admin-panel">
                    <h1>Welcome to admin panel.</h1>
                    <h2>If you want to add dishes <Link to="/addDish">click here</Link></h2>
                    <h2>If you want to see all dish list <Link to="/dishList">click here</Link></h2>
                    <h2>If you want to check users view of the dishes <Link to="/user">click here</Link></h2>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/addDish">
                                <AddDish></AddDish>
                            </Route>
                            <Route path="/dishList">
                                <DishList></DishList>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </section> 
        : 
        <section className="container-fluid h-100">
                <div className="text-center align-items-center not-found">
                    <h2>404 not found!</h2>
                    <p><Link to="/login">Click Here For Login!!</Link></p>
                </div>
        </section>
        }
    </>
        
    );
};

export default Admin;