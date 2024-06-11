// export const Sum = () => ();
export const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;

  return (
    <p className="Sum">
      Sum of {a} and {b} is {sum}
    </p>
  );
};
