import PropTypes from 'prop-types';

const Sum = ({ a = 0, b = 0 }) => (
  `Sum of ${a} and ${b} is ${a + b}`
);

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
