// export const Sum = () => ();

export const Sum = ({ a = 0, b = 0 }) => {
  const calculateSum = (x, y) => x + y;

  return (
    <p>
      Sum of {a} and {b} is {calculateSum(a, b)}
    </p>
  );
};
