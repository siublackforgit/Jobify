
import Hello from "./components/Hello"
import Landing from "./components/Landing"


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"






function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/account" element={<div>Account</div>} />
          <Route path="/cash" element={<div>Cash</div>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
