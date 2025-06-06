export const Sum = ({ a = 0, b = 0 }) => {
  const soma = a + b;

  return (
    <div>
      <p>
        Sum of {a} and {b} is {soma}
      </p>
    </div>
  );
};
