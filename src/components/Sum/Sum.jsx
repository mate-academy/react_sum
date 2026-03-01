// export const Sum = () => ();
export const Sum = ({ val1 = 0, val2 = 0 }) => (
  <p>
    Sum of {val1} and {val2} is {val1 + val2}
  </p>
);
