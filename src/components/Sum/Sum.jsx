export const Sum = () => ({
  title1,
  value1,
  title2,
  value2,
  title3,
  value3,
} => (
  <div className="Sum">
    <h2 className="Sum__title">
      {title1}
    </h2>
    <div className="Sum__value">
      {value1}
    </div>

    <h2 className="Sum__title">
      {title2}
    </h2>
    <div className="Sum__value">
      {value2}
    </div>

    <h2 className="Sum__title">
      {title3}
    </h2>
    <div className="Sum__value">
      {value3}
    </div>
  </div>
);
