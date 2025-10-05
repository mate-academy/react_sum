// Working but incorrect writing style
// export const Sum = ({ a = 0, b = 0 }) => {
//   return (
//     <p>
//       Sum of {a} and {b} is {parseFloat(a) + parseFloat(b)}
//     </p>
//   );
// };

export const Sum = ({ a = 0, b = 0 }) => {
  return <p>{`Sum of ${a} and ${b} is ${Number(a) + Number(b)}`}</p>;
};
