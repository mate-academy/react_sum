export const Sum = ({ a = 0, b = 0 }) => {
  const c = a + b;

  return (
    <p>
      Sum of {a} and {b} is {c}
    </p>
  );
};
