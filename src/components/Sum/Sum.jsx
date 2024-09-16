export const Sum = ({ a = 0, b = 0 }) => {
  const sumOfNumbers = a + b;

  return <p>{`Sum of ${a} and ${b} is ${sumOfNumbers}`}</p>;
};
