import Invoicer from "./pages/Invoicer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LeftSideBar } from "./components/app/LeftSideBar";
import { ComplexNavbar } from "./components/app/ComplexNavbar";

function App() {
  return (
    <div>
      <ComplexNavbar />
      {/* <LeftSideBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/invoicer" element={<Invoicer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
