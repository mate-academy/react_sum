export const Sum = ({ a = 0, b = 0 }) => {
  const res = a + b;

  return (
    <p>
      Sum of {a} and {b} is {res}
    </p>
  );
};
