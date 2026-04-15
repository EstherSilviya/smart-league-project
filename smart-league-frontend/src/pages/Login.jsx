import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Smart League</h2>
        <p className="auth-subtitle">Editor Login</p>

        <form onSubmit={handleLogin}>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          New user?{" "}
          <span
            className="auth-link"
            onClick={() => navigate("/")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}