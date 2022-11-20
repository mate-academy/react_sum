import PropTypes from 'prop-types';

export function Sum({ a, b }) {
  return (`Sum of ${a} and ${b} is ${a + b}`);
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.PropTypes = {
  Sum: PropTypes.number,
  a: PropTypes.number,
  b: PropTypes.number,
};
