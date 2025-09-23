export const Sum = ({ a = 0, b = 0 }) => {
  const aNum = Number(a);
  const bNum = Number(b);

  return <p>{`Sum of ${aNum} and ${bNum} is ${aNum + bNum}`}</p>;
};
