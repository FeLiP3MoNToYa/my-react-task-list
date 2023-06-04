
import Header from './Components/Header';
import TaskList from './Components/TaskList';

const App = () => {
  const tasks = [
    { name: 'Task 1', completed: true },
    { name: 'Task 2', completed: false },
    { name: 'Task 3', completed: false },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;


