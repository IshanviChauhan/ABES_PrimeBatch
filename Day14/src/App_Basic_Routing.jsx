import React from "react";
import HomePage from "./pages/homepage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
//Install using npm i react-router
import { BrowserRouter, Routes, Route } from "react-router";

//equivalent word of pages is routes

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )

};

export default App;
