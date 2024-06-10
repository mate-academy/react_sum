export const Sum = ({ a = 0, b = 0 }) => {
  const sum = parseInt(a) + parseInt(b);

  return <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>;
};
