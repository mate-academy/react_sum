import PropTypes from 'prop-types';

export function Sum(props) {
  return (
    `Sum of ${props.a} and ${props.b} is ${props.a + props.b}`
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propsTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
