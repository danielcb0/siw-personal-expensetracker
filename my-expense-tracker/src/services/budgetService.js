import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getBudget = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) throw new Error('No token found');
    if (!userId) throw new Error('No userId found');

    const response = await axios.get(`${API_URL}/budget/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateBudget = async (amount) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) throw new Error('No token found');
    if (!userId) throw new Error('No userId found');

    const response = await axios.post(`${API_URL}/budget/update/${userId}`, { amount }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
