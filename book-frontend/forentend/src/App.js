import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componants/Header"; 
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return <div>
 <BrowserRouter>
 <Header />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
   </Routes>
 </BrowserRouter>
  </div>
}

export default App;
