// export const Sum = () => ();
export const Sum = ({ first = 0, second = 0 }) => (
  <p>
    {`Sum of ${first} and ${second} is ${first + second}`}
  </p>
);
