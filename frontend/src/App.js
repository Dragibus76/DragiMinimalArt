import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Favoris" element={<Favorite/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
