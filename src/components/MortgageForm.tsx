'use client';

import { useState } from 'react';
import { calculateMonthlyPayment } from '@/lib/mortgageCalculations';

export default function MortgageForm() {
    const [loan, setLoan] = useState('');
    const [annualRate, setAnnualRate] = useState('');
    const [termYears, setTermYears] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const payment = calculateMonthlyPayment(
            parseFloat(loan),
            parseFloat(annualRate) / 100,
            parseFloat(termYears)
            );
            setMonthlyPayment(payment);
        } catch (err) { 
            if (err instanceof Error) {
            setError(err.message);
            } else {
            setError("An unknown error occurred.");
            }
            setMonthlyPayment(null);
        }
        };


    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-auto transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Mortgage Calculator
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="loan" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Loan Amount ($)
            </label>
            <input
                id="loan"
                type="number"
                value={loan}
                onChange={(e) => setLoan(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., 300000"
                required
            />
            </div>

            <div>
            <label htmlFor="annualRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Annual Interest Rate (%)
            </label>
            <input
                id="annualRate"
                type="number"
                step="0.01"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., 4.5"
                required
            />
            </div>

            <div>
            <label htmlFor="termYears" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Loan Term (Years)
            </label>
            <input
                id="termYears"
                type="number"
                value={termYears}
                onChange={(e) => setTermYears(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., 30"
                required
            />
            </div>
            
            <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-sm text-lg font-medium text-white bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
            Calculate
            </button>
        </form>

        {/* Result Display */}
        {monthlyPayment !== null && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md text-center transition-colors">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Estimated Monthly Payment:
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                ${monthlyPayment.toFixed(2)}
            </p>
            </div>
        )}

        {/* Error Message */}
        {error && (
            <div className="mt-4 p-3 rounded-md bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700">
            <p className="text-sm font-medium text-red-700 dark:text-red-300">
                {error}
            </p>
            </div>
        )}
        </div>
    );
}