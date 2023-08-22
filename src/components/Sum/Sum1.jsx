export const Sum = ({ a = 0, b = 0 }) => {
  let output = '';

  if (a !== 0 && b !== 0) {
    output = `Sum of ${a} and ${b} is ${a + b}`;
  } else if (a !== 0) {
    output = `just a = ${a}`;
  } else if (b !== 0) {
    output = `just b = ${b}`;
  } else {
    output = 'No parameters provided.';
  }

  return <p>{output}</p>;
};
