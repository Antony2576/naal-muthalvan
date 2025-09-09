import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import VegRecipes from "../src/components/VegRecipes";
import NonVegRecipes from "../src/components/NonVegRecipes";
import DessertRecipes from "../src/components/DessertRecipes";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav style={{ background: "#ffa726", padding: "1rem", textAlign: "center" }}>
        <Link to="/" style={btnStyle}>Home</Link>
        <Link to="/veg" style={btnStyle}>Veg Recipes</Link>
        <Link to="/nonveg" style={btnStyle}>Non-Veg Recipes</Link>
        <Link to="/desserts" style={btnStyle}>Desserts</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/veg" element={<VegRecipes />} />
        <Route path="/nonveg" element={<NonVegRecipes />} />
        <Route path="/desserts" element={<DessertRecipes />} />
      </Routes>
    </Router>
  );
}

// Button Styles
const btnStyle = {
  margin: "0 10px",
  padding: "10px 15px",
  border: "none",
  borderRadius: "6px",
  background: "#333",
  color: "white",
  textDecoration: "none",
};

export default App;
