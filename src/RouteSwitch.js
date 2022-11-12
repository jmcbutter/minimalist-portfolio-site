import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;