// export const Sum = () => ();
export const Sum = ({ a, b }) => {
  const sum = a + b;

  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
};
