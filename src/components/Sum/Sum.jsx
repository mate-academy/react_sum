// export const Sum = () => ();
export const Sum = ({
  a = 0, b = 0,
}) => (
  <div className="sum">
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  </div>
);
