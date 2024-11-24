export const Sum = props => {
  const { a = 0, b = 0 } = props;
  const result = a + b;
  return (
    <p>Sum of {a} and {b} is {result}</p>
  )
};
