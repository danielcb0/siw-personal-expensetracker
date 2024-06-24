import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, { email, password });
        return response.data; // Se espera que la respuesta contenga token y userId
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const register = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, { firstName, lastName, email, password });
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
};

export const fetchUserDetails = () => {
    return axios.get(`${API_URL}/users/profile`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
};

export const updateProfile = (user) => {
    return axios.put(`${API_URL}/users/profile`, user, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
};
