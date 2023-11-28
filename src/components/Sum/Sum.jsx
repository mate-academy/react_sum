// export const Sum = () => ();

export const Sum = (props) => {
  const a = props.a !== undefined ? props.a : 0;
  const b = props.b !== undefined ? props.b : 0;

  return (
    <p>
      Sum of
      {' '}
      {a}
      {' '}
      and
      {' '}
      {b}
      {' '}
      is
      {' '}
      {a + b}
    </p>
  );
};
