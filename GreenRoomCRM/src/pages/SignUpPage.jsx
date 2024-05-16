import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "../pocketbaseClient";
import { SimpleRegistrationForm } from "../components/app/SimpleRegistrationForm";

// eslint-disable-next-line react/prop-types
function SignUpPage({ onSignUp }) {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username,
        email,
        password,
        passwordConfirm: password,
      };
      await pb.collection("users").create(data);
      onSignUp();
      navigate("/login");
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SimpleRegistrationForm
        username={username}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignUpPage;