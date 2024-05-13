import Invoicer from "./pages/Invoicer";
import Home from "./pages/Home";
import Events from "./Events";
import Settings from "./pages/Settings";
import "./App.css";
import TopNavBar from "./components/app/TopNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNavBar />
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
