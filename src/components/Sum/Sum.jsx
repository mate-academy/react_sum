// export const Sum = () => ();

export const Sum = ({ a, b }) => {
  if (a === undefined || b === undefined) {
    return <p>Please provide values for both a and b props</p>;
  }

  const sum = a + b;
  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
};
