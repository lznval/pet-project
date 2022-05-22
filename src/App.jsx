import { Routes, Route } from "react-router-dom";
import List from "./pages/List/List";
import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/list" element={ <List /> } />
        <Route path="/todo" element={ <Todo /> } />
      </Routes>
    </>
  );
}

export default App;
