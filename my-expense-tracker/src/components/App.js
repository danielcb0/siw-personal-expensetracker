import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import CategoryTransactions from './CategoryTransactions';
import EditCategory from './EditCategory';
import PrivateRoute from '../utils/PrivateRoute';
import Header from './Header';
import Budget from './Budget';
import ProfileEdit from './ProfileEdit';
import '../styles.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <div className="container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="/categories/:categoryId" element={<PrivateRoute />}>
                        <Route path="/categories/:categoryId" element={<CategoryTransactions />} />
                    </Route>
                    <Route path="/edit-category/:categoryId" element={<PrivateRoute />}>
                        <Route path="/edit-category/:categoryId" element={<EditCategory />} />
                    </Route>
                    <Route path="/budget" element={<PrivateRoute />}>
                        <Route path="/budget" element={<Budget />} />
                    </Route>
                    <Route path="/profile" element={<PrivateRoute />}>
                        <Route path="/profile" element={<ProfileEdit />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
