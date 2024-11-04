import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import StatePage from "./pages/state/StatePage";
import ComponentPage from "./pages/component/ComponentPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/state" element={<StatePage />}></Route>
        <Route path="/component" element={<ComponentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
