export const Sum = ({ a = 0, b = 0, total = a + b }) => (
  <div>
    <p>
      Sum of {a} and {b} is {total}
    </p>
  </div>
);
