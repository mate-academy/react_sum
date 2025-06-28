export const Sum = ({ a = 0, b = 0 }) => {
  const total = a + b;

  return (
    <p>
      Sum of {a} and {b} is {total}
    </p>
  );
};
