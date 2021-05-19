import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import AddDish from './components/Admin/AddDish/AddDish';
import DishList from './components/Admin/DishList/DishList';
import User from './components/User/User';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addDish">
            <AddDish></AddDish>
          </Route>
          <Route path="/dishList">
            <DishList></DishList>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
