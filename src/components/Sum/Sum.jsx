export const Sum = ({ a = 0, b = 0 }) => {
  return (
    <div>
      <p className="text">
        Sum of {a} and {b} is {a + b}
      </p>
    </div>
  );
};
