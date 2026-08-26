export const Sum = ({ a = 0, b = 0 }) => {
  function calculateSum(x, y) {
    return x + y;
  }

  return (
    <p>
      Sum of {a} and {b} is {calculateSum(a, b)}
    </p>
  );
}
