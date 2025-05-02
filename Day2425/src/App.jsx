import { Routes, Route, BrowserRouter } from "react-router";
import { SearchPage } from "./pages/SearchPage";
import { SignupPage } from "./pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
