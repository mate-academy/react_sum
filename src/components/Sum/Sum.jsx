import './Sum.scss';

export const Sum = ({ a = 0, b = 0 }) => {
  return (
    <div className="Sum">
      <p className="Sum__text">{`Sum of ${a} and ${b} is ${a + b}`}</p>
    </div>
  );
};
