import './App.css';
import Home from "./Components/Home"

import Signup from "./Components/Signup"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
        <Router>
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route exact path="/Signup" element={<Signup/>}  />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
