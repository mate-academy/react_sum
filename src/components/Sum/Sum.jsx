export const Sum = ({ a = 0, b = 0 }) => {
  const value = a + b;

  return (
    <p>
      Sum of {a} and {b} is {value}
    </p>
  );
};
