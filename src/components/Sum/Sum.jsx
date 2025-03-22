export const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;

  // It's string interpolation, no need to change anything!
  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
};
