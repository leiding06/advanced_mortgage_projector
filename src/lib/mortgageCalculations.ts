// src/lib/mortgageCalculations.ts

/**
 * Calculates the fixed monthly payment for a mortgage loan using the standard formula.
 * 
 * @param loan - The principal loan amount (must be > 0)
 * @param annualRate - The annual interest rate as a decimal (e.g., 0.04 for 4%)
 * @param termYears - The loan term in years (must be > 0)
 * @returns The monthly payment amount
 * @throws Will throw an error if any parameter is invalid
 * 
 * @example
 * // Calculate monthly payment for a $300,000 loan at 4% for 30 years
 * const payment = calculateMonthlyPayment(300000, 0.04, 30);
 * // Returns approximately 1432.25
 */

export function calculateMonthlyPayment(
    loan: number, 
    annualRate: number, 
    termYears: number
    ): number {
    // check that inputs are valid
    if (loan <= 0) throw new Error('Loan amount must be greater than zero');
    if (annualRate < 0) throw new Error('Annual rate must be greater than zero');
    if (termYears <= 0) throw new Error('Loan term must be greater than zero');
    
    if (annualRate === 0) {
    return loan / (termYears * 12);
    }
    
    // calculate monthly payment
    const monthlyRate = annualRate / 12;
    const numPayments = termYears * 12;
    const monthlyPayment = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    
    return monthlyPayment;
}