// export const Sum = () => ();
export const Sum = ({ a = 0, b = 0 }) => (
  <>
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
