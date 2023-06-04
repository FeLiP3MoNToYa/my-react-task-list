
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default TaskList;







