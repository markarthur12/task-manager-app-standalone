import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Task Manager</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
