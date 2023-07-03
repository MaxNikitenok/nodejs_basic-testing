import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  test.each`
    a       | b            | action                 | expected
    ${1}    | ${2}         | ${Action.Add}          | ${3}
    ${2}    | ${2}         | ${Action.Add}          | ${4}
    ${3}    | ${2}         | ${Action.Add}          | ${5}
    ${1}    | ${2}         | ${Action.Subtract}     | ${-1}
    ${2}    | ${2}         | ${Action.Subtract}     | ${0}
    ${3}    | ${2}         | ${Action.Subtract}     | ${1}
    ${1}    | ${2}         | ${Action.Multiply}     | ${2}
    ${2}    | ${2}         | ${Action.Multiply}     | ${4}
    ${3}    | ${2}         | ${Action.Multiply}     | ${6}
    ${2}    | ${2}         | ${Action.Divide}       | ${1}
    ${1}    | ${2}         | ${Action.Divide}       | ${0.5}
    ${3}    | ${2}         | ${Action.Divide}       | ${1.5}
    ${1}    | ${1}         | ${Action.Exponentiate} | ${1}
    ${2}    | ${2}         | ${Action.Exponentiate} | ${4}
    ${3}    | ${3}         | ${Action.Exponentiate} | ${27}
    ${1}    | ${'2'}       | ${Action.Exponentiate} | ${null}
    ${2}    | ${2}         | ${'someAction'}        | ${null}
    ${3}    | ${2}         | ${null}                | ${null}
    ${1}    | ${2}         | ${undefined}           | ${null}
    ${null} | ${2}         | ${Action.Add}          | ${null}
    ${3}    | ${undefined} | ${Action.Add}          | ${null}
  `(
    'calculate($a, $b) should return $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({
        a: a,
        b: b,
        action: action,
      });
      expect(result).toBe(expected);
    },
  );
});
// Consider to use Jest table tests API to test all cases above
