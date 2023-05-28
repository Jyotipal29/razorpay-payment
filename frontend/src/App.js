import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
