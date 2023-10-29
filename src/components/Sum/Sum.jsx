export const Sum = ({
  a = 0,
  b = 0,
}) => (
  <p className="sum">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
