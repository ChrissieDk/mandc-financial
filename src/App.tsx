import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";

const App: React.FC = () => {
  return (
    <Router basename="/mandc-financial">
      <AppContent />
    </Router>
  );
};

export default App;
