import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List/List";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/list" element={ <List /> } />
      </Routes>
    </>
  );
}

export default App;
