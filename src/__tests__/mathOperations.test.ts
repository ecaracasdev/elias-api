import { add, subtrac } from '@src/helpers/mathOperations';

describe('this is a mathOperations test', () => {
  it('sum test', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('sub test', () => {
    expect(subtrac(2, 1)).toBe(1);
  });
});
