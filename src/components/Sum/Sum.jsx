
export const Sum = ({ firstValue = 0, secondValue = 0 }) => (
  <p>
    {`Sum of ${firstValue} and ${secondValue}`}
    {` is ${firstValue + secondValue}`}
  </p>
);
