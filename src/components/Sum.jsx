import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  `Sum of ${a} and ${b} is ${a + b}`
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.PropTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
