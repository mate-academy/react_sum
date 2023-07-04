export const Sum = ({ a = 0, b = 0 }) => {
  const sumMessage = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {sumMessage}
    </p>
  );
};
