import React from "react";
import HomePage from "./pages/homepage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const { location } = window;
  const { pathname } = location;
  if (pathname === "/") {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
  else if (pathname === "/search") {
    return (
      <div>
        <SearchPage />
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    );
  }

};

export default App;
