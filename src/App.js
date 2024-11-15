import React from 'react';
import { BrowserRouter as Router, Route, Navigate as Redirect, Routes as Switch} from 'react-router-dom';
import SignIn from './login-register/SingIn';
import Register from './login-register/Register';
import Home from "./Home";

const App = () => {
    const defaultRoute = window.location.pathname === '/' ? <Redirect to="/home"/> : undefined;
    return (
        <Router>
            <Switch>
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/signin" element={SignIn} />
                <Route exact path="/register" element={Register} />
            </Switch>
            {defaultRoute}
        </Router>
    );
};

export default App;
