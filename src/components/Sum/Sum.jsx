// export const Sum = () => ();
export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    Sum of {a || 0} and {b || 0} is {a + b}
  </p>
);
