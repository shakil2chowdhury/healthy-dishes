
import React  from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    const handleLogout = () => {
        window.location.replace("/login");
    }
    return (
        <div className="flex-column sidebar-main">
            <div className="mt-2"><Link to="/addDish">Add Dishes</Link></div>
            <div className="mt-2"><Link to="/dishList">View Dishes</Link></div>
            <div className="mt-2"><Link to="/user">User Dashboard</Link></div>
            <div className="mt-2"><Link to="/login" onClick={handleLogout}>Log out</Link></div>
        </div>
    );
};

export default Sidebar;