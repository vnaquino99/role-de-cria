import { useState } from "react";
import UserForm from "../src/components/UserForm";
import { useNavigate } from "react-router-dom";

const LoginPage = ({isAberto}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://role-de-cria.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        window.alert("Erro no login:", data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      window.alert("Login bem-sucedido!", data);
      navigate("/home");
    } catch (err) {
      console.error("Erro ao chamar API:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-teal-500 h-screen">
      <UserForm
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <div
        className={`bg-amber-200 fixed  top-[48px] w-[50%] h-[80%] transition-all ${
          isAberto ? "right-0 z-50" : "right-[-60vw]"
        }`}
      >
        Menu
      </div>
    </div>
  );
};

export default LoginPage;
