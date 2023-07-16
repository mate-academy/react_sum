export const Sum = ({ firstNumber = 0, secondNumber = 0 }) => {
  const sum = firstNumber + secondNumber;

  return <p>{`Sum of ${firstNumber} and ${secondNumber} is ${sum}`}</p>;
};
