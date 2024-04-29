import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CryptoHome />} />
          <Route path="/coin/:id" element={<CryptoDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
