/**
 * Component that sums two numbers and displays the result
 * @param {{a: number, b: number}} param0 Numbers to sum
 * @returns {JSX.Element} JSX Element displaying the sum
 */
export const Sum = ({ a = 0, b = 0 }) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);
