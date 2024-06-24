import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext'; // Asumiendo que tienes un contexto para el usuario

export const BudgetComponent = () => {
    const [budget, setBudget] = useState(0);
    const { user } = useContext(UserContext); // Utilizar el contexto para obtener el ID del usuario

    useEffect(() => {
        if (user && user.userId) {
            fetchBudget();
        }
    }, [user]);

    const fetchBudget = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/budget/${user.userId}`);
            setBudget(response.data.totalBudget);
        } catch (error) {
            console.error('Error fetching budget:', error);
        }
    };

    const handleUpdateBudget = async (amount) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/budget/${user.userId}`, { totalBudget: amount });
            setBudget(response.data.totalBudget);
        } catch (error) {
            console.error('Error updating budget:', error);
        }
    };

    return (
        <div>
            <h1>Presupuesto Actual: ${budget}</h1>
            <button onClick={() => handleUpdateBudget(budget + 100)}>Añadir $100</button>
        </div>
    );
};
