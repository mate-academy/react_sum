export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    {`Sum of
    ${a}
     and
    ${b}
     is
    ${Number(a) + Number(b)}`}
  </p>
);
