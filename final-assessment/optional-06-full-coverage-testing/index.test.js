import { describe, it, expect } from 'bun:test';
import sum from '../optional-06-full-coverage-testing/index.js';

describe('Calculation', () => {
  it('Postive test: should sum correctly', () => {
    //Arrange
    const operandA = 2;
    const operandB = 2;

    //Action
    const actualValue = sum(operandA, operandB);

    //Assert
    const expectedValue = 4;
    expect(actualValue).toBe(expectedValue);
  });

  it('Negative test: should return zero if passed string on "a" parameter', () => {
    //Arrange
    const operandA = '9';
    const operandB = 10;

    //Action
    const actualValue = sum(operandA, operandB);

    //Assert
    const expectedValue = 0;
    expect(actualValue).toBe(expectedValue);
  });

  it('Negative test: should return zero if passed string on "b" parameter', () => {
    //Arrange
    const operandA = 9;
    const operandB = '10';

    //Action
    const actualValue = sum(operandA, operandB);

    //Assert
    const expectedValue = 0;
    expect(actualValue).toBe(expectedValue);
  });
});