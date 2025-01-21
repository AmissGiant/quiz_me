import react from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Learn from "./components/learn/Learn";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Learn" element={<Learn />} />
          <Route path="Stats" element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
