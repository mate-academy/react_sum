export const Sum = ({
  firstTitle,
  secondTitle,
  sumTitle,
  num1 = 0,
  num2 = 0,
}) => (
  <p>
    {' '}
    {firstTitle} {num1} {secondTitle} {num2} {sumTitle} {num1 + num2}{' '}
  </p>
);
