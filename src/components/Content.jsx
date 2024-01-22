import PropTypes from 'prop-types';
import Part from './Part';

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  );
};

Content.propTypes = {
  part1: PropTypes.object.isRequired,
  part2: PropTypes.object.isRequired,
  part3: PropTypes.object.isRequired,
};

export default Content;
