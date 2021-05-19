import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDish } from '../../../store/dishSlice';


const DishList = () => {
    //dishes state
    const dishes = useSelector((state) => state.dishes)

    //logged in user state
    const loginUser = useSelector((state) => state.loginUser)
    const loginList = loginUser.map(loginUser => loginUser);
    const dispatch = useDispatch();
    //deleting from redux
    const handleDelete = (id) => {
        dispatch(deleteDish({id: id.id}))
    }
    return (
        
        <>
        {loginList[1]?.user === "admin" ? <section className="container-fluid">
                <div className="row admin-container">
                    <div className="col-md-2 py-5 sidebar-admin">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <div className="order-list">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Dish Name</th>
                                        <th scope="col">Carbohydrates</th>
                                        <th scope="col">Protein</th>
                                        <th scope="col">Fat</th>
                                        <th scope="col">Calories</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                {dishes.map((dish) =>
                                    <tbody key={dish.id}>
                                        <tr key={dish.id}>
                                            <th scope="row">{dish.title}</th>
                                            <td>{dish.protein}</td>
                                            <td>{dish.fat}</td>
                                            <td>{dish.carb}</td>
                                            <td><button className="btn btn-secondary">{dish.calories}</button></td>
                                            <td><button className="btn btn-secondary" onClick={(e) => handleDelete(dish)}>X</button></td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </section> :
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

export default DishList;