import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Dash from "./Dash";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dash />} />
         <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
