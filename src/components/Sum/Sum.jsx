// src/components/Sum/Sum.jsx
export function Sum({ a = 0, b = 0 }) {
  // garante número mesmo que venha string
  const x = Number(a ?? 0);
  const y = Number(b ?? 0);

  return <p>{`Sum of ${x} and ${y} is ${x + y}`}</p>;
}
