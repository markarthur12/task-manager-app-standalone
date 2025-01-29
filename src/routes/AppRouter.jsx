import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "../components/NavBar";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
