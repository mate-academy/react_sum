export const Sum = ({ a = 0, b = 0 }) => {
  if (a === undefined && b === undefined) {
    return <p>No params at all</p>;
  }

  return <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>;
};

export default Sum;
