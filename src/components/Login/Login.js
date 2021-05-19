import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { applyMiddleware } from 'redux';
import { addLoginUser } from '../../store/loginSlice';
import Admin from '../Admin/Admin';
import './Login.css'


const Login = () => {
    const users = useSelector((state) => state.users)
    const userList = users.map(user => user);
    const loginUser = useSelector((state) => state.loginUser)
    const loginList = loginUser.map(loginUser => loginUser);
    console.log(loginList[0])
    //internal states
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('')
    const [asAdmin, setAsAdmin] = useState(false)

    //history for in app routing
    const history = useHistory()
    const dispatch = useDispatch()

    

    // console.log(userList[0].username)
    // for (var i = 0; i < userList.length; i++) {
    //     console.log(userList[i].username)
    //     if (userList[i].username === username && userList[i].password === password) {
    //         history.push('/user')
    //     }
    //     else console.log('Wrong user password')
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].username === username && userList[i].password === password) {

                history.push('/user')
                dispatch(
                    addLoginUser({
                        id: Date.now(),
                        user: userList[i].username,
                        pass: userList[i].password
                    })
                )
            }
            else if(userList[i].username !== username){
                
            }
            else if(userList[i].password !== password){
                const alt = () => alert("wrong username and password!")
                alt()
            }
            else {
                const alt = () => alert("wrong username and password!")
                alt()
            }
        }
    }

    const handleAdmin = (e) => {
        e.preventDefault()
        if (asAdmin === false)
            setAsAdmin(true)
        else setAsAdmin(false)
    }
    const handleAdminSubmit = (e) => {
        e.preventDefault()
        if (adminName === "admin" && adminPassword === "1228989") {
            dispatch(
                addLoginUser({
                    id: Date.now(),
                    user: 'admin',
                    pass: '1228989'
                })
            )
            history.push('/admin')
        }
        else if(adminPassword !== "1228989"){
            const alt = () => alert("wrong username and password!")
            alt()
        }
        else {
            const alt = () => alert("wrong username and password!")
            alt()
        } 
    }


    return (
        <div className="user-wrapper">
            {asAdmin ?
                <div className="login-wrapper login-fadeInDown">
                    <h2>Please Login As Admin</h2>
                    <input type="text" placeholder="Enter Name" onBlur={e => setAdminName(e.target.value)} />
                    <input type="password" placeholder="Enter Password" onBlur={e => setAdminPassword(e.target.value)} />
                    <input type="submit" onClick={handleAdminSubmit} />
                    <input type="submit" onClick={handleAdmin} value="Login As User" />
                </div> :
                <div className="login-wrapper login-fadeInDown">
                    <h2>Please Login As A User</h2>
                    <input type="text" placeholder="Enter User Name" onBlur={e => setUser(e.target.value)} />
                    <input type="password" placeholder="Enter User Password" onBlur={e => setPassword(e.target.value)} />
                    <input type="submit" onClick={handleSubmit} />
                    <input type="submit" onClick={handleAdmin} value="Login As Admin" />
                </div>

            }
        </div>
    );
};

export default Login;