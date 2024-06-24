import React, { useState, useEffect } from 'react';
import { getBudget, updateBudget } from '../services/budgetService';

const Budget = () => {
    const [budget, setBudget] = useState(0);

    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const data = await getBudget();
                setBudget(data.totalBudget);
            } catch (error) {
                console.error('Error fetching budget:', error);
            }
        };

        fetchBudget();
    }, []);

    const handleAddFunds = async () => {
        try {
            const data = await updateBudget(budget + 100);
            setBudget(data.totalBudget);
        } catch (error) {
            console.error('Error updating budget:', error);
        }
    };

    return (
        <div>
            <h1>Presupuesto Actual: ${budget}</h1>
            <button onClick={handleAddFunds}>Añadir $100</button>
        </div>
    );
};

export default Budget;
