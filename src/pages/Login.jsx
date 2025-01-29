import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/home");

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
