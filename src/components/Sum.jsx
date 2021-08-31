import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  `Sum of ${a} and ${b} is ${a + b}`
);

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
