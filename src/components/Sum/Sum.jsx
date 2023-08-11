export const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;

  return (
    <div className="Sum">
      <p>
        {`Sum of ${a} and ${b} is ${sum}`}
      </p>
    </div>
  );
};
