import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 7,
      action: Action.Add,
    });
    expect(result).toEqual(10);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({
      a: 7,
      b: 3,
      action: Action.Subtract,
    });
    expect(result).toEqual(4);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 7,
      action: Action.Multiply,
    });
    expect(result).toEqual(21);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({
      a: 4,
      b: 2,
      action: Action.Divide,
    });
    expect(result).toEqual(2);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(27);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({
      a: 3,
      b: 7,
      action: 'invalid action',
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({
      a: 3,
      b: '7',
      action: Action.Subtract,
    });
    expect(result).toBeNull();
  });
});
