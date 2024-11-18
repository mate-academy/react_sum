export const Sum = ({ a = 0, b = 0 }) => {
  const valueA = a !== undefined ? a : 0;
  const valueB = b !== undefined ? b : 0;

  return (
    <p>
      Sum of {valueA} and {valueB} is {a + b}
    </p>
  );
};
