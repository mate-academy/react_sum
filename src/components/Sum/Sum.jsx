export const Sum = ({ firstValue = 0, secondValue = 0 }) => {
  const sum = firstValue + secondValue;

  return (
    <p>
      {` Sum of ${firstValue} and ${secondValue} is ${sum}`}
    </p>
  );
};
