// export const Sum = () => ();
export function Sum({ a = 0, b = 0 }) {
  const space = '   ';

  return (
    <p>
      {`Sum${space}of ${a}  and  ${b}  is  ${a + b}`}
    </p>
  );
}
