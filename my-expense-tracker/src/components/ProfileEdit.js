import React, { useState, useEffect } from 'react';
import { fetchUserDetails, updateProfile } from '../services/authService';

const ProfileEdit = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Fetch user details on component mount
    useEffect(() => {
        fetchUserDetails().then(response => {
            setUser(response.data); // Set the user details to state
        }).catch(error => {
            console.error("Error fetching user details:", error);
        });
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Handle form submission
    const handleUpdate = () => {
        updateProfile(user).then(response => {
            console.log("Profile updated successfully");
        }).catch(error => {
            console.error("Error updating profile:", error);
        });
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default ProfileEdit;
