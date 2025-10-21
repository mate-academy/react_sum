export const Sum = ({ a: propA, b: propB }) => {
  const a = Number(propA) || 0;
  const b = Number(propB) || 0;
  const result = a + b;

  return <p>{`Sum of ${a} and ${b} is ${result}`}</p>;
};
