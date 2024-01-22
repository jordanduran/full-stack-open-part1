import PropTypes from 'prop-types';

const Total = ({ parts }) => {
  const getCount = () => {
    let count = 0;
    parts.forEach((part) => {
      count += part.exercises;
    });

    return count;
  };

  return <p>Number of exercises {getCount()}</p>;
};

Total.propTypes = {
  parts: PropTypes.array.isRequired,
};

export default Total;
