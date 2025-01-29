import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Task Manager</Link>
      </div>
    </nav>
  );
};

export default AppNavbar;
