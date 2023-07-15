export const Sum = ({ a = 0, b = 0 }) => {
  const resultMessage = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {resultMessage}
    </p>
  );
};
