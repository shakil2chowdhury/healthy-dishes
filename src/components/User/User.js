import React, { useState } from 'react';
import './User.css'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const User = () => {
    // calling dishes state for existing dishes
    const dishes = useSelector((state) => state.dishes)
   
    //search functionality
    const [searchTerm, setSearchTerm] = useState('')

    //logging out easy way
    const handleLogout = () => {
        window.location.replace("/login");
    }

    //calling logged in user state
    const loginUser = useSelector((state) => state.loginUser)

    //testing if user is exists or not
    if(loginUser[1]){
        return (
            <div className="user-container">
                <div className="user-main">
                    <h1>Welcome to Dashboard , <a href="/login" onClick={handleLogout}>Logout</a></h1>
                    <h2>Dishes are given below, <Link to="/addDish">Add Dish as an Admin</Link></h2>
                    <input type="text" className='search-box' placeholder="Search Dishes" onChange={event => {setSearchTerm(event.target.value)}} />
                    <div className="dishes-list">
                        {dishes.filter((dish) => {
                            if(searchTerm === ''){
                                return dish;
                            } else if (dish.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return(
                                    <div className="dish-container">
                                        <img src={dish.img} alt="use" />
                                        <div className="description">
                                            <h5>{dish.title}</h5>
                                            <p>Protein : <span>{dish.protein}g</span></p>
                                            <p>Fat: <span>{dish.fat}g</span></p>
                                            <p>Carbohydrates: <span>{dish.carb}g</span></p>
                                            <p>Calories: <span>{dish.calories}g</span></p>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        ).map((dish) => 
                        <div className="dish-container">
                            <img src={dish.img} alt="use" />
                            <div className="description">
                                <h5>{dish.title}</h5>
                                <p>Protein : <span>{dish.protein}g</span></p>
                                <p>Fat: <span>{dish.fat}g</span></p>
                                <p>Carbohydrates: <span>{dish.carb}g</span></p>
                                <p>Calories: <span>{dish.calories}g</span></p>
                            </div>
                        </div> )}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
        <section className="container-fluid h-100">
                <div className="text-center align-items-center not-found">
                    <h2>404 not found!</h2>
                    <p><Link to="/login">Click Here For Login!!</Link></p>
                </div>
        </section>
        )
    }
    
};

export default User;