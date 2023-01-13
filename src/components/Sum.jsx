/* eslint-disable react/jsx-one-expression-per-line */
import { number } from 'prop-types';

export function Sum({ a, b }) {
  return (
        // eslint-disable-next-line react/jsx-indent, react/react-in-jsx-scope
        <p> Sum of {a} and {b} is {a + b} </p>
  );
}

Sum.propTypes = {
  a: number,
  b: number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
