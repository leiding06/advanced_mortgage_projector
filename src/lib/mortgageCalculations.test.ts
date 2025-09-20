// src/lib/mortgageCalculations.test.ts
import { calculateMonthlyPayment } from './mortgageCalculations';

describe('calculateMonthlyPayment', () => {
    it('should correctly calculate for standard parameters', () => {
        const result = calculateMonthlyPayment(300000, 0.04, 30);
        expect(result).toBeCloseTo(1432.25, 2); //toBeCloseTo can set a threshold for floating point comparison
    });

    it('should handle zero interest rate', () => {
        const result = calculateMonthlyPayment(300000, 0, 30);
        expect(result).toBeCloseTo(833.33, 2); // 300000 / (30 * 12)
    });

    it('should throw error for negative loan amount', () => {
    expect(() => calculateMonthlyPayment(-100000, 0.04, 30))
        .toThrow(/must be greater than zero/); // match error message containing "must be greater than zero"
    });

    it('should throw error for zero term years', () => {
        expect(() => calculateMonthlyPayment(300000, 0.04, 0))
            .toThrow(/loan term/i); // match error message containing "loan term"
});});