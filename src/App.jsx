import { Routes, Route } from "react-router-dom";
import Weather from "./pages/Weather/Weather";
import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/weather" element={ <Weather /> } />
        <Route path="/todo" element={ <Todo /> } />
      </Routes>
    </>
  );
}

export default App;
