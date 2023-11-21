
export const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;
  const result = `Sum of ${a} and ${b} is ${sum}`;

  return (
    <p>{`${result}`}</p>
  );
};
