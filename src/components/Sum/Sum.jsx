// export const Sum = () => ();
export const Sum = calculate => {
  const a = calculate.a || 0;
  const b = calculate.b || 0;

  return (
    <p>
      Sum of {a} and {b} is {a + b}
    </p>
  );
};
