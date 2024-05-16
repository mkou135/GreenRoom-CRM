import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "../pocketbaseClient";
import { LoginCard } from "../components/app/LoginCard";

// eslint-disable-next-line react/prop-types
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await pb.collection("users").authWithPassword(email, password);
      onLogin();
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginCard
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default LoginPage;