import './Sum.css';

export const Sum = ({
  a = 0,
  b = 0,
}) => (
  <p className="p">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
