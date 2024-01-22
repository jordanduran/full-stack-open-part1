import PropTypes from 'prop-types';
import Part from './Part';

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.name} part={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

Content.propTypes = {
  parts: PropTypes.array.isRequired,
};

export default Content;
