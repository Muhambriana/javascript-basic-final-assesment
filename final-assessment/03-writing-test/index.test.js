import { describe, it, expect } from 'bun:test';
import { sum } from '../03-writing-test/index.js';

describe('Calculation', () => {
  it('should sum correctly', () => {
    //Arrange
    const operandA = 1;
    const operandB = 1;

    //Action
    const actualValue = sum(operandA, operandB);

    //Assert
    const expectedValue = 2;
    expect(actualValue).toBe(expectedValue);
  });
});