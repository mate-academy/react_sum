export const Sum = ({ a = 0, b = 0 }) => {
  const sumNumber = a + b;

  return (
    <p>
      Sum of {a} and {b} is {sumNumber}
    </p>
  );
};
