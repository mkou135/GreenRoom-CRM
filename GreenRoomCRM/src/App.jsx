/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Invoicer from "./pages/Invoicer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";
import { ComplexNavbar } from "./components/app/ComplexNavbar";
import pb from "./pocketbaseClient";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);

  useEffect(() => {
    // Subscribe to authStore changes
    const authStoreUnsubscribe = pb.authStore.onChange((token) => {
      setIsLoggedIn(pb.authStore.isValid);
    });

    // Cleanup subscription on component unmount
    return () => {
      authStoreUnsubscribe();
    };
  }, []);

  const handleLogout = () => {
    pb.authStore.clear();
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <main>
          <ComplexNavbar onLogout={handleLogout} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/invoicer" element={<Invoicer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;