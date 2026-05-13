import React from "react";
import Home from "./pages/Home";

/**
 * App root. Single-page portfolio — no router needed.
 * If you add a blog/case-studies page later, wrap with BrowserRouter here.
 */
const App: React.FC = () => {
  return <Home />;
};

export default App;
