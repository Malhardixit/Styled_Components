import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Switch is replaced by Routes and
import Home from "./pages";
import SigninPage from "./pages/signin";

//Route declaation from component={Home} to element={<Home/>}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
